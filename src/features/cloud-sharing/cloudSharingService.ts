import type { FirebaseApp } from 'firebase/app';
import type { Functions, HttpsCallable } from 'firebase/functions';
import type { SecretFile } from '../secret-file';
import { parseSecretFile } from '../secret-file/validation/secretFileSchema';
import { isCloudShareId } from './cloudShareId';

const cloudFunctionsRegion = 'asia-east1';
const firebaseAppName = 'boundary-notes-cloud-sharing';

export type CloudSharingErrorCode =
  | 'configuration'
  | 'invalid'
  | 'notFound'
  | 'rateLimited'
  | 'siteBusy'
  | 'unavailable';

export class CloudSharingError extends Error {
  constructor(
    public readonly code: CloudSharingErrorCode,
    message: string,
    public readonly retryAfterSeconds: number | null = null,
  ) {
    super(message);
    this.name = 'CloudSharingError';
  }
}

export interface CreatedCloudShare {
  createdAt: string;
  shareId: string;
}

export interface CloudSecretFileSnapshot extends CreatedCloudShare {
  secretFile: SecretFile;
}

interface CallableContext {
  createShare: HttpsCallable<{ secretFile: SecretFile }, unknown>;
  getShare: HttpsCallable<{ shareId: string }, unknown>;
}

let callableContextPromise: Promise<CallableContext> | null = null;

function getFirebaseConfig() {
  return {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY?.trim(),
    appId: import.meta.env.VITE_FIREBASE_APP_ID?.trim(),
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN?.trim(),
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID?.trim(),
  };
}

function validateFirebaseConfig(): ReturnType<typeof getFirebaseConfig> {
  const config = getFirebaseConfig();
  const siteKey = import.meta.env.VITE_FIREBASE_RECAPTCHA_ENTERPRISE_SITE_KEY?.trim();

  if (!config.apiKey || !config.appId || !config.projectId || !siteKey) {
    throw new CloudSharingError('configuration', 'Firebase cloud sharing is not configured.');
  }

  return config;
}

async function getCallableContext(): Promise<CallableContext> {
  if (callableContextPromise) return callableContextPromise;

  callableContextPromise = (async () => {
    const config = validateFirebaseConfig();
    const siteKey = import.meta.env.VITE_FIREBASE_RECAPTCHA_ENTERPRISE_SITE_KEY?.trim();

    if (!siteKey) {
      throw new CloudSharingError('configuration', 'Firebase App Check is not configured.');
    }
    const [{ getApp, getApps, initializeApp }, appCheckModule, functionsModule] = await Promise.all([
      import('firebase/app'),
      import('firebase/app-check'),
      import('firebase/functions'),
    ]);
    const existingApp = getApps().find((app) => app.name === firebaseAppName);
    const app: FirebaseApp = existingApp ?? initializeApp(config, firebaseAppName);
    const debugToken = import.meta.env.VITE_FIREBASE_APPCHECK_DEBUG_TOKEN?.trim();

    if (import.meta.env.DEV && debugToken) {
      (globalThis as typeof globalThis & { FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean | string })
        .FIREBASE_APPCHECK_DEBUG_TOKEN = debugToken === 'true' ? true : debugToken;
    }

    appCheckModule.initializeAppCheck(getApp(firebaseAppName), {
      isTokenAutoRefreshEnabled: true,
      provider: new appCheckModule.ReCaptchaEnterpriseProvider(siteKey),
    });

    const functions: Functions = functionsModule.getFunctions(app, cloudFunctionsRegion);

    if (import.meta.env.DEV && import.meta.env.VITE_FIREBASE_USE_EMULATORS === 'true') {
      functionsModule.connectFunctionsEmulator(functions, '127.0.0.1', 5001);
    }

    return {
      createShare: functionsModule.httpsCallable(functions, 'createSharedSecretFile', {
        limitedUseAppCheckTokens: true,
        timeout: 30_000,
      }),
      getShare: functionsModule.httpsCallable(functions, 'getSharedSecretFile', {
        timeout: 20_000,
      }),
    };
  })().catch((error) => {
    callableContextPromise = null;
    throw normalizeCloudSharingError(error);
  });

  return callableContextPromise;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function parseCreatedShare(value: unknown): CreatedCloudShare {
  if (
    !isRecord(value) ||
    typeof value.shareId !== 'string' ||
    !isCloudShareId(value.shareId) ||
    typeof value.createdAt !== 'string' ||
    Number.isNaN(Date.parse(value.createdAt))
  ) {
    throw new CloudSharingError('invalid', 'The cloud response is invalid.');
  }

  return { createdAt: value.createdAt, shareId: value.shareId };
}

function normalizeCloudSharingError(error: unknown): CloudSharingError {
  if (error instanceof CloudSharingError) return error;

  const code = isRecord(error) && typeof error.code === 'string' ? error.code : '';
  const details = isRecord(error) && isRecord(error.details) ? error.details : null;
  const retryAfterSeconds = details && typeof details.retryAfterSeconds === 'number'
    ? details.retryAfterSeconds
    : null;
  const reason = details && typeof details.reason === 'string' ? details.reason : '';

  if (code.endsWith('/resource-exhausted')) {
    if (reason === 'global-rate-limit') {
      return new CloudSharingError('siteBusy', 'Site upload limit reached.', retryAfterSeconds);
    }

    return new CloudSharingError('rateLimited', 'Upload rate limit reached.', retryAfterSeconds);
  }

  if (code.endsWith('/not-found')) {
    return new CloudSharingError('notFound', 'Cloud secret file not found.');
  }

  if (code.endsWith('/invalid-argument') || code.endsWith('/data-loss')) {
    return new CloudSharingError('invalid', 'Cloud secret file is invalid.');
  }

  return new CloudSharingError('unavailable', 'Cloud sharing is temporarily unavailable.');
}

export async function createCloudSecretFile(secretFile: SecretFile): Promise<CreatedCloudShare> {
  try {
    const context = await getCallableContext();
    const result = await context.createShare({ secretFile: parseSecretFile(secretFile) });
    return parseCreatedShare(result.data);
  } catch (error) {
    throw normalizeCloudSharingError(error);
  }
}

export async function loadCloudSecretFile(shareId: string): Promise<CloudSecretFileSnapshot> {
  if (!isCloudShareId(shareId)) {
    throw new CloudSharingError('notFound', 'Cloud secret file not found.');
  }

  try {
    const context = await getCallableContext();
    const result = await context.getShare({ shareId });
    const createdShare = parseCreatedShare(result.data);

    if (!isRecord(result.data) || !('secretFile' in result.data)) {
      throw new CloudSharingError('invalid', 'The cloud response is invalid.');
    }

    return {
      ...createdShare,
      secretFile: parseSecretFile(result.data.secretFile),
    };
  } catch (error) {
    throw normalizeCloudSharingError(error);
  }
}
