import type { AppLocale } from '../../../app/i18n';
import type { QuestionRole } from '../../secret-file';

export type TranslatedQuestionBankLocale = Exclude<AppLocale, 'zh-Hant'>;

export interface LocalizedCategoryCopy {
  name: string;
  roles: Record<QuestionRole, { description: string }>;
}

export interface LocalizedDetailCopy {
  label: string;
  roles: Record<QuestionRole, { description: string }>;
  warning: string | null;
}

export interface QuestionBankLocaleCopy {
  categories: Record<string, LocalizedCategoryCopy>;
  details: Record<string, Record<string, LocalizedDetailCopy>>;
}
