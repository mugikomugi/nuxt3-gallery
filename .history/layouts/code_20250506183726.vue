<script setup lang=ts>
//ここもuseHead使わずonMountedに
// クライアントサイドでのみスクリプトを読み込む
onMounted(() => {
  const loadScript = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      // 既に読み込まれているスクリプトを確認
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve();
      script.onerror = (e) =>
        reject(new Error(`スクリプト読み込みエラー: ${src}`));
      document.body.appendChild(script);
    });
  };

  // スクリプトを順番に読み込む
  Promise.resolve()
    .then(() => loadScript("/js/prettify.js"))
    .then(() => loadScript("/js/code.js"))
    .catch((err) => {
      console.error("スクリプト読み込みエラー:", err);
      // 必要に応じてユーザーにエラーを通知することも検討
    });
});

// CSSインポートはスクリプトの先頭に配置するのがベストプラクティス
import "@/assets/css/prettify.css";
import "@/assets/css/sunburst.css";
import "@/assets/css/page.css";
</script>

<template>
  <div class="wrapper">
    <div class="loader"></div>
    <PageHeader />
    <slot />
    <TestNav />
    <PageFooter />
    <div class="toTop" id="toTop">
      <img src="~/assets/image/to-top.svg" alt="TOPへ" />
    </div>
  </div>
</template>