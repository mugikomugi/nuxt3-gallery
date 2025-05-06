// クライアントサイドでのみ実行されるスクリプト
export default defineNuxtPlugin((nuxtApp) => {
  // onMountedを使用してクライアントサイドでのみ実行されるようにする
  nuxtApp.hook('app:mounted', () => {
    // jQueryの読み込み
    import('/public/js/jquery-3.7.1.min.js')
      .then(() => {
        // jQuery読み込み後にmain.jsを読み込む
        import('/public/js/main.js')
          .catch(err => console.error('Failed to load main.js:', err))
      })
      .catch(err => console.error('Failed to load jQuery:', err))
  })
})