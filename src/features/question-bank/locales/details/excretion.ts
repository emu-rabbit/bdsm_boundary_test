import type { LocalizedDetailCopy, TranslatedQuestionBankLocale } from '../types';

function detail(label: string, active: string, passive: string, warning: string | null = null): LocalizedDetailCopy {
  return { label, roles: { active: { description: active }, passive: { description: passive } }, warning };
}

export const excretionDetails: Record<TranslatedQuestionBankLocale, Record<string, LocalizedDetailCopy>> = {
  "zh-Hans": {
    'detail-excretion-10mgbv7': detail("在身体上淋尿", "在对方身体上淋尿", "被对方在身体上淋尿"),
    'detail-excretion-18pmjci': detail("在头部以上淋尿", "在对方头部以上淋尿", "被对方在头部以上淋尿", "注意眼睛、口鼻、耳道、卫生与心理压力"),
    'detail-excretion-d0tfsd': detail("饮尿", "要求对方饮尿", "饮用对方的尿液", "注意感染风险、身体不适、卫生与心理界线"),
    'detail-excretion-bz8baf': detail("接触排泄物", "要求对方接触排泄物", "接触对方或自己的排泄物", "注意感染风险、皮肤接触、清洁与心理压力"),
    'detail-excretion-1d9pfly': detail("食用排泄物", "要求对方食用排泄物", "食用对方或自己的排泄物", "注意严重感染、肠胃不适、卫生与医疗风险"),
    'detail-excretion-1x972yx': detail("用排泄物自慰", "要求对方用排泄物自慰", "使用排泄物自慰", "注意黏膜感染、皮肤刺激、清洁与医疗风险"),
    'detail-excretion-4yx1it': detail("扮演尿壶", "让对方扮演尿壶", "扮演尿壶供对方使用", "注意卫生、身体位置、清理与心理界线"),
    'detail-excretion-15e9ike': detail("扮演便座", "让对方扮演便座", "扮演便座供对方使用", "注意感染风险、身体位置、清理与心理压力"),
    'detail-excretion-36n9ra': detail("排泄展示／观看", "观看对方排泄或要求对方展示排泄", "展示排泄给对方观看"),
  },
  "ja": {
    'detail-excretion-10mgbv7': detail("身体に放尿する", "相手の身体に放尿する", "相手に身体へ放尿される"),
    'detail-excretion-18pmjci': detail("頭部に放尿する", "相手の頭部に放尿する", "相手に頭部へ放尿される", "目、口、鼻、耳道、衛生、心理的負担に注意する"),
    'detail-excretion-d0tfsd': detail("尿を飲む", "相手に尿を飲むよう求める", "相手の尿を飲む", "感染、体調不良、衛生、心理的な境界に注意する"),
    'detail-excretion-bz8baf': detail("排泄物に触れる", "相手に排泄物へ触れるよう求める", "相手または自分の排泄物に触れる", "感染、皮膚への接触、清掃、心理的負担に注意する"),
    'detail-excretion-1d9pfly': detail("排泄物を口にする", "相手に排泄物を口にするよう求める", "相手または自分の排泄物を口にする", "重い感染、消化器の不調、衛生、医療上のリスクに注意する"),
    'detail-excretion-1x972yx': detail("排泄物を使って自慰する", "排泄物を使って自慰するよう相手に求める", "排泄物を使って自慰する", "粘膜の感染、皮膚刺激、清掃、医療上のリスクに注意する"),
    'detail-excretion-4yx1it': detail("尿器役を演じる", "相手に尿器役を演じてもらう", "尿器役を演じて相手に使われる", "衛生、身体の位置、清掃、心理的な境界に注意する"),
    'detail-excretion-15e9ike': detail("便座役を演じる", "相手に便座役を演じてもらう", "便座役を演じて相手に使われる", "感染、身体の位置、清掃、心理的負担に注意する"),
    'detail-excretion-36n9ra': detail("排泄を見せる／見る", "相手の排泄を見たり、見せるよう求めたりする", "排泄を相手に見せる"),
  },
  "en": {
    'detail-excretion-10mgbv7': detail("Urinating on the body", "Urinate on the other person’s body", "Have the other person urinate on your body"),
    'detail-excretion-18pmjci': detail("Urinating on the head", "Urinate on the other person’s head", "Have the other person urinate on your head", "Watch the eyes, mouth, nose, ear canals, hygiene, and psychological strain"),
    'detail-excretion-d0tfsd': detail("Drinking urine", "Require the other person to drink urine", "Drink the other person’s urine", "Watch for infection risk, physical distress, hygiene, and psychological boundaries"),
    'detail-excretion-bz8baf': detail("Touching bodily waste", "Require the other person to touch bodily waste", "Touch the other person’s or your own bodily waste", "Watch for infection risk, skin contact, cleaning, and psychological strain"),
    'detail-excretion-1d9pfly': detail("Consuming bodily waste", "Require the other person to consume bodily waste", "Consume the other person’s or your own bodily waste", "Watch for serious infection, gastrointestinal illness, hygiene, and medical risk"),
    'detail-excretion-1x972yx': detail("Masturbating with bodily waste", "Require the other person to masturbate using bodily waste", "Masturbate using bodily waste", "Watch for mucous-membrane infection, skin irritation, cleaning, and medical risk"),
    'detail-excretion-4yx1it': detail("Acting as a urinal", "Have the other person act as a urinal", "Act as a urinal for the other person", "Consider hygiene, body position, cleaning, and psychological boundaries"),
    'detail-excretion-15e9ike': detail("Acting as a toilet seat", "Have the other person act as a toilet seat", "Act as a toilet seat for the other person", "Watch for infection risk, body position, cleaning, and psychological strain"),
    'detail-excretion-36n9ra': detail("Displaying or watching elimination", "Watch the other person eliminate or require them to display it", "Display elimination for the other person to watch"),
  },
};
