import type { LocalizedDetailCopy, TranslatedQuestionBankLocale } from '../types';

function detail(label: string, active: string, passive: string, warning: string | null = null): LocalizedDetailCopy {
  return { label, roles: { active: { description: active }, passive: { description: passive } }, warning };
}

export const analInteractionDetails: Record<TranslatedQuestionBankLocale, Record<string, LocalizedDetailCopy>> = {
  "zh-Hans": {
    'detail-anal_interaction-1oupd9i': detail("直径小于三厘米的肛塞", "让对方放入直径小于三厘米的肛塞", "被放入直径小于三厘米的肛塞"),
    'detail-anal_interaction-1m59dfi': detail("直径三到五厘米的肛塞", "让对方放入直径三到五厘米的肛塞", "被放入直径三到五厘米的肛塞", "注意润滑、撕裂伤、尺寸适应与身体不适"),
    'detail-anal_interaction-b8y6xr': detail("直径大于五厘米的肛塞", "让对方放入直径大于五厘米的肛塞", "被放入直径大于五厘米的肛塞", "注意撕裂伤、出血、括约肌损伤与身体不适"),
    'detail-anal_interaction-1sgm90w': detail("肛鞭", "用肛鞭刺激对方肛门", "被对方用肛鞭刺激肛门"),
    'detail-anal_interaction-4g0x9i': detail("串珠情趣玩具", "用串珠情趣玩具刺激对方肛门", "被对方用串珠情趣玩具刺激肛门"),
    'detail-anal_interaction-ilmux2': detail("扩肛训练", "引导对方进行扩肛训练", "接受对方引导进行扩肛训练", "注意循序渐进、润滑、撕裂伤与身体不适"),
    'detail-anal_interaction-n69t3o': detail("肛门扩张器", "用肛门扩张器扩张对方肛门", "被对方用肛门扩张器扩张肛门", "注意尺寸、润滑、撕裂伤与出血"),
    'detail-anal_interaction-v6v9dp': detail("肛门窥器", "用肛门窥器撑开或观察对方肛门", "被对方用肛门窥器撑开或观察肛门"),
    'detail-anal_interaction-12ghyy9': detail("灌肠", "为对方进行灌肠", "接受对方灌肠"),
    'detail-anal_interaction-gwnjaf': detail("舔肛服务", "接受对方的舔肛服务", "为对方提供舔肛服务"),
    'detail-anal_interaction-1wf7u60': detail("一小时内佩戴肛塞", "要求对方佩戴肛塞不超过一小时", "佩戴肛塞不超过一小时"),
    'detail-anal_interaction-19jmdrg': detail("佩戴肛塞一到三小时", "要求对方佩戴肛塞一到三小时", "佩戴肛塞一到三小时", "注意长时间压迫、润滑不足与身体不适"),
    'detail-anal_interaction-ww1hfr': detail("佩戴肛塞三小时以上", "要求对方佩戴肛塞三小时以上", "佩戴肛塞三小时以上", "注意长时间压迫、黏膜刺激、取出困难与身体不适"),
    'detail-anal_interaction-npcnih': detail("睡觉时佩戴肛塞", "要求对方睡觉时佩戴肛塞", "睡觉时佩戴肛塞", "注意长时间压迫、睡眠中不适与紧急取出困难"),
    'detail-anal_interaction-1c35d5h': detail("在公共场所佩戴肛塞", "要求对方在公共场所佩戴肛塞", "在公共场所佩戴肛塞", "注意隐私、身份暴露、身体不适与取出方式"),
  },
  "ja": {
    'detail-anal_interaction-1oupd9i': detail("直径3cm未満のアナルプラグ", "相手に直径3cm未満のアナルプラグを挿入する", "直径3cm未満のアナルプラグを挿入される"),
    'detail-anal_interaction-1m59dfi': detail("直径3〜5cmのアナルプラグ", "相手に直径3〜5cmのアナルプラグを挿入する", "直径3〜5cmのアナルプラグを挿入される", "潤滑、裂傷、サイズへの適応、体調不良に注意する"),
    'detail-anal_interaction-b8y6xr': detail("直径5cmを超えるアナルプラグ", "相手に直径5cmを超えるアナルプラグを挿入する", "直径5cmを超えるアナルプラグを挿入される", "裂傷、出血、括約筋の損傷、体調不良に注意する"),
    'detail-anal_interaction-1sgm90w': detail("アナルウィップ", "アナルウィップで相手の肛門を刺激する", "相手のアナルウィップで肛門を刺激される"),
    'detail-anal_interaction-4g0x9i': detail("アナルビーズ", "アナルビーズで相手の肛門を刺激する", "相手のアナルビーズで肛門を刺激される"),
    'detail-anal_interaction-ilmux2': detail("アナル拡張トレーニング", "相手のアナル拡張トレーニングを導く", "相手に導かれてアナル拡張トレーニングを行う", "段階的に進め、潤滑、裂傷、体調不良に注意する"),
    'detail-anal_interaction-n69t3o': detail("肛門拡張器", "肛門拡張器で相手の肛門を広げる", "相手に肛門拡張器で肛門を広げられる", "サイズ、潤滑、裂傷、出血に注意する"),
    'detail-anal_interaction-v6v9dp': detail("肛門鏡", "肛門鏡で相手の肛門を広げたり観察したりする", "相手に肛門鏡で肛門を広げられたり観察されたりする"),
    'detail-anal_interaction-12ghyy9': detail("浣腸", "相手に浣腸を行う", "相手から浣腸を受ける"),
    'detail-anal_interaction-gwnjaf': detail("アニリングス", "相手からアニリングスを受ける", "相手にアニリングスを行う"),
    'detail-anal_interaction-1wf7u60': detail("1時間以内のアナルプラグ装着", "相手に1時間以内アナルプラグを装着するよう求める", "1時間以内アナルプラグを装着する"),
    'detail-anal_interaction-19jmdrg': detail("1〜3時間のアナルプラグ装着", "相手に1〜3時間アナルプラグを装着するよう求める", "1〜3時間アナルプラグを装着する", "長時間の圧迫、潤滑不足、体調不良に注意する"),
    'detail-anal_interaction-ww1hfr': detail("3時間を超えるアナルプラグ装着", "相手に3時間を超えてアナルプラグを装着するよう求める", "3時間を超えてアナルプラグを装着する", "長時間の圧迫、粘膜への刺激、取り出しにくさ、体調不良に注意する"),
    'detail-anal_interaction-npcnih': detail("睡眠中のアナルプラグ装着", "相手に睡眠中アナルプラグを装着するよう求める", "睡眠中アナルプラグを装着する", "長時間の圧迫、睡眠中の不調、緊急時の取り出しにくさに注意する"),
    'detail-anal_interaction-1c35d5h': detail("公共の場でのアナルプラグ装着", "相手に公共の場でアナルプラグを装着するよう求める", "公共の場でアナルプラグを装着する", "プライバシー、身元の露出、身体の不調、取り出す方法に注意する"),
  },
  "en": {
    'detail-anal_interaction-1oupd9i': detail("Anal plug under 3 cm in diameter", "Insert an anal plug under 3 cm in diameter into the other person", "Have an anal plug under 3 cm in diameter inserted"),
    'detail-anal_interaction-1m59dfi': detail("Anal plug 3–5 cm in diameter", "Insert an anal plug 3–5 cm in diameter into the other person", "Have an anal plug 3–5 cm in diameter inserted", "Watch lubrication, tearing, adaptation to size, and physical discomfort"),
    'detail-anal_interaction-b8y6xr': detail("Anal plug over 5 cm in diameter", "Insert an anal plug over 5 cm in diameter into the other person", "Have an anal plug over 5 cm in diameter inserted", "Watch for tearing, bleeding, sphincter injury, and physical discomfort"),
    'detail-anal_interaction-1sgm90w': detail("Anal whip", "Stimulate the other person’s anus with an anal whip", "Have your anus stimulated with an anal whip"),
    'detail-anal_interaction-4g0x9i': detail("Anal beads", "Stimulate the other person’s anus with anal beads", "Have your anus stimulated with anal beads"),
    'detail-anal_interaction-ilmux2': detail("Anal stretching practice", "Guide the other person through anal stretching practice", "Be guided through anal stretching practice by the other person", "Proceed gradually and watch lubrication, tearing, and physical discomfort"),
    'detail-anal_interaction-n69t3o': detail("Anal dilator", "Use an anal dilator to stretch the other person’s anus", "Have your anus stretched with an anal dilator", "Watch the size, lubrication, tearing, and bleeding"),
    'detail-anal_interaction-v6v9dp': detail("Anal speculum", "Use an anal speculum to open or observe the other person’s anus", "Have your anus opened or observed with an anal speculum"),
    'detail-anal_interaction-12ghyy9': detail("Enema", "Give the other person an enema", "Receive an enema from the other person"),
    'detail-anal_interaction-gwnjaf': detail("Anilingus", "Receive anilingus from the other person", "Provide anilingus to the other person"),
    'detail-anal_interaction-1wf7u60': detail("Wearing an anal plug for up to one hour", "Require the other person to wear an anal plug for up to one hour", "Wear an anal plug for up to one hour"),
    'detail-anal_interaction-19jmdrg': detail("Wearing an anal plug for one to three hours", "Require the other person to wear an anal plug for one to three hours", "Wear an anal plug for one to three hours", "Watch for prolonged pressure, insufficient lubrication, and physical discomfort"),
    'detail-anal_interaction-ww1hfr': detail("Wearing an anal plug for more than three hours", "Require the other person to wear an anal plug for more than three hours", "Wear an anal plug for more than three hours", "Watch for prolonged pressure, mucous-membrane irritation, difficulty removing it, and physical discomfort"),
    'detail-anal_interaction-npcnih': detail("Wearing an anal plug while sleeping", "Require the other person to wear an anal plug while sleeping", "Wear an anal plug while sleeping", "Watch for prolonged pressure, discomfort during sleep, and difficulty with emergency removal"),
    'detail-anal_interaction-1c35d5h': detail("Wearing an anal plug in public", "Require the other person to wear an anal plug in public", "Wear an anal plug in public", "Consider privacy, exposure of identity, physical discomfort, and a way to remove it"),
  },
};
