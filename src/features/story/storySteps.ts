import type { LocaleMessages, StoryChoiceMessage } from '../../app/i18n';
import type { RabbitPose } from './rabbitAssets';

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

export interface Choice {
  label: string;
  next: StepId;
}

export interface StoryStep {
  id: StepId;
  kind: StepKind;
  showSpeaker?: boolean;
  lines?: string[];
  message?: string;
  body?: string[];
  choices?: Choice[];
  action?: string;
  next?: StepId;
  pose: RabbitPose;
  tone: SceneTone;
}

type StoryStepBase = {
  id: StepId;
  kind: StepKind;
  next?: StepId;
  pose: RabbitPose;
  showSpeaker?: boolean;
  tone: SceneTone;
};

const storyStepBases: StoryStepBase[] = [
  {
    id: 'language',
    kind: 'language',
    next: 'self-question',
    pose: 'greeting',
    tone: 'welcome',
  },
  {
    id: 'self-question',
    kind: 'choice',
    pose: 'greeting',
    tone: 'welcome',
  },
  {
    id: 'self-yes',
    kind: 'message',
    next: 'other-question',
    pose: 'greeting',
    tone: 'welcome',
  },
  {
    id: 'self-no',
    kind: 'message',
    next: 'other-question',
    pose: 'greeting',
    tone: 'welcome',
  },
  {
    id: 'self-unsure',
    kind: 'message',
    next: 'other-question',
    pose: 'thinking',
    tone: 'mirror',
  },
  {
    id: 'other-question',
    kind: 'choice',
    pose: 'thinking',
    tone: 'mirror',
  },
  {
    id: 'other-yes',
    kind: 'message',
    next: 'name',
    pose: 'thinking',
    tone: 'mirror',
  },
  {
    id: 'other-no',
    kind: 'message',
    next: 'name',
    pose: 'thinking',
    tone: 'mirror',
  },
  {
    id: 'other-who',
    kind: 'message',
    next: 'other-question',
    pose: 'thinking',
    tone: 'mirror',
  },
  {
    id: 'name',
    kind: 'name',
    next: 'file',
    pose: 'naming',
    tone: 'naming',
  },
  {
    id: 'file',
    kind: 'file',
    showSpeaker: false,
    pose: 'folder',
    tone: 'archive',
  },
];

function toStepChoice(choice: StoryChoiceMessage): Choice {
  return {
    label: choice.label,
    next: choice.next as StepId,
  };
}

export function getStorySteps(messages: LocaleMessages): StoryStep[] {
  return storyStepBases.map((base) => {
    if (base.id === 'language') {
      return {
        ...base,
        lines: [messages.story.languageQuestion],
      };
    }

    const stepMessages = messages.story.steps[base.id];

    return {
      ...base,
      action: stepMessages?.action,
      body: stepMessages?.body,
      choices: stepMessages?.choices?.map(toStepChoice),
      lines: stepMessages?.lines,
      message: stepMessages?.message,
    };
  });
}

export function getStoryStepIndex(storySteps: StoryStep[]): Map<StepId, number> {
  return new Map(storySteps.map((step, index) => [step.id, index]));
}
