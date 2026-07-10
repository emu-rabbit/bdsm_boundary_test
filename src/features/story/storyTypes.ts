export type StepId =
  | 'language'
  | 'self-question'
  | 'self-yes'
  | 'self-no'
  | 'self-unsure'
  | 'other-question'
  | 'other-yes'
  | 'other-no'
  | 'other-who'
  | 'name'
  | 'file';

export type StepKind = 'language' | 'choice' | 'message' | 'name' | 'file';
export type SceneTone = 'welcome' | 'mirror' | 'naming' | 'archive';
