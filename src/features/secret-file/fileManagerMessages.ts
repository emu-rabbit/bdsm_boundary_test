import type { AppLocale } from '../../app/i18n';
import type { SecretFileScope } from './domain/types';

export interface FileManagerMessages {
  backHome: string;
  cloudEmptyBody: string;
  cloudEmptyTitle: string;
  cloudImportDescription: string;
  cloudImportLabel: string;
  cloudImportPending: string;
  cloudImportPlaceholder: string;
  cloudImportSubmit: string;
  cloudTab: string;
  close: string;
  copyError: string;
  copyJson: string;
  copySuccess: string;
  delete: string;
  deleteConfirmation: (name: string) => string;
  edit: string;
  empty: string;
  emptyAction: string;
  importAction: string;
  importJson: string;
  importJsonDescription: string;
  importJsonLabel: string;
  importJsonPlaceholder: string;
  importSuccess: (name: string) => string;
  importTitle: string;
  intro: string;
  invalidCloudUrl: string;
  kicker: string;
  localTab: string;
  overwriteConfirmation: (name: string, existingUpdatedAt: string, importedUpdatedAt: string) => string;
  progress: (answered: number, total: number) => string;
  rabbitAlt: string;
  scope: (scope: SecretFileScope) => string;
  title: string;
  updatedAt: (date: string) => string;
  view: string;
}

const scopeLabels: Record<AppLocale, Record<SecretFileScope, string>> = {
  'zh-Hant': { activeOnly: '僅主導側', passiveOnly: '僅配合側', all: '主導側與配合側' },
  'zh-Hans': { activeOnly: '仅主导侧', passiveOnly: '仅配合侧', all: '主导侧与配合侧' },
  ja: { activeOnly: 'リード側のみ', passiveOnly: 'フォロー側のみ', all: 'リード側とフォロー側' },
  en: { activeOnly: 'Leading only', passiveOnly: 'Following only', all: 'Leading and following' },
};

const messagesByLocale: Record<AppLocale, FileManagerMessages> = {
  'zh-Hant': {
    backHome: '回到主頁',
    cloudEmptyBody: '雲端檔案的匯入與檢視功能仍在準備中。',
    cloudEmptyTitle: '雲端檔案列表尚未開放',
    cloudImportDescription: '貼上秘密檔案的分享網址。雲端功能尚未開放，目前不會匯入檔案。',
    cloudImportLabel: '雲端檔案網址',
    cloudImportPending: '網址格式正確。雲端讀取功能尚未接上，因此這次不會保存連結。',
    cloudImportPlaceholder: 'https://boundarynotes.com/preview?file=…',
    cloudImportSubmit: '檢查網址',
    cloudTab: '雲端檔案',
    close: '關閉',
    copyError: '無法複製 JSON，請確認瀏覽器已允許剪貼簿存取。',
    copyJson: '複製 JSON',
    copySuccess: '已將完整 JSON 複製到剪貼簿。',
    delete: '刪除本地檔案',
    deleteConfirmation: (name) => `要刪除「${name}」嗎？這只會刪除這台裝置上的本地檔案，且無法復原。`,
    edit: '編輯檔案',
    empty: '這台裝置還沒有保存的檔案。建立新檔案後，就能從這裡繼續填答或檢視。',
    emptyAction: '創建新檔案',
    importAction: '匯入檔案',
    importJson: '驗證並匯入',
    importJsonDescription: '貼上完整的秘密檔案 JSON。內容會先通過正式 schema 驗證，再保存到這台裝置。',
    importJsonLabel: '秘密檔案 JSON',
    importJsonPlaceholder: '{ "schemaVersion": 2, ... }',
    importSuccess: (name) => `已匯入「${name}」，並在新視窗開啟檢視頁。`,
    importTitle: '匯入舊檔案',
    intro: '在這裡整理保存在本地或與雲端連結的檔案。',
    invalidCloudUrl: '這不是可辨識的網址，請貼上完整的分享連結。',
    kicker: '秘密檔案櫃',
    localTab: '本地檔案',
    overwriteConfirmation: (name, existingUpdatedAt, importedUpdatedAt) =>
      `「${name}」的 fileId 已存在，繼續匯入會直接覆蓋本地檔案。\n\n本地舊檔最後編輯：${existingUpdatedAt}\n匯入新檔最後編輯：${importedUpdatedAt}\n\n要繼續覆蓋嗎？`,
    progress: (answered, total) => `已填答 ${answered} / ${total}`,
    rabbitAlt: '白色守密兔抱著一份上鎖的秘密檔案。',
    scope: (scope) => scopeLabels['zh-Hant'][scope],
    title: '查看舊檔案',
    updatedAt: (date) => `最後編輯 ${date}`,
    view: '檢視檔案',
  },
  'zh-Hans': {
    backHome: '返回主页',
    cloudEmptyBody: '云端文件的导入与查看功能仍在准备中。',
    cloudEmptyTitle: '云端文件列表尚未开放',
    cloudImportDescription: '粘贴秘密文件的分享网址。云端功能尚未开放，目前不会导入文件。',
    cloudImportLabel: '云端文件网址',
    cloudImportPending: '网址格式正确。云端读取功能尚未接入，因此这次不会保存链接。',
    cloudImportPlaceholder: 'https://boundarynotes.com/preview?file=…',
    cloudImportSubmit: '检查网址',
    cloudTab: '云端文件',
    close: '关闭',
    copyError: '无法复制 JSON，请确认浏览器已允许访问剪贴板。',
    copyJson: '复制 JSON',
    copySuccess: '已将完整 JSON 复制到剪贴板。',
    delete: '删除本地文件',
    deleteConfirmation: (name) => `要删除“${name}”吗？这只会删除此设备上的本地文件，且无法恢复。`,
    edit: '编辑文件',
    empty: '此设备还没有保存的文件。创建新文件后，就能从这里继续填写或查看。',
    emptyAction: '创建新文件',
    importAction: '导入文件',
    importJson: '验证并导入',
    importJsonDescription: '粘贴完整的秘密文件 JSON。内容会先通过正式 schema 验证，再保存到此设备。',
    importJsonLabel: '秘密文件 JSON',
    importJsonPlaceholder: '{ "schemaVersion": 2, ... }',
    importSuccess: (name) => `已导入“${name}”，并在新窗口打开查看页。`,
    importTitle: '导入旧文件',
    intro: '在这里整理保存在本地或与云端连接的文件。',
    invalidCloudUrl: '这不是可识别的网址，请粘贴完整的分享链接。',
    kicker: '秘密文件柜',
    localTab: '本地文件',
    overwriteConfirmation: (name, existingUpdatedAt, importedUpdatedAt) =>
      `“${name}”的 fileId 已存在，继续导入会直接覆盖本地文件。\n\n本地旧文件最后编辑：${existingUpdatedAt}\n导入新文件最后编辑：${importedUpdatedAt}\n\n要继续覆盖吗？`,
    progress: (answered, total) => `已填写 ${answered} / ${total}`,
    rabbitAlt: '白色守密兔抱着一份上锁的秘密文件。',
    scope: (scope) => scopeLabels['zh-Hans'][scope],
    title: '查看旧文件',
    updatedAt: (date) => `最后编辑 ${date}`,
    view: '查看文件',
  },
  ja: {
    backHome: 'ホームへ戻る',
    cloudEmptyBody: 'クラウドファイルの取り込みと閲覧機能は準備中です。',
    cloudEmptyTitle: 'クラウドファイル一覧は準備中です',
    cloudImportDescription: '秘密ファイルの共有 URL を貼り付けます。クラウド機能は未公開のため、現在は取り込みません。',
    cloudImportLabel: 'クラウドファイル URL',
    cloudImportPending: 'URL 形式を確認しました。クラウド読み込みは未接続のため、今回はリンクを保存しません。',
    cloudImportPlaceholder: 'https://boundarynotes.com/preview?file=…',
    cloudImportSubmit: 'URL を確認',
    cloudTab: 'クラウド',
    close: '閉じる',
    copyError: 'JSON をコピーできませんでした。ブラウザのクリップボード権限を確認してください。',
    copyJson: 'JSON をコピー',
    copySuccess: '完全な JSON をクリップボードにコピーしました。',
    delete: '端末から削除',
    deleteConfirmation: (name) => `「${name}」を削除しますか？この端末のローカルファイルだけが削除され、元に戻せません。`,
    edit: 'ファイルを編集',
    empty: 'この端末に保存されたファイルはまだありません。新しいファイルを作ると、ここから回答や確認を続けられます。',
    emptyAction: '新しいファイルを作る',
    importAction: 'ファイルを取り込む',
    importJson: '検証して取り込む',
    importJsonDescription: '秘密ファイルの完全な JSON を貼り付けます。正式な schema で検証してから、この端末へ保存します。',
    importJsonLabel: '秘密ファイル JSON',
    importJsonPlaceholder: '{ "schemaVersion": 2, ... }',
    importSuccess: (name) => `「${name}」を取り込み、新しいウィンドウで閲覧ページを開きました。`,
    importTitle: '以前のファイルを取り込む',
    intro: 'ローカルに保存したファイルや、クラウドにリンクしたファイルをここで整理できます。',
    invalidCloudUrl: '認識できる URL ではありません。完全な共有リンクを貼り付けてください。',
    kicker: '秘密ファイル棚',
    localTab: 'ローカル',
    overwriteConfirmation: (name, existingUpdatedAt, importedUpdatedAt) =>
      `「${name}」と同じ fileId が存在します。続行するとローカルファイルを上書きします。\n\n既存ファイルの最終編集：${existingUpdatedAt}\n取り込むファイルの最終編集：${importedUpdatedAt}\n\n上書きしますか？`,
    progress: (answered, total) => `${answered} / ${total} 回答済み`,
    rabbitAlt: '白い守秘うさぎが鍵付きの秘密ファイルを抱えている。',
    scope: (scope) => scopeLabels.ja[scope],
    title: '以前のファイル',
    updatedAt: (date) => `最終編集 ${date}`,
    view: 'ファイルを見る',
  },
  en: {
    backHome: 'Home',
    cloudEmptyBody: 'Cloud file imports and viewing are still being prepared.',
    cloudEmptyTitle: 'Cloud file lists are not available yet',
    cloudImportDescription: 'Paste a secret-file share URL. Cloud features are not available yet, so no file will be imported.',
    cloudImportLabel: 'Cloud file URL',
    cloudImportPending: 'The URL format is valid. Cloud loading is not connected yet, so this link was not saved.',
    cloudImportPlaceholder: 'https://boundarynotes.com/preview?file=…',
    cloudImportSubmit: 'Check URL',
    cloudTab: 'Cloud files',
    close: 'Close',
    copyError: 'Could not copy the JSON. Check that clipboard access is allowed in this browser.',
    copyJson: 'Copy JSON',
    copySuccess: 'The complete JSON was copied to the clipboard.',
    delete: 'Delete local file',
    deleteConfirmation: (name) => `Delete “${name}”? This only removes the local file on this device and cannot be undone.`,
    edit: 'Edit file',
    empty: 'There are no files saved on this device yet. Create one to continue answering or review it here.',
    emptyAction: 'Create a new file',
    importAction: 'Import file',
    importJson: 'Validate and import',
    importJsonDescription: 'Paste a complete secret-file JSON document. It is validated against the production schema before being saved on this device.',
    importJsonLabel: 'Secret-file JSON',
    importJsonPlaceholder: '{ "schemaVersion": 2, ... }',
    importSuccess: (name) => `Imported “${name}” and opened its preview in a new window.`,
    importTitle: 'Import an old file',
    intro: 'Manage files saved locally or linked from the cloud.',
    invalidCloudUrl: 'This is not a recognizable URL. Paste the complete share link.',
    kicker: 'Secret-file cabinet',
    localTab: 'Local files',
    overwriteConfirmation: (name, existingUpdatedAt, importedUpdatedAt) =>
      `A file with the same fileId as “${name}” already exists. Continuing will overwrite the local file.\n\nExisting file last edited: ${existingUpdatedAt}\nImported file last edited: ${importedUpdatedAt}\n\nContinue and overwrite it?`,
    progress: (answered, total) => `${answered} / ${total} answered`,
    rabbitAlt: 'The white keeper bunny holds a locked secret file.',
    scope: (scope) => scopeLabels.en[scope],
    title: 'Old Files',
    updatedAt: (date) => `Last edited ${date}`,
    view: 'View file',
  },
};

export function getFileManagerMessages(locale: AppLocale): FileManagerMessages {
  return messagesByLocale[locale];
}
