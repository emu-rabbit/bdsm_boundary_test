import { describe, expect, it } from 'vitest';
import { createSecretFile } from '../domain/secretFile';
import type { QuestionDefinition, SecretFile } from '../domain/types';
import { parseSecretFile, SecretFileValidationError } from './secretFileSchema';

const questions: readonly QuestionDefinition[] = [
  { id: 'detail.impact.hand.active', level: 'detail', role: 'active' },
];

function createValidSecretFile(): SecretFile {
  return createSecretFile({
    bankSchemaVersion: 1,
    bankVersion: '2026-07-08',
    createdAt: '2026-07-10T06:00:00.000Z',
    fileId: 'local_test-file-1234',
    profileName: '兔子',
    questions,
    scope: 'all',
  });
}

describe('secret-file runtime validation', () => {
  it('accepts the current portable secret-file schema', () => {
    expect(parseSecretFile(createValidSecretFile())).toEqual(createValidSecretFile());
  });

  it('rejects notes that could display links or unsafe control characters', () => {
    const secretFile = createValidSecretFile();
    secretFile.answers['detail.impact.hand.active'] = {
      experience: 'some',
      note: 'https://example.com',
      preference: 'neutral',
      state: 'answered',
    };

    expect(() => parseSecretFile(secretFile)).toThrow(SecretFileValidationError);

    secretFile.answers['detail.impact.hand.active'] = {
      experience: 'some',
      note: '[網站](example.test)',
      preference: 'neutral',
      state: 'answered',
    };

    expect(() => parseSecretFile(secretFile)).toThrow(SecretFileValidationError);

    secretFile.answers['detail.impact.hand.active'] = {
      experience: 'some',
      note: '第一行\n第二行',
      preference: 'neutral',
      state: 'answered',
    };

    expect(() => parseSecretFile(secretFile)).toThrow(SecretFileValidationError);
  });

  it('rejects unrecognized schema versions before persistence or import', () => {
    const futureSecretFile = { ...createValidSecretFile(), schemaVersion: 2 };

    expect(() => parseSecretFile(futureSecretFile)).toThrow('schemaVersion (2)');
  });
});
