import { analInteractionDetails } from './analInteraction';
import { behaviorRestrictionDetails } from './behaviorRestriction';
import { bondageDetails } from './bondage';
import { disciplineDetails } from './discipline';
import { enslavementDetails } from './enslavement';
import { excretionDetails } from './excretion';
import { exposureDetails } from './exposure';
import { humiliationDetails } from './humiliation';
import { imageRecordingDetails } from './imageRecording';
import { impactSpankingDetails } from './impactSpanking';
import { multiPartyInteractionDetails } from './multiPartyInteraction';
import { objectificationDetails } from './objectification';
import { otherDetails } from './other';
import { painStimulationDetails } from './painStimulation';
import { petPlayDetails } from './petPlay';
import { piercingCuttingDetails } from './piercingCutting';
import { rolePlayDetails } from './rolePlay';
import { serviceDetails } from './service';
import { sexualInteractionDetails } from './sexualInteraction';
import { ticklingDetails } from './tickling';
import { whippingDetails } from './whipping';
import type { QuestionBankLocaleCopy, TranslatedQuestionBankLocale } from '../types';

const detailsByCategory: Record<
  string,
  Record<TranslatedQuestionBankLocale, QuestionBankLocaleCopy['details'][string]>
> = {
  anal_interaction: analInteractionDetails,
  behavior_restriction: behaviorRestrictionDetails,
  bondage: bondageDetails,
  discipline: disciplineDetails,
  enslavement: enslavementDetails,
  excretion: excretionDetails,
  exposure: exposureDetails,
  humiliation: humiliationDetails,
  image_recording: imageRecordingDetails,
  impact_spanking: impactSpankingDetails,
  multi_party_interaction: multiPartyInteractionDetails,
  objectification: objectificationDetails,
  other: otherDetails,
  pain_stimulation: painStimulationDetails,
  pet_play: petPlayDetails,
  piercing_cutting: piercingCuttingDetails,
  role_play: rolePlayDetails,
  service: serviceDetails,
  sexual_interaction: sexualInteractionDetails,
  tickling: ticklingDetails,
  whipping: whippingDetails,
};

export function getLocalizedDetails(locale: TranslatedQuestionBankLocale): QuestionBankLocaleCopy['details'] {
  return Object.fromEntries(
    Object.entries(detailsByCategory).map(([categoryId, translations]) => [categoryId, translations[locale]]),
  );
}
