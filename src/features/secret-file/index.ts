export { answerSecretFileQuestion, type AnswerQuestionInput } from './domain/answers';
export {
  createSecretFile,
  isRoleIncludedInScope,
  reconcileSecretFileQuestions,
  secretFileSchemaVersion,
  type CreateSecretFileInput,
} from './domain/secretFile';
export { getSecretFileProgress, type SecretFileProgress } from './domain/progress';
export type {
  ExperienceAnswer,
  PreferenceAnswer,
  QuestionDefinition,
  QuestionLevel,
  QuestionRole,
  SecretFile,
  SecretFileAnswer,
  SecretFileScope,
} from './domain/types';
export {
  parseSecretFile,
  SecretFileValidationError,
  UnsupportedSecretFileSchemaError,
} from './validation/secretFileSchema';
