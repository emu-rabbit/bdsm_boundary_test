import type { LocalizedDetailCopy, TranslatedQuestionBankLocale } from '../types';

function detail(label: string, active: string, passive: string, warning: string | null = null): LocalizedDetailCopy {
  return { label, roles: { active: { description: active }, passive: { description: passive } }, warning };
}

export const imageRecordingDetails: Record<TranslatedQuestionBankLocale, Record<string, LocalizedDetailCopy>> = {
  "zh-Hans": {
    'detail-image_recording-wr9mg2': detail("拍摄／录制裸体", "拍摄或录制对方裸体", "裸体被拍摄或录制"),
    'detail-image_recording-pottfn': detail("拍摄／录制性爱过程", "拍摄或录制对方的性爱过程", "性爱过程被拍摄或录制"),
    'detail-image_recording-ijadox': detail("拍摄／录制调教过程", "拍摄或录制对方的调教过程", "调教过程被拍摄或录制"),
    'detail-image_recording-xuxzia': detail("发送私密影像／影片", "要求对方发送私密影像或影片", "发送自己的私密影像或影片"),
    'detail-image_recording-1c6bdpw': detail("在网络公开私密影像／影片", "将对方的私密影像或影片公开到网络", "自己的私密影像或影片被公开到网络", "注意不可逆外泄、平台规范、身份暴露与法律风险"),
    'detail-image_recording-1942hqe': detail("用对方的私密影像／影片自慰", "使用对方的私密影像或影片自慰", "自己的私密影像或影片被对方用于自慰"),
    'detail-image_recording-1ie3kyu': detail("用配合侧的装置拍摄", "用配合侧的装置拍摄私密影像或影片", "自己的装置被用来拍摄私密影像或影片"),
    'detail-image_recording-r9zfxi': detail("用主导侧的装置拍摄", "用自己的装置拍摄对方的私密影像或影片", "被对方用其装置拍摄私密影像或影片", "注意保存权限、装置安全、外泄风险与删除约定"),
    'detail-image_recording-16hzzoq': detail("制作身体影像历程记录", "为对方制作身体影像历程记录", "被制作身体影像历程记录"),
  },
  "ja": {
    'detail-image_recording-wr9mg2': detail("裸体の撮影・録画", "相手の裸体を撮影または録画する", "裸体を撮影または録画される"),
    'detail-image_recording-pottfn': detail("性行為の撮影・録画", "相手の性行為を撮影または録画する", "性行為を撮影または録画される"),
    'detail-image_recording-ijadox': detail("プレイの撮影・録画", "相手とのプレイを撮影または録画する", "プレイを撮影または録画される"),
    'detail-image_recording-xuxzia': detail("私的な画像・動画を送る", "私的な画像や動画を送るよう相手に求める", "自分の私的な画像や動画を送る"),
    'detail-image_recording-1c6bdpw': detail("私的な画像・動画をネットで公開する", "相手の私的な画像や動画をネットで公開する", "自分の私的な画像や動画をネットで公開される", "取り消せない拡散、プラットフォーム規約、身元の露出、法的リスクに注意する"),
    'detail-image_recording-1942hqe': detail("相手の私的な画像・動画で自慰する", "相手の私的な画像や動画を使って自慰する", "自分の私的な画像や動画を相手の自慰に使われる"),
    'detail-image_recording-1ie3kyu': detail("フォロー側の端末で撮影する", "フォロー側の端末で私的な画像や動画を撮影する", "自分の端末で私的な画像や動画を撮影される"),
    'detail-image_recording-r9zfxi': detail("リード側の端末で撮影する", "自分の端末で相手の私的な画像や動画を撮影する", "相手の端末で私的な画像や動画を撮影される", "保存権限、端末の安全、流出リスク、削除の取り決めに注意する"),
    'detail-image_recording-16hzzoq': detail("身体の画像記録を作る", "相手の身体の変化を画像で記録する", "身体の変化を画像で記録される"),
  },
  "en": {
    'detail-image_recording-wr9mg2': detail("Photographing or recording nudity", "Photograph or record the other person nude", "Be photographed or recorded nude"),
    'detail-image_recording-pottfn': detail("Photographing or recording sex", "Photograph or record the other person during sex", "Have sexual activity photographed or recorded"),
    'detail-image_recording-ijadox': detail("Photographing or recording a play scene", "Photograph or record the other person during a play scene", "Have a play scene photographed or recorded"),
    'detail-image_recording-xuxzia': detail("Sending intimate images or videos", "Ask the other person to send intimate images or videos", "Send intimate images or videos of yourself"),
    'detail-image_recording-1c6bdpw': detail("Publishing intimate images or videos online", "Publish the other person’s intimate images or videos online", "Have your intimate images or videos published online", "Consider irreversible distribution, platform rules, exposure of identity, and legal risk"),
    'detail-image_recording-1942hqe': detail("Masturbating with the other person’s intimate images or videos", "Use the other person’s intimate images or videos while masturbating", "Have your intimate images or videos used by the other person while masturbating"),
    'detail-image_recording-1ie3kyu': detail("Recording with the Following side’s device", "Use the Following side’s device to capture intimate images or videos", "Have your own device used to capture intimate images or videos"),
    'detail-image_recording-r9zfxi': detail("Recording with the Leading side’s device", "Use your own device to capture intimate images or videos of the other person", "Have intimate images or videos captured on the other person’s device", "Consider storage permissions, device security, distribution risk, and deletion agreements"),
    'detail-image_recording-16hzzoq': detail("Creating a visual record of the body over time", "Create a visual record of the other person’s body over time", "Have a visual record of your body created over time"),
  },
};
