import type {
  ExperienceAnswer,
  PreferenceAnswer,
  QuestionDefinition,
  SecretFile,
} from './types';

export interface AnswerQuestionInput {
  experience: ExperienceAnswer;
  note: string;
  preference: PreferenceAnswer;
}

export function answerSecretFileQuestion(
  secretFile: SecretFile,
  question: QuestionDefinition,
  answer: AnswerQuestionInput,
  updatedAt = new Date().toISOString(),
): SecretFile {
  const currentAnswer = secretFile.answers[question.id];

  if (!currentAnswer) {
    throw new Error(`Question ${question.id} is not part of this secret file.`);
  }

  if (currentAnswer.state === 'filteredOut') {
    throw new Error(`Question ${question.id} is outside this secret file's scope.`);
  }

  if (
    question.level === 'detail' &&
    (answer.experience === 'seeDetails' || answer.preference === 'seeDetails')
  ) {
    throw new Error('Only category questions may use the seeDetails answer.');
  }

  return {
    ...secretFile,
    answers: {
      ...secretFile.answers,
      [question.id]: {
        ...answer,
        state: 'answered',
      },
    },
    updatedAt,
  };
}
