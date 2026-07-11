import type { LocalizedDetailCopy, TranslatedQuestionBankLocale } from '../types';

function detail(label: string, active: string, passive: string, warning: string | null = null): LocalizedDetailCopy {
  return { label, roles: { active: { description: active }, passive: { description: passive } }, warning };
}

export const behaviorRestrictionDetails: Record<TranslatedQuestionBankLocale, Record<string, LocalizedDetailCopy>> = {
  "zh-Hans": {
    'detail-behavior_restriction-1q2915m': detail("限制自慰", "限制对方自慰", "被对方限制自慰"),
    'detail-behavior_restriction-10wmuve': detail("限制性爱", "限制对方进行性爱", "被对方限制进行性爱"),
    'detail-behavior_restriction-1v32uv6': detail("限制高潮", "限制对方高潮", "被对方限制高潮"),
    'detail-behavior_restriction-1qutp1i': detail("限制排泄", "限制对方排泄", "被对方限制排泄", "注意泌尿与肠胃风险、身体不适及医疗风险"),
    'detail-behavior_restriction-7yynqx': detail("限制睡眠", "限制对方睡眠", "被对方限制睡眠", "注意身心健康、判断力下降与现实生活影响"),
    'detail-behavior_restriction-p66lsr': detail("限制进食", "限制对方进食", "被对方限制进食", "注意营养不足、低血糖、饮食失调与健康风险"),
    'detail-behavior_restriction-p4j1x': detail("限制交友", "限制对方交友或社交", "被对方限制交友或社交", "注意孤立风险、现实人际影响与权力滥用"),
    'detail-behavior_restriction-1jxhizx': detail("限制说话", "限制对方说话", "被对方限制说话", "注意沟通需求、心理压力与求助方式"),
    'detail-behavior_restriction-1st1nqk': detail("限制洗澡", "限制对方洗澡或清洁", "被对方限制洗澡或清洁", "注意卫生、皮肤不适、气味与现实生活影响"),
  },
  "ja": {
    'detail-behavior_restriction-1q2915m': detail("自慰を制限する", "相手の自慰を制限する", "相手に自慰を制限される"),
    'detail-behavior_restriction-10wmuve': detail("性行為を制限する", "相手の性行為を制限する", "相手に性行為を制限される"),
    'detail-behavior_restriction-1v32uv6': detail("オーガズムを制限する", "相手のオーガズムを制限する", "相手にオーガズムを制限される"),
    'detail-behavior_restriction-1qutp1i': detail("排泄を制限する", "相手の排泄を制限する", "相手に排泄を制限される", "泌尿器・消化器への危険、体調不良、医療上のリスクに注意する"),
    'detail-behavior_restriction-7yynqx': detail("睡眠を制限する", "相手の睡眠を制限する", "相手に睡眠を制限される", "心身の健康、判断力の低下、現実生活への影響に注意する"),
    'detail-behavior_restriction-p66lsr': detail("食事を制限する", "相手の食事を制限する", "相手に食事を制限される", "栄養不足、低血糖、摂食障害、健康上のリスクに注意する"),
    'detail-behavior_restriction-p4j1x': detail("交友関係を制限する", "相手の交友や社会的交流を制限する", "相手に交友や社会的交流を制限される", "孤立、現実の人間関係への影響、権力の濫用に注意する"),
    'detail-behavior_restriction-1jxhizx': detail("発言を制限する", "相手が話すことを制限する", "相手に話すことを制限される", "コミュニケーションの必要、心理的負担、助けを求める方法に注意する"),
    'detail-behavior_restriction-1st1nqk': detail("入浴を制限する", "相手の入浴や清潔を保つ行為を制限する", "相手に入浴や清潔を保つ行為を制限される", "衛生、皮膚の不調、におい、現実生活への影響に注意する"),
  },
  "en": {
    'detail-behavior_restriction-1q2915m': detail("Restricting masturbation", "Restrict the other person from masturbating", "Have the other person restrict you from masturbating"),
    'detail-behavior_restriction-10wmuve': detail("Restricting sex", "Restrict the other person from having sex", "Have the other person restrict you from having sex"),
    'detail-behavior_restriction-1v32uv6': detail("Restricting orgasm", "Restrict the other person from having an orgasm", "Have the other person restrict you from having an orgasm"),
    'detail-behavior_restriction-1qutp1i': detail("Restricting urination or bowel movements", "Restrict the other person from urinating or having a bowel movement", "Have the other person restrict you from urinating or having a bowel movement", "Watch for urinary and gastrointestinal harm, physical distress, and medical risks"),
    'detail-behavior_restriction-7yynqx': detail("Restricting sleep", "Restrict the other person’s sleep", "Have the other person restrict your sleep", "Watch mental and physical health, impaired judgment, and effects on daily life"),
    'detail-behavior_restriction-p66lsr': detail("Restricting food", "Restrict the other person from eating", "Have the other person restrict you from eating", "Watch for malnutrition, low blood sugar, disordered eating, and health risks"),
    'detail-behavior_restriction-p4j1x': detail("Restricting friendships", "Restrict the other person’s friendships or social contact", "Have the other person restrict your friendships or social contact", "Watch for isolation, effects on real-life relationships, and abuse of power"),
    'detail-behavior_restriction-1jxhizx': detail("Restricting speech", "Restrict the other person from speaking", "Have the other person restrict you from speaking", "Consider communication needs, psychological strain, and a way to seek help"),
    'detail-behavior_restriction-1st1nqk': detail("Restricting bathing", "Restrict the other person from bathing or cleaning themselves", "Have the other person restrict you from bathing or cleaning yourself", "Watch hygiene, skin discomfort, odor, and effects on daily life"),
  },
};
