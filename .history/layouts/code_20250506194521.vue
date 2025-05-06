<script setup lang=ts>
import "@/assets/css/prettify.css";
import "@/assets/css/sunburst.css";
import "@/assets/css/page.css";

// クライアントサイドでのみスクリプトを読み込む
onMounted(() => {
  // クライアントサイドでのみ実行
  const loadScript = (src: string) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
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