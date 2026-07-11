import type { LocalizedDetailCopy, TranslatedQuestionBankLocale } from '../types';

function detail(label: string, active: string, passive: string, warning: string | null = null): LocalizedDetailCopy {
  return { label, roles: { active: { description: active }, passive: { description: passive } }, warning };
}

export const rolePlayDetails: Record<TranslatedQuestionBankLocale, Record<string, LocalizedDetailCopy>> = {
  "zh-Hans": {
    'detail-role_play-j6rqh7': detail("扮演小宝宝", "让对方扮演小宝宝", "在对方面前扮演小宝宝"),
    'detail-role_play-1hqqab2': detail("扮演小孩", "让对方扮演小孩", "在对方面前扮演小孩"),
    'detail-role_play-1b6vck1': detail("扮演青少年", "让对方扮演青少年", "在对方面前扮演青少年"),
    'detail-role_play-1bf86f7': detail("扮演老年人", "让对方扮演老年人", "在对方面前扮演老年人"),
    'detail-role_play-1qg4s3q': detail("扮演人偶或娃娃", "让对方扮演人偶或娃娃", "在对方面前扮演人偶或娃娃"),
    'detail-role_play-1i9t0en': detail("扮演主仆角色", "在贵族与仆役情境中担任主导侧", "在贵族与仆役情境中担任配合侧"),
    'detail-role_play-1n9uevy': detail("扮演上司／下属", "在上司与下属的情境中担任主导侧", "在上司与下属的情境中担任配合侧"),
    'detail-role_play-kodrud': detail("扮演医生或护士／病患", "在医护与病患的情境中担任主导侧", "在医护与病患的情境中担任配合侧"),
    'detail-role_play-1gts3i7': detail("扮演狱卒／服刑人", "在狱卒与服刑人的情境中担任主导侧", "在狱卒与服刑人的情境中担任配合侧"),
    'detail-role_play-vepd7q': detail("扮演老师／学生", "在老师与学生的情境中担任主导侧", "在老师与学生的情境中担任配合侧"),
    'detail-role_play-1virdb': detail("扮演父母／儿女", "在父母与儿女的情境中担任主导侧", "在父母与儿女的情境中担任配合侧"),
    'detail-role_play-18ycvwm': detail("扮演兄弟姐妹", "在兄弟姐妹的情境中担任主导侧", "在兄弟姐妹的情境中担任配合侧"),
    'detail-role_play-pyo1lh': detail("包尿布", "让对方包尿布", "在对方面前包尿布"),
    'detail-role_play-u5m4ic': detail("涂鸦游戏", "在对方身体或物品上涂鸦", "让对方在自己身体或物品上涂鸦"),
  },
  "ja": {
    'detail-role_play-j6rqh7': detail("赤ちゃん役", "相手に赤ちゃん役を演じてもらう", "相手の前で赤ちゃん役を演じる"),
    'detail-role_play-1hqqab2': detail("子ども役", "相手に子ども役を演じてもらう", "相手の前で子ども役を演じる"),
    'detail-role_play-1b6vck1': detail("ティーンエイジャー役", "相手にティーンエイジャー役を演じてもらう", "相手の前でティーンエイジャー役を演じる"),
    'detail-role_play-1bf86f7': detail("高齢者役", "相手に高齢者役を演じてもらう", "相手の前で高齢者役を演じる"),
    'detail-role_play-1qg4s3q': detail("人形役", "相手に人形役を演じてもらう", "相手の前で人形役を演じる"),
    'detail-role_play-1i9t0en': detail("主人／使用人役", "貴族と使用人の場面でリード側を担う", "貴族と使用人の場面でフォロー側を担う"),
    'detail-role_play-1n9uevy': detail("上司／部下役", "上司と部下の場面でリード側を担う", "上司と部下の場面でフォロー側を担う"),
    'detail-role_play-kodrud': detail("医師・看護師／患者役", "医療者と患者の場面でリード側を担う", "医療者と患者の場面でフォロー側を担う"),
    'detail-role_play-1gts3i7': detail("看守／受刑者役", "看守と受刑者の場面でリード側を担う", "看守と受刑者の場面でフォロー側を担う"),
    'detail-role_play-vepd7q': detail("教師／生徒役", "教師と生徒の場面でリード側を担う", "教師と生徒の場面でフォロー側を担う"),
    'detail-role_play-1virdb': detail("親／子ども役", "親と子どもの場面でリード側を担う", "親と子どもの場面でフォロー側を担う"),
    'detail-role_play-18ycvwm': detail("きょうだい役", "きょうだいの場面でリード側を担う", "きょうだいの場面でフォロー側を担う"),
    'detail-role_play-pyo1lh': detail("おむつを着ける", "相手におむつを着けてもらう", "相手の前でおむつを着ける"),
    'detail-role_play-u5m4ic': detail("落書きプレイ", "相手の身体や持ち物に落書きする", "自分の身体や持ち物に相手から落書きされる"),
  },
  "en": {
    'detail-role_play-j6rqh7': detail("Playing a baby", "Have the other person play a baby", "Play a baby in front of the other person"),
    'detail-role_play-1hqqab2': detail("Playing a child", "Have the other person play a child", "Play a child in front of the other person"),
    'detail-role_play-1b6vck1': detail("Playing a teenager", "Have the other person play a teenager", "Play a teenager in front of the other person"),
    'detail-role_play-1bf86f7': detail("Playing an older person", "Have the other person play an older person", "Play an older person in front of the other person"),
    'detail-role_play-1qg4s3q': detail("Playing a doll", "Have the other person play a doll", "Play a doll in front of the other person"),
    'detail-role_play-1i9t0en': detail("Master and servant roles", "Take the leading role in an aristocrat-and-servant scenario", "Take the following role in an aristocrat-and-servant scenario"),
    'detail-role_play-1n9uevy': detail("Boss and subordinate roles", "Take the leading role in a boss-and-subordinate scenario", "Take the following role in a boss-and-subordinate scenario"),
    'detail-role_play-kodrud': detail("Doctor or nurse and patient roles", "Take the leading role in a medical-professional-and-patient scenario", "Take the following role in a medical-professional-and-patient scenario"),
    'detail-role_play-1gts3i7': detail("Prison guard and prisoner roles", "Take the leading role in a prison-guard-and-prisoner scenario", "Take the following role in a prison-guard-and-prisoner scenario"),
    'detail-role_play-vepd7q': detail("Teacher and student roles", "Take the leading role in a teacher-and-student scenario", "Take the following role in a teacher-and-student scenario"),
    'detail-role_play-1virdb': detail("Parent and child roles", "Take the leading role in a parent-and-child scenario", "Take the following role in a parent-and-child scenario"),
    'detail-role_play-18ycvwm': detail("Sibling roles", "Take the leading role in a sibling scenario", "Take the following role in a sibling scenario"),
    'detail-role_play-pyo1lh': detail("Wearing a diaper", "Have the other person wear a diaper", "Wear a diaper in front of the other person"),
    'detail-role_play-u5m4ic': detail("Doodling play", "Draw or write on the other person’s body or belongings", "Have the other person draw or write on your body or belongings"),
  },
};
