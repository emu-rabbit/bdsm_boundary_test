import type { LocalizedDetailCopy, TranslatedQuestionBankLocale } from '../types';

function detail(label: string, active: string, passive: string, warning: string | null = null): LocalizedDetailCopy {
  return { label, roles: { active: { description: active }, passive: { description: passive } }, warning };
}

export const piercingCuttingDetails: Record<TranslatedQuestionBankLocale, Record<string, LocalizedDetailCopy>> = {
  "zh-Hans": {
    'detail-piercing_cutting-1rw9xzg': detail("装饰性身体穿刺", "为对方进行装饰性身体穿刺", "接受装饰性身体穿刺", "注意消毒、感染、过敏、疤痕与专业操作"),
    'detail-piercing_cutting-2ewqgb': detail("刺激性身体穿刺", "为对方进行刺激性身体穿刺", "接受刺激性身体穿刺", "注意消毒、感染、出血、疼痛与身体不适"),
    'detail-piercing_cutting-ypns2e': detail("穿刺后承重", "让对方在穿刺处承受重量或拉力", "在穿刺处承受重量或拉力", "注意撕裂伤、出血、感染与过度拉扯"),
    'detail-piercing_cutting-1jvq8gi': detail("临时穿孔／环", "为对方进行临时穿孔或穿环", "接受临时穿孔或穿环", "注意消毒、感染、出血与伤口照护"),
    'detail-piercing_cutting-rdg71s': detail("永久穿孔／环", "为对方进行永久穿孔或穿环", "接受永久穿孔或穿环", "注意永久身体改变、疤痕、感染与后续照护"),
    'detail-piercing_cutting-5uq5u0': detail("乳环", "为对方进行乳环穿刺或佩戴", "接受乳环穿刺或佩戴", "注意感染、撕裂、血液循环与乳头敏感"),
    'detail-piercing_cutting-rxxg5l': detail("肚脐环", "为对方进行肚脐环穿刺或佩戴", "接受肚脐环穿刺或佩戴", "注意感染、过敏、衣物摩擦与伤口照护"),
    'detail-piercing_cutting-az913p': detail("生殖器穿环", "为对方进行生殖器穿环", "接受生殖器穿环", "注意感染、出血、性功能影响与专业操作"),
    'detail-piercing_cutting-1rewigf': detail("舌环", "为对方进行舌环穿刺或佩戴", "接受舌环穿刺或佩戴", "注意肿胀、感染、牙齿损伤与吞咽不适"),
    'detail-piercing_cutting-1fkp3oe': detail("不流血程度的割／切", "对对方进行不流血程度的割或切", "接受不流血程度的割或切", "注意皮肤损伤、消毒、疼痛与疤痕"),
    'detail-piercing_cutting-126gchb': detail("流血程度的割／切", "对对方进行流血程度的割或切", "接受流血程度的割或切", "注意出血、感染、疤痕、伤口照护与医疗风险"),
  },
  "ja": {
    'detail-piercing_cutting-1rw9xzg': detail("装飾目的のボディピアス", "相手に装飾目的のボディピアスを施す", "装飾目的のボディピアスを受ける", "消毒、感染、アレルギー、傷痕、専門家による施術に注意する"),
    'detail-piercing_cutting-2ewqgb': detail("刺激目的の身体穿刺", "相手に刺激目的の身体穿刺を行う", "刺激目的の身体穿刺を受ける", "消毒、感染、出血、痛み、体調不良に注意する"),
    'detail-piercing_cutting-ypns2e': detail("穿刺部に重さをかける", "相手の穿刺部に重さや引っ張る力をかける", "穿刺部に重さや引っ張る力をかけられる", "裂傷、出血、感染、過度な牽引に注意する"),
    'detail-piercing_cutting-1jvq8gi': detail("一時的なピアッシング／リング", "相手に一時的な穿孔やリング装着を行う", "一時的な穿孔やリング装着を受ける", "消毒、感染、出血、傷の手当に注意する"),
    'detail-piercing_cutting-rdg71s': detail("恒久的なピアッシング／リング", "相手に恒久的な穿孔やリング装着を行う", "恒久的な穿孔やリング装着を受ける", "恒久的な身体変化、傷痕、感染、その後のケアに注意する"),
    'detail-piercing_cutting-5uq5u0': detail("ニップルピアス", "相手にニップルピアスの穿刺や装着を行う", "ニップルピアスの穿刺や装着を受ける", "感染、裂傷、血行、乳首の敏感さに注意する"),
    'detail-piercing_cutting-rxxg5l': detail("へそピアス", "相手にへそピアスの穿刺や装着を行う", "へそピアスの穿刺や装着を受ける", "感染、アレルギー、衣類との摩擦、傷の手当に注意する"),
    'detail-piercing_cutting-az913p': detail("性器ピアス", "相手に性器ピアスを施す", "性器ピアスを受ける", "感染、出血、性機能への影響、専門家による施術に注意する"),
    'detail-piercing_cutting-1rewigf': detail("舌ピアス", "相手に舌ピアスの穿刺や装着を行う", "舌ピアスの穿刺や装着を受ける", "腫れ、感染、歯の損傷、嚥下時の不調に注意する"),
    'detail-piercing_cutting-1fkp3oe': detail("出血しない程度のカッティング", "出血しない程度に相手の皮膚を切る", "出血しない程度のカッティングを受ける", "皮膚の損傷、消毒、痛み、傷痕に注意する"),
    'detail-piercing_cutting-126gchb': detail("出血する程度のカッティング", "出血する程度に相手の皮膚を切る", "出血する程度のカッティングを受ける", "出血、感染、傷痕、傷の手当、医療上のリスクに注意する"),
  },
  "en": {
    'detail-piercing_cutting-1rw9xzg': detail("Decorative body piercing", "Give the other person a decorative body piercing", "Receive a decorative body piercing", "Consider sterilization, infection, allergies, scarring, and professional practice"),
    'detail-piercing_cutting-2ewqgb': detail("Body piercing for stimulation", "Pierce the other person’s body for stimulation", "Receive body piercing for stimulation", "Consider sterilization, infection, bleeding, pain, and physical distress"),
    'detail-piercing_cutting-ypns2e': detail("Weight on a piercing", "Apply weight or pulling force to the other person’s piercing", "Have weight or pulling force applied to a piercing", "Watch for tearing, bleeding, infection, and excessive pulling"),
    'detail-piercing_cutting-1jvq8gi': detail("Temporary piercing or ring", "Give the other person a temporary piercing or ring", "Receive a temporary piercing or ring", "Consider sterilization, infection, bleeding, and wound care"),
    'detail-piercing_cutting-rdg71s': detail("Permanent piercing or ring", "Give the other person a permanent piercing or ring", "Receive a permanent piercing or ring", "Consider permanent body changes, scarring, infection, and aftercare"),
    'detail-piercing_cutting-5uq5u0': detail("Nipple piercing", "Pierce or fit jewelry to the other person’s nipple", "Receive a nipple piercing or jewelry", "Watch for infection, tearing, circulation, and nipple sensitivity"),
    'detail-piercing_cutting-rxxg5l': detail("Navel piercing", "Pierce or fit jewelry to the other person’s navel", "Receive a navel piercing or jewelry", "Watch for infection, allergies, clothing friction, and wound care"),
    'detail-piercing_cutting-az913p': detail("Genital piercing", "Give the other person a genital piercing", "Receive a genital piercing", "Consider infection, bleeding, effects on sexual function, and professional practice"),
    'detail-piercing_cutting-1rewigf': detail("Tongue piercing", "Pierce or fit jewelry to the other person’s tongue", "Receive a tongue piercing or jewelry", "Watch for swelling, infection, tooth damage, and difficulty swallowing"),
    'detail-piercing_cutting-1fkp3oe': detail("Cutting without bleeding", "Cut the other person’s skin without causing bleeding", "Receive cutting that does not cause bleeding", "Consider skin damage, sterilization, pain, and scarring"),
    'detail-piercing_cutting-126gchb': detail("Cutting that causes bleeding", "Cut the other person’s skin until it bleeds", "Receive cutting that causes bleeding", "Consider bleeding, infection, scarring, wound care, and medical risk"),
  },
};
