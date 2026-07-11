import type { LocalizedDetailCopy, TranslatedQuestionBankLocale } from '../types';

function detail(label: string, active: string, passive: string, warning: string | null = null): LocalizedDetailCopy {
  return { label, roles: { active: { description: active }, passive: { description: passive } }, warning };
}

export const objectificationDetails: Record<TranslatedQuestionBankLocale, Record<string, LocalizedDetailCopy>> = {
  "zh-Hans": {
    'detail-objectification-1l6nra5': detail("作为椅子", "把对方当作椅子使用", "被对方当作椅子使用"),
    'detail-objectification-1nqioit': detail("作为沙发", "把对方当作沙发使用", "被对方当作沙发使用"),
    'detail-objectification-6z8u5c': detail("作为脚垫", "把对方当作脚垫使用", "被对方当作脚垫使用"),
    'detail-objectification-gmtfv3': detail("作为花瓶", "把对方当作花瓶展示", "被对方当作花瓶展示"),
    'detail-objectification-1xfrg59': detail("作为衣架", "把对方当作衣架使用", "被对方当作衣架使用"),
    'detail-objectification-11fzq08': detail("作为人偶", "把对方当作人偶摆放或展示", "被对方当作人偶摆放或展示"),
    'detail-objectification-ydg8ls': detail("作为烟灰缸", "把对方当作烟灰缸使用", "被对方当作烟灰缸使用", "注意烫伤、烟灰接触、卫生与呼吸道不适"),
    'detail-objectification-15peili': detail("作为食物盘子／碗", "把对方身体当作食物盘子或碗使用", "身体被当作食物盘子或碗使用"),
    'detail-objectification-18d3dxj': detail("作为自慰套", "把对方当作自慰套使用", "被对方当作自慰套使用"),
    'detail-objectification-gg0tot': detail("作为假阳具", "把对方当作假阳具使用", "被对方当作假阳具使用"),
    'detail-objectification-11y1b4u': detail("作为交易用资产", "把对方设定为可交易或交换的资产", "被设定为可交易或交换的资产", "注意人格界线、现实法律限制、同意范围与退出方式"),
  },
  "ja": {
    'detail-objectification-1l6nra5': detail("椅子として", "相手を椅子として使う", "相手に椅子として使われる"),
    'detail-objectification-1nqioit': detail("ソファとして", "相手をソファとして使う", "相手にソファとして使われる"),
    'detail-objectification-6z8u5c': detail("足台として", "相手を足台として使う", "相手に足台として使われる"),
    'detail-objectification-gmtfv3': detail("花瓶として", "相手を花瓶のように飾る", "相手に花瓶のように飾られる"),
    'detail-objectification-1xfrg59': detail("ハンガーとして", "相手をハンガーとして使う", "相手にハンガーとして使われる"),
    'detail-objectification-11fzq08': detail("人形として", "相手を人形のように配置または展示する", "相手に人形のように配置または展示される"),
    'detail-objectification-ydg8ls': detail("灰皿として", "相手を灰皿として使う", "相手に灰皿として使われる", "やけど、灰への接触、衛生、呼吸器の不調に注意する"),
    'detail-objectification-15peili': detail("食べ物の皿／器として", "相手の身体を食べ物の皿や器として使う", "身体を食べ物の皿や器として使われる"),
    'detail-objectification-18d3dxj': detail("自慰用の器として", "相手を自慰用の器として使う", "相手に自慰用の器として使われる"),
    'detail-objectification-gg0tot': detail("ディルドとして", "相手をディルドのように使う", "相手にディルドのように使われる"),
    'detail-objectification-11y1b4u': detail("取引可能な資産として", "相手を取引または交換できる資産として設定する", "取引または交換できる資産として設定される", "人格の境界、現実の法的制限、同意の範囲、退出方法に注意する"),
  },
  "en": {
    'detail-objectification-1l6nra5': detail("As a chair", "Use the other person as a chair", "Be used by the other person as a chair"),
    'detail-objectification-1nqioit': detail("As a sofa", "Use the other person as a sofa", "Be used by the other person as a sofa"),
    'detail-objectification-6z8u5c': detail("As a footrest", "Use the other person as a footrest", "Be used by the other person as a footrest"),
    'detail-objectification-gmtfv3': detail("As a vase", "Display the other person as a vase", "Be displayed by the other person as a vase"),
    'detail-objectification-1xfrg59': detail("As a clothes rack", "Use the other person as a clothes rack", "Be used by the other person as a clothes rack"),
    'detail-objectification-11fzq08': detail("As a doll", "Pose or display the other person as a doll", "Be posed or displayed by the other person as a doll"),
    'detail-objectification-ydg8ls': detail("As an ashtray", "Use the other person as an ashtray", "Be used by the other person as an ashtray", "Watch for burns, contact with ash, hygiene, and respiratory discomfort"),
    'detail-objectification-15peili': detail("As a food plate or bowl", "Use the other person’s body as a plate or bowl for food", "Have your body used as a plate or bowl for food"),
    'detail-objectification-18d3dxj': detail("As a masturbation sleeve", "Use the other person as a masturbation sleeve", "Be used by the other person as a masturbation sleeve"),
    'detail-objectification-gg0tot': detail("As a dildo", "Use the other person as a dildo", "Be used by the other person as a dildo"),
    'detail-objectification-11y1b4u': detail("As a tradable asset", "Frame the other person as an asset that can be traded or exchanged", "Be framed as an asset that can be traded or exchanged", "Consider personal boundaries, legal limits in real life, the scope of consent, and a way to leave"),
  },
};
