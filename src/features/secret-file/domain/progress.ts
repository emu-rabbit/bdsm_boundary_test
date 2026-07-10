import { isRoleIncludedInScope } from './secretFile';
import type { QuestionDefinition, SecretFile } from './types';

export interface SecretFileProgress {
  answered: number;
  percent: number;
  total: number;
  unanswered: number;
}

export function getSecretFileProgress(
  secretFile: SecretFile,
  currentQuestions: readonly QuestionDefinition[],
): SecretFileProgress {
  let answered = 0;
  let total = 0;

  for (const question of currentQuestions) {
    if (!isRoleIncludedInScope(question.role, secretFile.scope)) {
      continue;
    }

    total += 1;

    if (secretFile.answers[question.id]?.state === 'answered') {
      answered += 1;
    }
  }

  return {
    answered,
    percent: total === 0 ? 0 : Math.round((answered / total) * 100),
    total,
    unanswered: total - answered,
  };
}
