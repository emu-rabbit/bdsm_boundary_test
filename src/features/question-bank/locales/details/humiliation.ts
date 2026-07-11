import type { LocalizedDetailCopy, TranslatedQuestionBankLocale } from '../types';

function detail(label: string, active: string, passive: string, warning: string | null = null): LocalizedDetailCopy {
  return { label, roles: { active: { description: active }, passive: { description: passive } }, warning };
}

export const humiliationDetails: Record<TranslatedQuestionBankLocale, Record<string, LocalizedDetailCopy>> = {
  "zh-Hans": {
    'detail-humiliation-ngy4jt': detail("扇耳光", "扇对方耳光作为羞辱或管教", "被对方扇耳光作为羞辱或管教", "注意面部、耳朵、牙齿与颈部受伤风险"),
    'detail-humiliation-pn03': detail("言语羞辱", "用言语贬低、嘲弄或羞辱对方", "被对方用言语贬低、嘲弄或羞辱"),
    'detail-humiliation-18rp5a3': detail("要求尿床", "要求对方尿床以造成羞辱感", "被要求尿床以造成羞辱感"),
    'detail-humiliation-1podlwa': detail("要求照镜子", "要求对方照镜子以造成羞辱感", "被要求照镜子以造成羞辱感"),
    'detail-humiliation-1amvb9e': detail("在身体上写羞辱字眼", "在对方身体上写下羞辱字眼", "身体被写下羞辱字眼"),
    'detail-humiliation-1vz66lf': detail("剃光头", "剃除对方头发以造成羞辱感", "被剃除头发以造成羞辱感"),
    'detail-humiliation-1w3livx': detail("变装", "要求对方将变装作为羞辱情境的一部分", "被要求将变装作为羞辱情境的一部分"),
    'detail-humiliation-1h3yf1m': detail("私人场所羞辱", "在私人场所羞辱对方", "在私人场所被对方羞辱"),
    'detail-humiliation-ri5nyc': detail("公开羞辱", "在公开或可能被他人看见的情境中羞辱对方", "在公开或可能被他人看见的情境中被羞辱", "注意隐私、同意范围、社会后果与不可逆影响"),
  },
  "ja": {
    'detail-humiliation-ngy4jt': detail("平手打ち", "辱めやしつけとして相手の頬を平手で打つ", "辱めやしつけとして相手に頬を平手で打たれる", "顔、耳、歯、首を負傷する危険に注意する"),
    'detail-humiliation-pn03': detail("言葉による辱め", "言葉で相手を貶めたり、嘲ったり、辱めたりする", "相手の言葉で貶められたり、嘲られたり、辱められたりする"),
    'detail-humiliation-18rp5a3': detail("おねしょを求める", "辱めを感じさせるため、相手にベッドで排尿するよう求める", "辱めを感じる状況で、ベッドで排尿するよう求められる"),
    'detail-humiliation-1podlwa': detail("鏡を見るよう求める", "辱めを感じさせるため、相手に鏡を見るよう求める", "辱めを感じる状況で、鏡を見るよう求められる"),
    'detail-humiliation-1amvb9e': detail("身体に辱める言葉を書く", "相手の身体に辱める言葉を書く", "身体に辱める言葉を書かれる"),
    'detail-humiliation-1vz66lf': detail("髪を剃る", "辱めを感じさせるため、相手の髪を剃る", "辱めを感じる状況で髪を剃られる"),
    'detail-humiliation-1w3livx': detail("異性装・仮装", "辱めの場面の一部として相手に特定の装いを求める", "辱めの場面の一部として特定の装いを求められる"),
    'detail-humiliation-1h3yf1m': detail("私的な場所での辱め", "私的な場所で相手を辱める", "私的な場所で相手に辱められる"),
    'detail-humiliation-ri5nyc': detail("公開の場での辱め", "公開の場や他人に見られる可能性がある状況で相手を辱める", "公開の場や他人に見られる可能性がある状況で辱められる", "プライバシー、合意の範囲、社会的影響、取り返せない影響に注意する"),
  },
  "en": {
    'detail-humiliation-ngy4jt': detail("Slapping the face", "Slap the other person’s face as humiliation or discipline", "Be slapped in the face as humiliation or discipline", "Watch for injury to the face, ears, teeth, and neck"),
    'detail-humiliation-pn03': detail("Verbal humiliation", "Demean, mock, or humiliate the other person with words", "Be demeaned, mocked, or humiliated by the other person’s words"),
    'detail-humiliation-18rp5a3': detail("Requiring bed-wetting", "Require the other person to urinate in bed to evoke humiliation", "Be required to urinate in bed to evoke humiliation"),
    'detail-humiliation-1podlwa': detail("Requiring someone to look in a mirror", "Require the other person to look in a mirror to evoke humiliation", "Be required to look in a mirror to evoke humiliation"),
    'detail-humiliation-1amvb9e': detail("Writing humiliating words on the body", "Write humiliating words on the other person’s body", "Have humiliating words written on your body"),
    'detail-humiliation-1vz66lf': detail("Shaving the head", "Shave the other person’s hair to evoke humiliation", "Have your hair shaved to evoke humiliation"),
    'detail-humiliation-1w3livx': detail("Cross-dressing or costuming", "Require the other person to dress in a particular way as part of a humiliation scene", "Be required to dress in a particular way as part of a humiliation scene"),
    'detail-humiliation-1h3yf1m': detail("Humiliation in private", "Humiliate the other person in a private place", "Be humiliated by the other person in a private place"),
    'detail-humiliation-ri5nyc': detail("Public humiliation", "Humiliate the other person in public or where others may see", "Be humiliated in public or where others may see", "Consider privacy, the scope of consent, social consequences, and irreversible effects"),
  },
};
