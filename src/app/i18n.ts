import { computed, ref, watch } from 'vue';
import type { AppRouteId } from './routes';

export type AppLocale = 'zh-Hant' | 'zh-Hans' | 'ja' | 'en';

export type LocaleOption = {
  id: AppLocale;
  label: string;
};

export type RouteMessage = {
  label: string;
  summary: string;
};

export type StoryChoiceMessage = {
  label: string;
  next: string;
};

export type StoryStepMessage = {
  action?: string;
  body?: string[];
  choices?: StoryChoiceMessage[];
  lines?: string[];
  message?: string;
};

export type LocaleMessages = {
  about: {
    body: string;
    replayStory: string;
    title: string;
  };
  assets: {
    homeRabbitAlt: string;
    settingsRabbitAlt: string;
  };
  brand: {
    restartStoryAria: (title: string) => string;
  };
  common: {
    backHome: string;
    planned: string;
    ready: string;
  };
  home: {
    copy: string;
    kicker: string;
    navAria: string;
  };
  routes: Record<AppRouteId, RouteMessage>;
  settings: {
    body: string;
    languageLabel: string;
    profileFieldLabel: string;
    profileLabel: string;
    profilePlaceholder: string;
    profileSaved: string;
    saveProfile: string;
    title: string;
  };
  story: {
    languageQuestion: string;
    nameFieldLabel: string;
    speakerName: string;
    steps: Record<string, StoryStepMessage>;
  };
  title: {
    connector: string;
    defaultProfileName: string;
    objectLabel: string;
  };
};

export const localeStorageKey = 'bdsm-boundary-test-locale';

export const defaultLocale: AppLocale = 'zh-Hant';

export const localeOptions: LocaleOption[] = [
  { id: 'zh-Hant', label: '繁體中文' },
  { id: 'zh-Hans', label: '简体中文' },
  { id: 'ja', label: '日本語' },
  { id: 'en', label: 'English' },
];

const supportedLocaleIds = new Set<AppLocale>(localeOptions.map((option) => option.id));

function isAppLocale(value: string | null): value is AppLocale {
  return value !== null && supportedLocaleIds.has(value as AppLocale);
}

function storageAvailable(): Storage | null {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.localStorage;
}

export function loadStoredLocale(): AppLocale {
  try {
    const storedLocale = storageAvailable()?.getItem(localeStorageKey) ?? null;
    return isAppLocale(storedLocale) ? storedLocale : defaultLocale;
  } catch {
    return defaultLocale;
  }
}

export function saveStoredLocale(locale: AppLocale): void {
  try {
    storageAvailable()?.setItem(localeStorageKey, locale);
  } catch {
    // localStorage can be unavailable in restricted/private contexts; the current session still updates.
  }
}

export const messagesByLocale: Record<AppLocale, LocaleMessages> = {
  'zh-Hant': {
    about: {
      body: '這隻兔子會陪你把目前的感覺、界線與想說清楚的事整理成一份檔案。它只是溝通起點，不會替任何人做決定。',
      replayStory: '重播前導劇情',
      title: '關於這隻兔子',
    },
    assets: {
      homeRabbitAlt: '白色兔子揮手，懷裡抱著秘密檔案筆記本。',
      settingsRabbitAlt: '白色兔子抱著設定板，齒輪圖案在設定板上。',
    },
    brand: {
      restartStoryAria: (title) => `${title}：重新開始前導劇情`,
    },
    common: {
      backHome: '回主頁',
      planned: '規劃中',
      ready: '可使用',
    },
    home: {
      copy: '今天也可以慢慢來，可以創建新的檔案，也可以從舊的檔案繼續作答。噢，還是你打算查看自己的變化，或是分享給別人這一部分的你呢？',
      kicker: '歡迎回來',
      navAria: '秘密檔案主要入口',
    },
    routes: {
      story: {
        label: '前導劇情',
        summary: '讓兔子帶使用者進入秘密檔案的第一段互動。',
      },
      home: {
        label: '主頁',
        summary: '彙整後續主要流程入口，作為多頁功能的導覽起點。',
      },
      create: {
        label: '創建新檔案',
        summary: '開始新的測驗，整理對各個項目的經驗、興趣與備註。',
      },
      files: {
        label: '查看舊檔案',
        summary: '檢閱、編輯本地保存的檔案，或用連結載入雲端檔案。',
      },
      timeMachine: {
        label: '搭乘時光機',
        summary: '比對不同檔案之間的變化，看看界線與感覺如何移動。',
      },
      about: {
        label: '關於這隻兔子',
        summary: '了解這個專案如何陪你整理界線與溝通起點。',
      },
      settings: {
        label: '設定',
        summary: '調整語言、偏好與和本機資料相關的選項。',
      },
    },
    settings: {
      body: '這些設定只放在這台裝置裡。',
      languageLabel: '守密兔要用的語言',
      profileFieldLabel: '稱呼',
      profileLabel: '想怎麼稱呼你',
      profilePlaceholder: '兔子',
      profileSaved: '已儲存',
      saveProfile: '儲存稱呼',
      title: '設定',
    },
    story: {
      languageQuestion: '......?',
      nameFieldLabel: '稱呼',
      speakerName: '不知哪來的兔子',
      steps: {
        'self-question': {
          lines: ['嗨！不知道甚麼風把你吹來的！', '但……你了解自己嗎？'],
          choices: [
            { label: '了解', next: 'self-yes' },
            { label: '不了解', next: 'self-no' },
            { label: '不太確定', next: 'self-unsure' },
          ],
        },
        'self-yes': {
          message: '太好了，那我想你接下來一定得心應手！',
          action: '（自豪）',
        },
        'self-no': {
          message: '那我想，我可以陪你更摸得清楚自己！',
          action: '真的嗎？',
        },
        'self-unsure': {
          message: '那真是好消息，探索未知有時最迷人了！',
          action: '我也這樣覺得',
        },
        'other-question': {
          lines: ['不過……那個人了解你嗎？'],
          choices: [
            { label: '了解', next: 'other-yes' },
            { label: '不了解', next: 'other-no' },
            { label: '那個人是誰', next: 'other-who' },
          ],
        },
        'other-yes': {
          message: '那這是個玩遊戲的機會，來看看他可以得幾分！',
          action: '聽起來真酷！',
        },
        'other-no': {
          message: '沒事的，現在有個跨出第一步的機會',
          action: '那我該怎麼做呢？',
        },
        'other-who': {
          message:
            '那個人？也許是你的下個約會對象……也許是你的伴侶，也或許是任何你想要讓對方了解你的人。',
          action: '了解了',
        },
        name: {
          lines: ['該怎麼稱呼你呢？'],
          action: '寫進檔案',
        },
        file: {
          body: [
            '在這裡，我們將會好好地記錄下了你對於各個BDSM項目的喜好和接受程度。這裡沒有正確答案，只有你仍然是你，慾望仍然是慾望。',
            '你可以保存，也可以分享給心中的那個人，更可以用來和誰溝通。也許過一段時間後，我還能再次看到你的到來，到時再跟我聊聊你的變化吧！',
          ],
          action: 'OK',
        },
      },
    },
    title: {
      connector: '的',
      defaultProfileName: '兔子',
      objectLabel: '祕密檔案',
    },
  },
  'zh-Hans': {
    about: {
      body: '这只兔子会陪你把现在的感觉、界线和想说清楚的事整理成一份档案。它只是沟通起点，不会替任何人做决定。',
      replayStory: '重播前导剧情',
      title: '关于这只兔子',
    },
    assets: {
      homeRabbitAlt: '白色兔子挥手，怀里抱着秘密档案笔记本。',
      settingsRabbitAlt: '白色兔子抱着设置板，齿轮图案在设置板上。',
    },
    brand: {
      restartStoryAria: (title) => `${title}：重新开始前导剧情`,
    },
    common: {
      backHome: '回主页',
      planned: '规划中',
      ready: '可使用',
    },
    home: {
      copy: '今天也可以慢慢来，可以创建新档案，也可以接着旧档案继续。噢，你也想看看自己的变化，或把这一部分的你分享给别人吗？',
      kicker: '欢迎回来',
      navAria: '秘密档案主要入口',
    },
    routes: {
      story: {
        label: '前导剧情',
        summary: '让兔子带你进入秘密档案的第一段互动。',
      },
      home: {
        label: '主页',
        summary: '整理后续主要流程入口，作为多页功能的起点。',
      },
      create: {
        label: '创建新档案',
        summary: '开始新的测试，整理各项目的经验、兴趣和备注。',
      },
      files: {
        label: '查看旧档案',
        summary: '查看、编辑本地档案，或用链接载入云端档案。',
      },
      timeMachine: {
        label: '搭乘时光机',
        summary: '比对不同档案之间的变化，看看界线和感觉如何移动。',
      },
      about: {
        label: '关于这只兔子',
        summary: '了解这个项目如何陪你整理界线与沟通起点。',
      },
      settings: {
        label: '设置',
        summary: '调整语言、偏好与本机资料选项。',
      },
    },
    settings: {
      body: '这些设置只放在这台装置里。',
      languageLabel: '守密兔要用的语言',
      profileFieldLabel: '称呼',
      profileLabel: '想怎么称呼你',
      profilePlaceholder: '兔子',
      profileSaved: '已保存',
      saveProfile: '保存称呼',
      title: '设置',
    },
    story: {
      languageQuestion: '......?',
      nameFieldLabel: '称呼',
      speakerName: '不知哪来的兔子',
      steps: {
        'self-question': {
          lines: ['嗨！不知道什么风把你吹来了！', '但……你了解自己吗？'],
          choices: [
            { label: '了解', next: 'self-yes' },
            { label: '不了解', next: 'self-no' },
            { label: '不太确定', next: 'self-unsure' },
          ],
        },
        'self-yes': {
          message: '太好了，那我想你接下来一定得心应手！',
          action: '（自豪）',
        },
        'self-no': {
          message: '那我想，我可以陪你更摸清楚自己！',
          action: '真的吗？',
        },
        'self-unsure': {
          message: '那真是好消息，探索未知有时最迷人了！',
          action: '我也这样觉得',
        },
        'other-question': {
          lines: ['不过……那个人了解你吗？'],
          choices: [
            { label: '了解', next: 'other-yes' },
            { label: '不了解', next: 'other-no' },
            { label: '那个人是谁', next: 'other-who' },
          ],
        },
        'other-yes': {
          message: '那这是个玩游戏的机会，来看看他可以得几分！',
          action: '听起来真酷！',
        },
        'other-no': {
          message: '没事的，现在有个跨出第一步的机会',
          action: '那我该怎么做呢？',
        },
        'other-who': {
          message: '那个人？也许是你的下个约会对象……也许是你的伴侣，也或许是任何你想让对方了解你的人。',
          action: '了解了',
        },
        name: {
          lines: ['该怎么称呼你呢？'],
          action: '写进档案',
        },
        file: {
          body: [
            '在这里，我们会好好记录你对各个 BDSM 项目的喜好和接受程度。这里没有正确答案，只有你仍然是你，欲望仍然是欲望。',
            '你可以保存，也可以分享给心中的那个人，更可以用来和谁沟通。也许过一段时间后，我还能再次看到你的到来，到时再跟我聊聊你的变化吧！',
          ],
          action: 'OK',
        },
      },
    },
    title: {
      connector: '的',
      defaultProfileName: '兔子',
      objectLabel: '秘密档案',
    },
  },
  ja: {
    about: {
      body: 'このうさぎは、いまの気持ち、境界線、伝えたいことを一冊のファイルに整えるお手伝いをします。これは対話の始まりで、誰かの代わりに決めるものではありません。',
      replayStory: '導入をもう一度',
      title: 'このうさぎについて',
    },
    assets: {
      homeRabbitAlt: '白いうさぎが手を振り、秘密ファイルのノートを抱えている。',
      settingsRabbitAlt: '白いうさぎが設定ボードを抱え、歯車の図柄がボードに入っている。',
    },
    brand: {
      restartStoryAria: (title) => `${title}：導入をもう一度始める`,
    },
    common: {
      backHome: 'ホームへ',
      planned: '準備中',
      ready: '使用可',
    },
    home: {
      copy: '今日もゆっくりで大丈夫。新しいファイルを作っても、前の続きからでも。自分の変化を見たり、この一部を誰かに渡したりしてもいい。',
      kicker: 'おかえり',
      navAria: '秘密ファイルの主な入口',
    },
    routes: {
      story: {
        label: '導入',
        summary: 'うさぎと一緒に、秘密ファイルの最初のやりとりへ。',
      },
      home: {
        label: 'ホーム',
        summary: 'これからの主な流れをまとめた入口。',
      },
      create: {
        label: '新しいファイル',
        summary: '新しいテストを始め、経験、興味、メモを整理します。',
      },
      files: {
        label: '古いファイル',
        summary: '保存したファイルを見たり、リンクから読み込んだりします。',
      },
      timeMachine: {
        label: 'タイムマシン',
        summary: '複数のファイルを比べ、境界線や気持ちの変化を見ます。',
      },
      about: {
        label: 'このうさぎについて',
        summary: '境界線と対話の出発点をどう整えるかを知る。',
      },
      settings: {
        label: '設定',
        summary: '言語、好み、この端末のデータ設定を調整します。',
      },
    },
    settings: {
      body: 'この設定はこの端末だけに残ります。',
      languageLabel: '守秘うさぎが使う言語',
      profileFieldLabel: '呼び名',
      profileLabel: 'なんて呼べばいい？',
      profilePlaceholder: 'うさぎ',
      profileSaved: '保存しました',
      saveProfile: '呼び名を保存',
      title: '設定',
    },
    story: {
      languageQuestion: '......?',
      nameFieldLabel: '呼び名',
      speakerName: 'どこからか来たうさぎ',
      steps: {
        'self-question': {
          lines: ['やあ！どんな風に吹かれて来たんだろう。', 'でも……自分のこと、わかってる？'],
          choices: [
            { label: 'わかってる', next: 'self-yes' },
            { label: 'わからない', next: 'self-no' },
            { label: '少し曖昧', next: 'self-unsure' },
          ],
        },
        'self-yes': {
          message: 'それはよかった。きっとこの先もすんなり進めるね。',
          action: '（ちょっと誇らしい）',
        },
        'self-no': {
          message: 'なら、もう少し自分を見つけるところまで、そばにいるよ。',
          action: '本当に？',
        },
        'self-unsure': {
          message: 'それはいい知らせだよ。未知を探る時間って、時々いちばん魅力的だから。',
          action: '私もそう思う',
        },
        'other-question': {
          lines: ['ところで……その人は、あなたをわかってる？'],
          choices: [
            { label: 'わかってる', next: 'other-yes' },
            { label: 'わかってない', next: 'other-no' },
            { label: 'その人って誰？', next: 'other-who' },
          ],
        },
        'other-yes': {
          message: 'じゃあ、ちょっとしたゲームの機会だね。その人が何点取れるか見てみよう。',
          action: '楽しそう！',
        },
        'other-no': {
          message: '大丈夫。いま、最初の一歩を踏み出せる機会があるよ。',
          action: '何をすればいい？',
        },
        'other-who': {
          message: 'その人？次のデート相手かもしれないし、パートナーかもしれない。あなたを知ってほしい誰か、でもいい。',
          action: 'わかった',
        },
        name: {
          lines: ['なんて呼べばいい？'],
          action: 'ファイルに書く',
        },
        file: {
          body: [
            'ここでは、BDSM の各項目について、あなたの好みや受け入れやすさを丁寧に記録します。正解はありません。あなたはあなたのまま、欲望は欲望のままです。',
            '保存しても、心にいるその人へ渡しても、誰かとの話し合いに使ってもいい。いつかまた来てくれたら、その時の変化も聞かせてね。',
          ],
          action: 'OK',
        },
      },
    },
    title: {
      connector: 'の',
      defaultProfileName: 'うさぎ',
      objectLabel: '秘密ファイル',
    },
  },
  en: {
    about: {
      body: 'This bunny helps you gather what you feel now, where your boundaries are, and what you want to say clearly. It is only a starting point for conversation, not a decision made for anyone.',
      replayStory: 'Replay intro',
      title: 'About This Bunny',
    },
    assets: {
      homeRabbitAlt: 'A white bunny waving while holding a secret file notebook.',
      settingsRabbitAlt: 'A white bunny holding a settings board with gear symbols on the board.',
    },
    brand: {
      restartStoryAria: (title) => `${title}: restart the intro story`,
    },
    common: {
      backHome: 'Home',
      planned: 'Planned',
      ready: 'Ready',
    },
    home: {
      copy: 'Take your time today. You can create a new file, continue from an old one, look at what has changed, or share this part of you with someone.',
      kicker: 'Welcome back',
      navAria: 'Main entrances for the secret file',
    },
    routes: {
      story: {
        label: 'Intro',
        summary: 'Let the bunny guide you into the first secret-file scene.',
      },
      home: {
        label: 'Home',
        summary: 'A starting point for the main flows still to come.',
      },
      create: {
        label: 'New File',
        summary: 'Start a new test and sort experience, interest, and notes.',
      },
      files: {
        label: 'Old Files',
        summary: 'Review local files, edit them, or open a cloud file by link.',
      },
      timeMachine: {
        label: 'Time Machine',
        summary: 'Compare files and see how boundaries and feelings move.',
      },
      about: {
        label: 'About This Bunny',
        summary: 'See how this project helps gather boundaries and conversation starters.',
      },
      settings: {
        label: 'Settings',
        summary: 'Adjust language, preferences, and local data options.',
      },
    },
    settings: {
      body: 'These settings stay on this device.',
      languageLabel: 'Language for the Bunny',
      profileFieldLabel: 'Name',
      profileLabel: 'What should I call you?',
      profilePlaceholder: 'Bunny',
      profileSaved: 'Saved',
      saveProfile: 'Save Name',
      title: 'Settings',
    },
    story: {
      languageQuestion: '......?',
      nameFieldLabel: 'Name',
      speakerName: 'A bunny from somewhere',
      steps: {
        'self-question': {
          lines: ['Hi! I wonder what wind carried you here.', 'But... do you know yourself?'],
          choices: [
            { label: 'I do', next: 'self-yes' },
            { label: "I don't", next: 'self-no' },
            { label: "I'm not sure", next: 'self-unsure' },
          ],
        },
        'self-yes': {
          message: 'Great. Then I think the next part will feel easy in your hands.',
          action: '(Proud)',
        },
        'self-no': {
          message: 'Then I think I can help you find yourself a little more clearly.',
          action: 'Really?',
        },
        'self-unsure': {
          message: 'That is wonderful news. The unknown can be the most charming place to explore.',
          action: 'I think so too',
        },
        'other-question': {
          lines: ['But... does that person know you?'],
          choices: [
            { label: 'They do', next: 'other-yes' },
            { label: "They don't", next: 'other-no' },
            { label: 'Who is that?', next: 'other-who' },
          ],
        },
        'other-yes': {
          message: 'Then this is a chance to play a little game. Let us see how many points they get.',
          action: 'That sounds cool!',
        },
        'other-no': {
          message: 'It is okay. There is a chance here to take the first step.',
          action: 'What should I do?',
        },
        'other-who': {
          message: 'That person? Maybe your next date, maybe your partner, or anyone you want to let closer to this part of you.',
          action: 'Got it',
        },
        name: {
          lines: ['What should I call you?'],
          action: 'Write it down',
        },
        file: {
          body: [
            'Here, we will carefully record your likes and comfort with different BDSM items. There are no right answers here. You are still you, and desire is still desire.',
            'You can save it, share it with someone in your heart, or use it to talk with someone. If you come back later, I would like to hear what has changed.',
          ],
          action: 'OK',
        },
      },
    },
    title: {
      connector: "'s ",
      defaultProfileName: 'Bunny',
      objectLabel: 'Secret File',
    },
  },
};

export function useI18n() {
  const locale = ref<AppLocale>(loadStoredLocale());
  const messages = computed(() => messagesByLocale[locale.value]);

  function setLocale(nextLocale: AppLocale): void {
    locale.value = nextLocale;
    saveStoredLocale(nextLocale);
  }

  watch(
    locale,
    (nextLocale) => {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = nextLocale;
      }
    },
    { immediate: true },
  );

  return {
    locale,
    localeOptions,
    messages,
    setLocale,
  };
}
