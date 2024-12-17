// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  //gtagモジュール
  modules: ['nuxt-gtag'],
  gtag: {
    // 測定ID
    id: 'G-GR3NJR8VLS'
  },
  css: ["~/assets/css/reset.css",
    '~/assets/css/style.css'],
  app: {
    //共通head
    head: {
      htmlAttrs: {
        lang: "ja",
        prefix: "og: http://ogp.me/ns#",
      },
      charset: 'utf-8',
      title: "My Gallery Site",
      meta: [
        // <meta name="description" content="My amazing site.">
        { name: 'description', content: 'js・php開発用ポートフォリオサイト' },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#F9C732" },
        { property: "og:site_name", content: "My Gallery Site" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://okamechan.netlify.app/" },
        { property: "og:title", content: "My Gallery Site" },
        {
          property: "og:description",
          content: "js・php開発用ポートフォリオサイト",
        },
        { property: "og:image", content: "https://okamechan.netlify.app/og_image.jpg" },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com', crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400..700&family=Red+Rose:wght@400..700&display=swap'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],

      //jsはtsconfig.jsonに登録publicに格納
      // 読み込む箇所: 'head' | 'bodyClose' | 'bodyOpen'
      script: [

        { type: 'text/javascript', src: '/js/jquery-3.7.1.min.js', tagPosition: 'bodyClose' },
        { type: 'text/javascript', src: '/js/main.js', tagPosition: 'bodyClose' },
      ],
    }
  },
});
