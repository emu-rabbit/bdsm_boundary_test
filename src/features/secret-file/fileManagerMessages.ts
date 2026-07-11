import type { AppLocale } from '../../app/i18n';

export interface FileManagerMessages {
  backHome: string;
  createdAt: (date: string) => string;
  delete: string;
  deleteConfirmation: (name: string) => string;
  edit: string;
  empty: string;
  emptyAction: string;
  progress: (answered: number, total: number) => string;
  title: string;
}

const messagesByLocale: Record<AppLocale, FileManagerMessages> = {
  'zh-Hant': {
    backHome: '\u56de\u5230\u4e3b\u9801',
    createdAt: (date) => `\u5efa\u7acb\u65bc ${date}`,
    delete: '\u522a\u9664',
    deleteConfirmation: (name) => `\u8981\u522a\u9664\u300c${name}\u300d\u55ce\uff1f\u9019\u53ea\u6703\u522a\u9664\u9019\u53f0\u88dd\u7f6e\u4e0a\u7684\u672c\u6a5f\u6a94\u6848\uff0c\u7121\u6cd5\u5fa9\u539f\u3002`,
    edit: '\u7de8\u8f2f\u7d50\u679c',
    empty: '\u9019\u88e1\u9084\u6c92\u6709\u5132\u5b58\u7684\u6a94\u6848\u3002\u5efa\u7acb\u4e00\u4efd\u65b0\u7684\u79d8\u5bc6\u6a94\u6848\u5f8c\uff0c\u5c31\u80fd\u5f9e\u9019\u88e1\u7e7c\u7e8c\u67e5\u770b\u6216\u7de8\u8f2f\u3002',
    emptyAction: '\u5275\u5efa\u65b0\u6a94\u6848',
    progress: (answered, total) => `\u5df2\u586b\u7b54 ${answered} / ${total}`,
    title: '\u67e5\u770b\u820a\u6a94\u6848',
  },
  'zh-Hans': {
    backHome: '\u8fd4\u56de\u4e3b\u9875',
    createdAt: (date) => `\u521b\u5efa\u4e8e ${date}`,
    delete: '\u5220\u9664',
    deleteConfirmation: (name) => `\u8981\u5220\u9664\u201c${name}\u201d\u5417\uff1f\u8fd9\u53ea\u4f1a\u5220\u9664\u8fd9\u53f0\u8bbe\u5907\u4e0a\u7684\u672c\u5730\u6587\u4ef6\uff0c\u4e14\u65e0\u6cd5\u6062\u590d\u3002`,
    edit: '\u7f16\u8f91\u7ed3\u679c',
    empty: '\u8fd9\u91cc\u8fd8\u6ca1\u6709\u5df2\u4fdd\u5b58\u7684\u6587\u4ef6\u3002\u521b\u5efa\u4e00\u4efd\u65b0\u7684\u79d8\u5bc6\u6587\u4ef6\u540e\uff0c\u5c31\u80fd\u4ece\u8fd9\u91cc\u7ee7\u7eed\u67e5\u770b\u6216\u7f16\u8f91\u3002',
    emptyAction: '\u521b\u5efa\u65b0\u6587\u4ef6',
    progress: (answered, total) => `\u5df2\u586b\u5199 ${answered} / ${total}`,
    title: '\u67e5\u770b\u65e7\u6587\u4ef6',
  },
  ja: {
    backHome: '\u30db\u30fc\u30e0\u3078\u623b\u308b',
    createdAt: (date) => `${date} \u306b\u4f5c\u6210`,
    delete: '\u524a\u9664',
    deleteConfirmation: (name) => `\u300c${name}\u300d\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f\u3053\u306e\u7aef\u672b\u306e\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u3060\u3051\u304c\u524a\u9664\u3055\u308c\u3001\u5143\u306b\u623b\u305b\u307e\u305b\u3093\u3002`,
    edit: '\u7d50\u679c\u3092\u7de8\u96c6',
    empty: '\u4fdd\u5b58\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306f\u307e\u3060\u3042\u308a\u307e\u305b\u3093\u3002\u65b0\u3057\u3044\u79d8\u5bc6\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u308b\u3068\u3001\u3053\u3053\u304b\u3089\u78ba\u8a8d\u3084\u7de8\u96c6\u3092\u7d9a\u3051\u3089\u308c\u307e\u3059\u3002',
    emptyAction: '\u65b0\u3057\u3044\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u308b',
    progress: (answered, total) => `${answered} / ${total} \u56de\u7b54\u6e08\u307f`,
    title: '\u4ee5\u524d\u306e\u30d5\u30a1\u30a4\u30eb',
  },
  en: {
    backHome: 'Home',
    createdAt: (date) => `Created ${date}`,
    delete: 'Delete',
    deleteConfirmation: (name) => `Delete "${name}"? This only removes the local file on this device and cannot be undone.`,
    edit: 'Edit results',
    empty: 'There are no saved files yet. Create a new secret file, then return here to review or edit it.',
    emptyAction: 'Create a new file',
    progress: (answered, total) => `${answered} / ${total} answered`,
    title: 'Old Files',
  },
};

export function getFileManagerMessages(locale: AppLocale): FileManagerMessages {
  return messagesByLocale[locale];
}
