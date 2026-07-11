import type { LocalizedDetailCopy, TranslatedQuestionBankLocale } from '../types';

function detail(label: string, active: string, passive: string, warning: string | null = null): LocalizedDetailCopy {
  return { label, roles: { active: { description: active }, passive: { description: passive } }, warning };
}

export const disciplineDetails: Record<TranslatedQuestionBankLocale, Record<string, LocalizedDetailCopy>> = {
  "zh-Hans": {
    'detail-discipline-11uedoh': detail("撰写日记", "要求对方撰写日记作为记录或回顾", "被要求撰写日记作为记录或回顾"),
    'detail-discipline-11sxnh8': detail("撰写实践心得", "要求对方撰写实践心得作为反馈或整理", "被要求撰写实践心得作为反馈或整理"),
    'detail-discipline-1g2g00r': detail("姿势训练", "要求对方练习指定姿势或维持姿势", "被要求练习指定姿势或维持姿势"),
    'detail-discipline-qp6v84': detail("增重", "要求对方以增重为目标调整饮食或生活习惯", "被要求以增重为目标调整饮食或生活习惯"),
    'detail-discipline-nqdxf9': detail("减重", "要求对方以减重为目标调整饮食或生活习惯", "被要求以减重为目标调整饮食或生活习惯"),
    'detail-discipline-18zxvtr': detail("饮食控制", "规范或限制对方的饮食内容与饮食方式", "饮食内容与饮食方式受到对方规范或限制", "注意营养不足、健康状况与控制界线"),
    'detail-discipline-vrrge7': detail("身体检查", "要求对方接受身体检查或展示身体状态", "被要求接受身体检查或展示身体状态"),
    'detail-discipline-mrnfh0': detail("进行对方指定的任务", "指派任务让对方完成", "接受并完成对方指派的任务"),
    'detail-discipline-1h3vvc3': detail("针对不当行为训诫", "针对对方的不当行为进行训诫或纠正", "因不当行为被对方训诫或纠正"),
    'detail-discipline-7ki0ex': detail("指定学习项目", "指定对方学习特定知识、技能或内容", "被指定学习特定知识、技能或内容"),
    'detail-discipline-1686v9k': detail("言语规范", "规范对方的用语、称呼或说话方式", "用语、称呼或说话方式受到对方规范"),
    'detail-discipline-s0l9h0': detail("制定／执行仪式", "制定并要求对方执行特定仪式", "被要求执行对方制定的特定仪式"),
  },
  "ja": {
    'detail-discipline-11uedoh': detail("日記を書く", "記録や振り返りのために日記を書くよう相手に求める", "記録や振り返りのために日記を書くよう求められる"),
    'detail-discipline-11sxnh8': detail("プレイの振り返りを書く", "フィードバックや整理のためにプレイの感想を書くよう相手に求める", "フィードバックや整理のためにプレイの感想を書くよう求められる"),
    'detail-discipline-1g2g00r': detail("姿勢のトレーニング", "指定した姿勢を練習または維持するよう相手に求める", "指定された姿勢を練習または維持するよう求められる"),
    'detail-discipline-qp6v84': detail("体重を増やす", "体重増加を目標に食事や生活習慣を調整するよう相手に求める", "体重増加を目標に食事や生活習慣を調整するよう求められる"),
    'detail-discipline-nqdxf9': detail("体重を減らす", "体重減少を目標に食事や生活習慣を調整するよう相手に求める", "体重減少を目標に食事や生活習慣を調整するよう求められる"),
    'detail-discipline-18zxvtr': detail("食事の管理", "相手の食事内容や食べ方にルールや制限を設ける", "食事内容や食べ方に相手からルールや制限を設けられる", "栄養不足、健康状態、管理の境界に注意する"),
    'detail-discipline-vrrge7': detail("身体チェック", "身体チェックを受けたり身体の状態を見せたりするよう相手に求める", "身体チェックを受けたり身体の状態を見せたりするよう求められる"),
    'detail-discipline-mrnfh0': detail("指定された課題を行う", "相手に課題を割り当てて完了してもらう", "相手から割り当てられた課題を完了する"),
    'detail-discipline-1h3vvc3': detail("不適切な行動を注意する", "相手の不適切な行動を注意または修正する", "不適切な行動について相手から注意または修正される"),
    'detail-discipline-7ki0ex': detail("学習内容を指定する", "特定の知識、技能、内容を学ぶよう相手に指定する", "特定の知識、技能、内容を学ぶよう指定される"),
    'detail-discipline-1686v9k': detail("言葉遣いのルール", "相手の言葉遣い、呼び方、話し方にルールを設ける", "言葉遣い、呼び方、話し方に相手からルールを設けられる"),
    'detail-discipline-s0l9h0': detail("儀式を定める／行う", "特定の儀式を定め、実行するよう相手に求める", "相手が定めた特定の儀式を実行するよう求められる"),
  },
  "en": {
    'detail-discipline-11uedoh': detail("Keeping a journal", "Require the other person to keep a journal for records or reflection", "Be required to keep a journal for records or reflection"),
    'detail-discipline-11sxnh8': detail("Writing a reflection on a scene", "Require the other person to write a reflection for feedback or processing", "Be required to write a reflection for feedback or processing"),
    'detail-discipline-1g2g00r': detail("Posture training", "Require the other person to practice or hold a specified posture", "Be required to practice or hold a specified posture"),
    'detail-discipline-qp6v84': detail("Weight gain", "Require the other person to adjust diet or habits with weight gain as a goal", "Be required to adjust diet or habits with weight gain as a goal"),
    'detail-discipline-nqdxf9': detail("Weight loss", "Require the other person to adjust diet or habits with weight loss as a goal", "Be required to adjust diet or habits with weight loss as a goal"),
    'detail-discipline-18zxvtr': detail("Dietary control", "Set rules or restrictions for what and how the other person eats", "Have what and how you eat regulated or restricted by the other person", "Watch for inadequate nutrition, health conditions, and boundaries around control"),
    'detail-discipline-vrrge7': detail("Body inspection", "Require the other person to undergo a body inspection or show their physical condition", "Be required to undergo a body inspection or show your physical condition"),
    'detail-discipline-mrnfh0': detail("Completing assigned tasks", "Assign a task for the other person to complete", "Accept and complete a task assigned by the other person"),
    'detail-discipline-1h3vvc3': detail("Correction for improper behavior", "Reprimand or correct the other person for behavior considered improper", "Be reprimanded or corrected for behavior considered improper"),
    'detail-discipline-7ki0ex': detail("Assigned learning", "Specify knowledge, skills, or material for the other person to learn", "Be assigned specific knowledge, skills, or material to learn"),
    'detail-discipline-1686v9k': detail("Rules for speech", "Set rules for the other person’s wording, forms of address, or way of speaking", "Have your wording, forms of address, or way of speaking regulated by the other person"),
    'detail-discipline-s0l9h0': detail("Creating or performing rituals", "Create a specific ritual and require the other person to perform it", "Be required to perform a specific ritual created by the other person"),
  },
};
