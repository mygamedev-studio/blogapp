import { Locale } from "./i18n-config";

export const getDictionary = (locale: Locale) => {
  const dictionary = {
    ko: {
      hero: {
        title1: "초보 개발자의",
        title2: "게임 개발 성장일지",
        title3: "(feat. Flame Engine)",
        desc1: "게임 개발 무경험자가 Flutter의 Flame Engine으로",
        desc2: "게임을 완성하는 과정을 기록합니다.",
        button1: "🔥Flame Engine을 이용한",
        button2: "DevLog시리즈 시작하기",
      },
      recentUpdate: "Recent Update",
      sideContents: {
        title: "✨ Side Contents:",
        subtitle: "DB필요없는 정적 블로그 만들기 (feat. NextJS)",
        desc: "지금 보고 계신 정적 블로그를 만드는 과정과 코드를 함께 공유합니다.",
      },
      more: "더보기",
      footer: {
        contact: "Contact Me!",
        rights: "My Game Dev Blog. All rights reserved.",
        feedback: "Please give me Feedback or questions on X.",
      },
    },
    en: {
      hero: {
        title1: "Beginner Developer's",
        title2: "Game Dev Growth Log",
        title3: "(feat. Flame Engine)",
        desc1: "Recording the process of completing a game",
        desc2: "with Flutter's Flame Engine as a game dev novice.",
        button1: "Start DevLog Series",
        button2: "with 🔥Flame Engine",
      },
      recentUpdate: "Recent Update",
      sideContents: {
        title: "✨ Side Contents:",
        subtitle: "Static Blog without DB (feat. NextJS)",
        desc: "Sharing the process and code of building this static blog.",
      },
      more: "More",
      footer: {
        contact: "Contact Me!",
        rights: "My Game Dev Blog. All rights reserved.",
        feedback: "Please give me Feedback or questions on X.",
      },
    },
    ja: {
      hero: {
        title1: "初心者開発者の",
        title2: "ゲーム開発成長日記",
        title3: "(feat. Flame Engine)",
        desc1: "ゲーム開発未経験者がFlutterのFlame Engineで",
        desc2: "ゲームを完成させる過程を記録します。",
        button1: "🔥Flame Engineを使った",
        button2: "DevLogシリーズを始める",
      },
      recentUpdate: "Recent Update",
      sideContents: {
        title: "✨ Side Contents:",
        subtitle: "DB不要の静的ブログ作成 (feat. NextJS)",
        desc: "今ご覧の静的ブログを作る過程とコードを共有します。",
      },
      more: "もっと見る",
      footer: {
        contact: "Contact Me!",
        rights: "My Game Dev Blog. All rights reserved.",
        feedback: "Please give me Feedback or questions on X.",
      },
    },
  };
  return dictionary[locale];
};
