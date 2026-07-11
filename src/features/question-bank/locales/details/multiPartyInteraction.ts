import type { LocalizedDetailCopy, TranslatedQuestionBankLocale } from '../types';

function detail(label: string, active: string, passive: string, warning: string | null = null): LocalizedDetailCopy {
  return { label, roles: { active: { description: active }, passive: { description: passive } }, warning };
}

export const multiPartyInteractionDetails: Record<TranslatedQuestionBankLocale, Record<string, LocalizedDetailCopy>> = {
  "zh-Hans": {
    'detail-multi_party_interaction-jy04v5': detail("一主多奴／宠", "在一主多奴／宠关系中担任主导侧", "在一主多奴／宠关系中担任奴方或宠物方"),
    'detail-multi_party_interaction-1retpvp': detail("多主一奴／宠", "在多主一奴／宠关系中担任主导侧之一", "在多主一奴／宠关系中担任奴方或宠物方"),
    'detail-multi_party_interaction-14o4ip9': detail("交换伴侣", "与他人交换伴侣进行互动或性互动", "在伴侣交换情境中与他人互动或性互动"),
    'detail-multi_party_interaction-rrbnk5': detail("绿帽游戏", "安排或引导对方经历绿帽情境", "在绿帽情境中被安排、观看或参与"),
    'detail-multi_party_interaction-2wnhye': detail("群交", "参与或安排多人性互动", "参与多人性互动", "注意所有参与者的同意、性病风险、避孕与界线管理"),
    'detail-multi_party_interaction-1rwzxqq': detail("知情同意下的轮奸情境", "安排多人在知情同意下对对方进行轮奸情境", "在知情同意下接受多人轮奸情境", "注意明确同意、停止方式、身体安全与创伤触发"),
    'detail-multi_party_interaction-1p23a5n': detail("短期分享／交给第三人", "短期将对方分享或交给第三人互动", "短期被分享或交给第三人互动"),
    'detail-multi_party_interaction-18qgi5': detail("长期分享／交给第三人", "长期将对方分享或交给第三人互动", "长期被分享或交给第三人互动", "注意关系权责、生活影响、同意更新与退出方式"),
    'detail-multi_party_interaction-8rm4og': detail("特定情况下分享／交给第三人", "在特定情况下将对方分享或交给第三人互动", "在特定情况下被分享或交给第三人互动"),
    'detail-multi_party_interaction-rxs1rf': detail("多人约会", "安排或参与多人约会情境", "参与多人约会情境"),
    'detail-multi_party_interaction-1ovw0ci': detail("多人调教", "安排或参与多人调教情境", "参与多人调教情境"),
  },
  "ja": {
    'detail-multi_party_interaction-jy04v5': detail("一人の主と複数の奴隷／ペット", "一人の主と複数の奴隷／ペットの関係でリード側を担う", "一人の主と複数の奴隷／ペットの関係で奴隷またはペット役を担う"),
    'detail-multi_party_interaction-1retpvp': detail("複数の主と一人の奴隷／ペット", "複数の主と一人の奴隷／ペットの関係でリード側の一人を担う", "複数の主と一人の奴隷／ペットの関係で奴隷またはペット役を担う"),
    'detail-multi_party_interaction-14o4ip9': detail("スワッピング", "パートナーを交換し、他の人と交流または性的な関わりを持つ", "パートナー交換の状況で他の人と交流または性的な関わりを持つ"),
    'detail-multi_party_interaction-rrbnk5': detail("カッコルド・プレイ", "相手がカッコルドの状況を経験するよう手配または導く", "カッコルドの状況で手配されたり、見たり、参加したりする"),
    'detail-multi_party_interaction-2wnhye': detail("グループセックス", "複数人での性的な関わりに参加したり手配したりする", "複数人での性的な関わりに参加する", "参加者全員の同意、性感染症、避妊、境界の管理に注意する"),
    'detail-multi_party_interaction-1rwzxqq': detail("合意に基づく集団レイプ・シナリオ", "明確な合意のもと、複数人が相手に関わるレイプ・シナリオを手配する", "明確な合意のもと、複数人によるレイプ・シナリオを受ける", "明確な同意、停止方法、身体の安全、トラウマの誘発に注意する"),
    'detail-multi_party_interaction-1p23a5n': detail("短期的に第三者へ委ねる", "短期間、相手を第三者との関わりに委ねる", "短期間、第三者との関わりに委ねられる"),
    'detail-multi_party_interaction-18qgi5': detail("長期的に第三者へ委ねる", "長期間、相手を第三者との関わりに委ねる", "長期間、第三者との関わりに委ねられる", "関係上の責任、生活への影響、同意の更新、退出方法に注意する"),
    'detail-multi_party_interaction-8rm4og': detail("特定の状況で第三者へ委ねる", "特定の状況で相手を第三者との関わりに委ねる", "特定の状況で第三者との関わりに委ねられる"),
    'detail-multi_party_interaction-rxs1rf': detail("複数人でのデート", "複数人でのデートを手配または参加する", "複数人でのデートに参加する"),
    'detail-multi_party_interaction-1ovw0ci': detail("複数人でのプレイ", "複数人での調教場面を手配または参加する", "複数人での調教場面に参加する"),
  },
  "en": {
    'detail-multi_party_interaction-jy04v5': detail("One dominant with multiple slaves or pets", "Take the leading role in a relationship with one dominant and multiple slaves or pets", "Take a slave or pet role in a relationship with one dominant and multiple slaves or pets"),
    'detail-multi_party_interaction-1retpvp': detail("Multiple dominants with one slave or pet", "Take one of the leading roles in a relationship with multiple dominants and one slave or pet", "Take the slave or pet role in a relationship with multiple dominants and one slave or pet"),
    'detail-multi_party_interaction-14o4ip9': detail("Partner swapping", "Swap partners and interact or have sexual contact with someone else", "Interact or have sexual contact with someone else in a partner-swapping situation"),
    'detail-multi_party_interaction-rrbnk5': detail("Cuckold play", "Arrange or guide the other person through a cuckold scenario", "Be placed in, watch, or participate in a cuckold scenario"),
    'detail-multi_party_interaction-2wnhye': detail("Group sex", "Participate in or arrange sexual interaction involving multiple people", "Participate in sexual interaction involving multiple people", "Consider every participant’s consent, STI risk, contraception, and boundary management"),
    'detail-multi_party_interaction-1rwzxqq': detail("Consensual gang-rape scenario", "Arrange a gang-rape scenario involving multiple people with the other person’s informed consent", "Receive a gang-rape scenario involving multiple people with informed consent", "Ensure explicit consent, a way to stop, physical safety, and awareness of trauma triggers"),
    'detail-multi_party_interaction-1p23a5n': detail("Short-term sharing or handover to a third person", "Temporarily entrust the other person to interact with a third person", "Be temporarily entrusted to interact with a third person"),
    'detail-multi_party_interaction-18qgi5': detail("Long-term sharing or handover to a third person", "Entrust the other person to interact with a third person over a longer period", "Be entrusted to interact with a third person over a longer period", "Consider relationship responsibilities, effects on daily life, renewed consent, and a way to leave"),
    'detail-multi_party_interaction-8rm4og': detail("Sharing or handover to a third person in specific situations", "Entrust the other person to interact with a third person in specific situations", "Be entrusted to interact with a third person in specific situations"),
    'detail-multi_party_interaction-rxs1rf': detail("Group dating", "Arrange or participate in a group-dating situation", "Participate in a group-dating situation"),
    'detail-multi_party_interaction-1ovw0ci': detail("Multi-person play", "Arrange or participate in a multi-person training or play scene", "Participate in a multi-person training or play scene"),
  },
};
