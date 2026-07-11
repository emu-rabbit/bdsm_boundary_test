import type { LocalizedDetailCopy, TranslatedQuestionBankLocale } from '../types';

function detail(label: string, active: string, passive: string, warning: string | null = null): LocalizedDetailCopy {
  return { label, roles: { active: { description: active }, passive: { description: passive } }, warning };
}

export const whippingDetails: Record<TranslatedQuestionBankLocale, Record<string, LocalizedDetailCopy>> = {
  "zh-Hans": {
    'detail-whipping-9q3jnv': detail("用散鞭", "用散鞭鞭打对方", "被散鞭鞭打"),
    'detail-whipping-1w83a3j': detail("用长鞭", "用长鞭鞭打对方", "被长鞭鞭打"),
    'detail-whipping-d25qdd': detail("用音爆鞭", "用音爆鞭鞭打对方", "被音爆鞭鞭打"),
    'detail-whipping-pt4u3j': detail("用皮带", "用皮带鞭打对方", "被皮带鞭打"),
    'detail-whipping-2nwvqy': detail("泛红的程度", "将对方鞭打到皮肤泛红的程度", "被鞭打到皮肤泛红的程度"),
    'detail-whipping-sw4wfd': detail("轻微瘀青的程度", "将对方鞭打到出现轻微瘀青的程度", "被鞭打到出现轻微瘀青的程度"),
    'detail-whipping-hekt6v': detail("大范围严重瘀青的程度", "将对方鞭打到出现大范围严重瘀青的程度", "被鞭打到出现大范围严重瘀青的程度"),
    'detail-whipping-k3sn5k': detail("破皮并渗出组织液的程度", "将对方鞭打到皮肤破损并渗出组织液的程度", "被鞭打到皮肤破损并渗出组织液的程度", "注意伤口的后续照护与处理"),
    'detail-whipping-1oyyq0b': detail("破皮流血的程度", "将对方鞭打到皮肤破损并流血的程度", "被鞭打到皮肤破损并流血的程度", "注意伤口的后续照护与处理"),
    'detail-whipping-15c25xn': detail("鞭打屁股", "鞭打对方的屁股", "屁股被鞭打"),
    'detail-whipping-1f72zmt': detail("鞭打背部", "鞭打对方的背部", "背部被鞭打"),
    'detail-whipping-1lvzphd': detail("鞭打胸部", "鞭打对方的胸部", "胸部被鞭打"),
    'detail-whipping-1kkr5xo': detail("鞭打生殖器", "鞭打对方的生殖器", "生殖器被鞭打"),
    'detail-whipping-pby8ov': detail("鞭打大腿", "鞭打对方的大腿", "大腿被鞭打"),
    'detail-whipping-1bop80o': detail("鞭打腹部", "鞭打对方的腹部", "腹部被鞭打"),
  },
  "ja": {
    'detail-whipping-9q3jnv': detail("フロッガーを使う", "フロッガーで相手を打つ", "フロッガーで打たれる"),
    'detail-whipping-1w83a3j': detail("長鞭を使う", "長鞭で相手を打つ", "長鞭で打たれる"),
    'detail-whipping-d25qdd': detail("ブルウィップを使う", "ブルウィップで相手を打つ", "ブルウィップで打たれる"),
    'detail-whipping-pt4u3j': detail("ベルトを使う", "ベルトで相手を打つ", "ベルトで打たれる"),
    'detail-whipping-2nwvqy': detail("皮膚が赤くなる程度", "相手の皮膚が赤くなる程度まで鞭打つ", "皮膚が赤くなる程度まで鞭打たれる"),
    'detail-whipping-sw4wfd': detail("軽いあざができる程度", "相手に軽いあざができる程度まで鞭打つ", "軽いあざができる程度まで鞭打たれる"),
    'detail-whipping-hekt6v': detail("広範囲に強いあざができる程度", "相手に広範囲の強いあざができる程度まで鞭打つ", "広範囲に強いあざができる程度まで鞭打たれる"),
    'detail-whipping-k3sn5k': detail("皮膚が破れ、浸出液が出る程度", "相手の皮膚が破れ、浸出液が出る程度まで鞭打つ", "皮膚が破れ、浸出液が出る程度まで鞭打たれる", "その後の傷の手当てと処置に注意する"),
    'detail-whipping-1oyyq0b': detail("皮膚が破れ、出血する程度", "相手の皮膚が破れ、出血する程度まで鞭打つ", "皮膚が破れ、出血する程度まで鞭打たれる", "その後の傷の手当てと処置に注意する"),
    'detail-whipping-15c25xn': detail("お尻を鞭打つ", "相手のお尻を鞭打つ", "お尻を鞭打たれる"),
    'detail-whipping-1f72zmt': detail("背中を鞭打つ", "相手の背中を鞭打つ", "背中を鞭打たれる"),
    'detail-whipping-1lvzphd': detail("胸を鞭打つ", "相手の胸を鞭打つ", "胸を鞭打たれる"),
    'detail-whipping-1kkr5xo': detail("性器を鞭打つ", "相手の性器を鞭打つ", "性器を鞭打たれる"),
    'detail-whipping-pby8ov': detail("太ももを鞭打つ", "相手の太ももを鞭打つ", "太ももを鞭打たれる"),
    'detail-whipping-1bop80o': detail("腹部を鞭打つ", "相手の腹部を鞭打つ", "腹部を鞭打たれる"),
  },
  "en": {
    'detail-whipping-9q3jnv': detail("With a flogger", "Flog the other person", "Be flogged"),
    'detail-whipping-1w83a3j': detail("With a long whip", "Whip the other person with a long whip", "Be struck with a long whip"),
    'detail-whipping-d25qdd': detail("With a bullwhip", "Whip the other person with a bullwhip", "Be struck with a bullwhip"),
    'detail-whipping-pt4u3j': detail("With a belt", "Strike the other person with a belt", "Be struck with a belt"),
    'detail-whipping-2nwvqy': detail("Until the skin is red", "Whip the other person until their skin becomes red", "Be whipped until your skin becomes red"),
    'detail-whipping-sw4wfd': detail("Until there is light bruising", "Whip the other person until light bruising appears", "Be whipped until light bruising appears"),
    'detail-whipping-hekt6v': detail("Until there is extensive, severe bruising", "Whip the other person until extensive, severe bruising appears", "Be whipped until extensive, severe bruising appears"),
    'detail-whipping-k3sn5k': detail("Until the skin breaks and weeps", "Whip the other person until the skin breaks and releases wound fluid", "Be whipped until the skin breaks and releases wound fluid", "Pay attention to wound care and follow-up treatment"),
    'detail-whipping-1oyyq0b': detail("Until the skin breaks and bleeds", "Whip the other person until the skin breaks and bleeds", "Be whipped until the skin breaks and bleeds", "Pay attention to wound care and follow-up treatment"),
    'detail-whipping-15c25xn': detail("Whip the buttocks", "Whip the other person’s buttocks", "Have your buttocks whipped"),
    'detail-whipping-1f72zmt': detail("Whip the back", "Whip the other person’s back", "Have your back whipped"),
    'detail-whipping-1lvzphd': detail("Whip the chest", "Whip the other person’s chest", "Have your chest whipped"),
    'detail-whipping-1kkr5xo': detail("Whip the genitals", "Whip the other person’s genitals", "Have your genitals whipped"),
    'detail-whipping-pby8ov': detail("Whip the thighs", "Whip the other person’s thighs", "Have your thighs whipped"),
    'detail-whipping-1bop80o': detail("Whip the abdomen", "Whip the other person’s abdomen", "Have your abdomen whipped"),
  },
};
