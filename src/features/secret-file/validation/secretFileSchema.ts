import { z } from 'zod';
import {
  experienceAnswers,
  preferenceAnswers,
  secretFileScopes,
  type SecretFile,
} from '../domain/types';

const forbiddenNotePattern =
  /(?:https?:\/\/|www\.|\[[^\]\r\n]+\]\([^\s)]+\)|(?:[a-z0-9-]+\.)+(?:com|net|org|io|co|tw|app|dev|edu|gov|info))/i;

const timestampSchema = z.string().datetime({ offset: true });

export const secretFileNoteSchema = z
  .string()
  .refine((note) => Array.from(note).length <= 80, '備註最多只能有 80 個字元。')
  .refine((note) => !/[\u0000-\u001F\u007F]/.test(note), '備註不能包含換行或控制字元。')
  .refine((note) => !forbiddenNotePattern.test(note), '備註不能包含連結。');

const unansweredAnswerSchema = z.object({ state: z.literal('unanswered') }).strict();
const filteredOutAnswerSchema = z.object({ state: z.literal('filteredOut') }).strict();
const answeredAnswerSchema = z
  .object({
    experience: z.enum(experienceAnswers),
    note: secretFileNoteSchema,
    preference: z.enum(preferenceAnswers),
    state: z.literal('answered'),
  })
  .strict();

export const secretFileAnswerSchema = z.discriminatedUnion('state', [
  unansweredAnswerSchema,
  filteredOutAnswerSchema,
  answeredAnswerSchema,
]);

export const secretFileSchema = z
  .object({
    answers: z.record(z.string().min(1), secretFileAnswerSchema),
    createdAt: timestampSchema,
    fileId: z.string().regex(/^local_[A-Za-z0-9_-]{8,}$/, '檔案 ID 格式不正確。'),
    profileName: z.string().trim().min(1, '檔案必須保留填寫者名稱。'),
    questionBank: z
      .object({
        bankVersion: z.string().min(1),
        schemaVersion: z.number().int().positive(),
      })
      .strict(),
    schemaVersion: z.literal(1),
    scope: z.enum(secretFileScopes),
    spotlight: z
      .object({
        selectedQuestionIds: z.array(z.string().min(1)).max(5),
      })
      .strict()
      .superRefine((spotlight, context) => {
        if (new Set(spotlight.selectedQuestionIds).size !== spotlight.selectedQuestionIds.length) {
          context.addIssue({
            code: 'custom',
            message: 'spotlight 項目不得重複。',
            path: ['selectedQuestionIds'],
          });
        }
      }),
    updatedAt: timestampSchema,
  })
  .strict();

export class SecretFileValidationError extends Error {
  constructor(public readonly issues: readonly string[]) {
    super(`秘密檔案格式無法使用：${issues.join('；')}`);
    this.name = 'SecretFileValidationError';
  }
}

export class UnsupportedSecretFileSchemaError extends Error {
  constructor(schemaVersion: unknown) {
    super(`這份秘密檔案的 schemaVersion (${String(schemaVersion)}) 目前尚未支援。`);
    this.name = 'UnsupportedSecretFileSchemaError';
  }
}

function getSchemaVersion(value: unknown): unknown {
  if (typeof value !== 'object' || value === null || !('schemaVersion' in value)) {
    return undefined;
  }

  return value.schemaVersion;
}

export function parseSecretFile(input: unknown): SecretFile {
  const schemaVersion = getSchemaVersion(input);

  if (schemaVersion !== 1) {
    throw new UnsupportedSecretFileSchemaError(schemaVersion);
  }

  const parsed = secretFileSchema.safeParse(input);

  if (!parsed.success) {
    throw new SecretFileValidationError(parsed.error.issues.map((issue) => issue.message));
  }

  return parsed.data;
}
