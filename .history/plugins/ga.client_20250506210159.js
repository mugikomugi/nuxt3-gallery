// plugins/ga.client.js
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  // Google Analyticsは必ずクライアントサイドでのみ実行されるようにする
  if (process.client) {
    // GA4の測定IDを環境変数から取得
    const gaMeasurementId = config.public.gaMeasurementId

    // Google Analyticsのスクリプトをページに追加
    function addGoogleAnalytics() {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', gaMeasurementId)
      window.gtag = gtag
    }

    // GAスクリプトの読み込み
    addGoogleAnalytics()

    // ページ遷移時にページビューを送信
    nuxtApp.hook('page:finish', () => {
      if (window.gtag) {
        window.gtag('config', gaMeasurementId, {
          page_path: window.location.pathname + window.location.search
        })
      }
    })
  }
});