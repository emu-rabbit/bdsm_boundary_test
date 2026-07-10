import type { LocaleMessages, StoryChoiceMessage } from '../../app/i18n';
import type { RabbitPose } from './rabbitAssets';
import type { SceneTone, StepId } from './storyTypes';

export type { SceneTone, StepId, StepKind } from './storyTypes';

export type Choice = StoryChoiceMessage;

type StoryStepBase = {
  id: StepId;
  next?: StepId;
  pose: RabbitPose;
  showSpeaker?: boolean;
  tone: SceneTone;
};

export type StoryStep =
  | (StoryStepBase & {
      id: 'language';
      kind: 'language';
      lines: string[];
      next: StepId;
    })
  | (StoryStepBase & {
      id: 'self-question' | 'other-question';
      kind: 'choice';
      choices: Choice[];
      lines: string[];
    })
  | (StoryStepBase & {
      id:
        | 'self-yes'
        | 'self-no'
        | 'self-unsure'
        | 'other-yes'
        | 'other-no'
        | 'other-who';
      kind: 'message';
      action: string;
      message: string;
      next: StepId;
    })
  | (StoryStepBase & {
      id: 'name';
      kind: 'name';
      action: string;
      lines: string[];
      next: StepId;
    })
  | (StoryStepBase & {
      id: 'file';
      kind: 'file';
      action: string;
      body: string[];
      showSpeaker: false;
    });

export function getStorySteps(messages: LocaleMessages): StoryStep[] {
  const stepMessages = messages.story.steps;

  return [
    {
      id: 'language',
      kind: 'language',
      lines: [messages.story.languageQuestion],
      next: 'self-question',
      pose: 'questioning',
      tone: 'welcome',
    },
    {
      id: 'self-question',
      kind: 'choice',
      pose: 'storyGreeting',
      tone: 'welcome',
      ...stepMessages['self-question'],
    },
    {
      id: 'self-yes',
      kind: 'message',
      next: 'other-question',
      pose: 'storyGreeting',
      tone: 'welcome',
      ...stepMessages['self-yes'],
    },
    {
      id: 'self-no',
      kind: 'message',
      next: 'other-question',
      pose: 'storyGreeting',
      tone: 'welcome',
      ...stepMessages['self-no'],
    },
    {
      id: 'self-unsure',
      kind: 'message',
      next: 'other-question',
      pose: 'thinking',
      tone: 'mirror',
      ...stepMessages['self-unsure'],
    },
    {
      id: 'other-question',
      kind: 'choice',
      pose: 'thinking',
      tone: 'mirror',
      ...stepMessages['other-question'],
    },
    {
      id: 'other-yes',
      kind: 'message',
      next: 'name',
      pose: 'thinking',
      tone: 'mirror',
      ...stepMessages['other-yes'],
    },
    {
      id: 'other-no',
      kind: 'message',
      next: 'name',
      pose: 'thinking',
      tone: 'mirror',
      ...stepMessages['other-no'],
    },
    {
      id: 'other-who',
      kind: 'message',
      next: 'other-question',
      pose: 'thinking',
      tone: 'mirror',
      ...stepMessages['other-who'],
    },
    {
      id: 'name',
      kind: 'name',
      next: 'file',
      pose: 'naming',
      tone: 'naming',
      ...stepMessages.name,
    },
    {
      id: 'file',
      kind: 'file',
      showSpeaker: false,
      pose: 'folder',
      tone: 'archive',
      ...stepMessages.file,
    },
  ];
}

export function getStoryStepIndex(storySteps: StoryStep[]): Map<StepId, number> {
  return new Map(storySteps.map((step, index) => [step.id, index]));
}
