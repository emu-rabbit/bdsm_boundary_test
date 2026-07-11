import type { LocalizedDetailCopy, TranslatedQuestionBankLocale } from '../types';

function detail(label: string, active: string, passive: string, warning: string | null = null): LocalizedDetailCopy {
  return { label, roles: { active: { description: active }, passive: { description: passive } }, warning };
}

export const serviceDetails: Record<TranslatedQuestionBankLocale, Record<string, LocalizedDetailCopy>> = {
  "zh-Hans": {
    'detail-service-7v0tu6': detail("脚底按摩", "接受对方为自己按摩脚底", "为对方按摩脚底"),
    'detail-service-1rvnr6f': detail("全身按摩", "接受对方为自己进行全身按摩", "为对方进行全身按摩"),
    'detail-service-1cqhir7': detail("准备餐点", "接受对方为自己准备餐点", "为对方准备餐点"),
    'detail-service-5cfc80': detail("倒茶／饮料", "接受对方为自己倒茶或准备饮料", "为对方倒茶或准备饮料"),
    'detail-service-177yx3t': detail("提行李／包包", "让对方替自己提行李或包包", "替对方提行李或包包"),
    'detail-service-16nyopw': detail("清洁玩具／道具", "让对方替自己清洁玩具或道具", "替对方清洁玩具或道具"),
    'detail-service-176k705': detail("做家务", "接受对方为自己做家务", "为对方做家务"),
    'detail-service-b75ksu': detail("洗澡服侍", "接受对方为自己洗澡或协助清洁身体", "为对方洗澡或协助清洁身体"),
    'detail-service-z1q598': detail("美甲", "接受对方为自己修剪、保养或装饰指甲", "为对方修剪、保养或装饰指甲"),
    'detail-service-1nx0nqc': detail("接送对方", "让对方接送自己往返目的地", "接送对方往返目的地"),
    'detail-service-15yxo0r': detail("性服侍", "接受对方以性行为或性互动服侍自己", "以性行为或性互动服侍对方"),
  },
  "ja": {
    'detail-service-7v0tu6': detail("足裏のマッサージ", "相手に足裏をマッサージしてもらう", "相手の足裏をマッサージする"),
    'detail-service-1rvnr6f': detail("全身マッサージ", "相手に全身をマッサージしてもらう", "相手の全身をマッサージする"),
    'detail-service-1cqhir7': detail("食事の用意", "相手に食事を用意してもらう", "相手のために食事を用意する"),
    'detail-service-5cfc80': detail("お茶や飲み物の用意", "相手にお茶を注いだり飲み物を用意したりしてもらう", "相手にお茶を注いだり飲み物を用意したりする"),
    'detail-service-177yx3t': detail("荷物やバッグを持つ", "相手に自分の荷物やバッグを持ってもらう", "相手の荷物やバッグを持つ"),
    'detail-service-16nyopw': detail("玩具や道具の手入れ", "相手に自分の玩具や道具を清潔にしてもらう", "相手の玩具や道具を清潔にする"),
    'detail-service-176k705': detail("家事", "相手に自分のための家事をしてもらう", "相手のために家事をする"),
    'detail-service-b75ksu': detail("入浴の世話", "相手に身体を洗ってもらったり、清潔にするのを手伝ってもらったりする", "相手の身体を洗ったり、清潔にするのを手伝ったりする"),
    'detail-service-z1q598': detail("ネイルケア", "相手に爪を整えたり、手入れや装飾をしてもらったりする", "相手の爪を整えたり、手入れや装飾をしたりする"),
    'detail-service-1nx0nqc': detail("送迎", "相手に目的地まで送迎してもらう", "相手を目的地まで送迎する"),
    'detail-service-15yxo0r': detail("性的な奉仕", "性行為や性的な関わりによる奉仕を相手から受ける", "性行為や性的な関わりによって相手に奉仕する"),
  },
  "en": {
    'detail-service-7v0tu6': detail("Foot massage", "Have the other person massage the soles of your feet", "Massage the soles of the other person’s feet"),
    'detail-service-1rvnr6f': detail("Full-body massage", "Have the other person give you a full-body massage", "Give the other person a full-body massage"),
    'detail-service-1cqhir7': detail("Preparing meals", "Have the other person prepare a meal for you", "Prepare a meal for the other person"),
    'detail-service-5cfc80': detail("Serving tea or drinks", "Have the other person pour tea or prepare a drink for you", "Pour tea or prepare a drink for the other person"),
    'detail-service-177yx3t': detail("Carrying luggage or bags", "Have the other person carry your luggage or bags", "Carry the other person’s luggage or bags"),
    'detail-service-16nyopw': detail("Cleaning toys or equipment", "Have the other person clean your toys or equipment", "Clean the other person’s toys or equipment"),
    'detail-service-176k705': detail("Housework", "Have the other person do housework for you", "Do housework for the other person"),
    'detail-service-b75ksu': detail("Bathing service", "Have the other person bathe you or help clean your body", "Bathe the other person or help clean their body"),
    'detail-service-z1q598': detail("Nail care", "Have the other person trim, care for, or decorate your nails", "Trim, care for, or decorate the other person’s nails"),
    'detail-service-1nx0nqc': detail("Providing transportation", "Have the other person drive you to and from a destination", "Drive the other person to and from a destination"),
    'detail-service-15yxo0r': detail("Sexual service", "Receive service from the other person through sexual activity or interaction", "Serve the other person through sexual activity or interaction"),
  },
};
