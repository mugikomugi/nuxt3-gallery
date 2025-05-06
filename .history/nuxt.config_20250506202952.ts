// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/style.css'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#',
      },
      charset: 'utf-8',
      title: 'My Gallery Site',
      meta: [
        { name: 'description', content: 'js・php開発用ポートフォリオサイト' },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#F9C732" },
        { property: "og:site_name", content: "My Gallery Site" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://okamechan.netlify.app/" },
        { property: "og:title", content: "My Gallery Site" },
        { property: "og:description", content: "js・php開発用ポートフォリオサイト" },
        { property: "og:image", content: "https://okamechan.netlify.app/og_image.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400..700&family=Red+Rose:wght@400..700&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      // Nuxt3ではscriptタグの使い方が変わりました
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-GR3NJR8VLS',
          async: true
        },
        {
          children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GR3NJR8VLS');
          `,
          type: 'text/javascript',
        },
      ]
    },
  }
});