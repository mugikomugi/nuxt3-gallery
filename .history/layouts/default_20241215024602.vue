<script setup lang=ts>
useHead({
  script: [
    { type: "text/javascript", src: "/js/scroll.js", tagPosition: "bodyClose" },
    { type: "text/javascript", src: "/js/gsap.js", tagPosition: "bodyClose" },
    {
      type: "text/javascript",
      src: "/js/ScrollTrigger.js",
      tagPosition: "bodyClose",
    },
    { type: "text/javascript", src: "/js/effect.js", tagPosition: "bodyClose" },
  ],
});
</script>
<template>
  <div class="wrapper">
    <div class="loader"></div>
    <header class="header panel" id="header">
      <div class="topImg">
        <div class="toolTop">
          <dl class="tool">
            <dt>Illustration Tool</dt>
            <dd>Illustrator</dd>
          </dl>
        </div>
        <section class="container">
          <div class="read animeText">MY-PORTFOLIO</div>
          <h1 class="h1Title animeText">Gallery-Nuxt3.ver</h1>
          <h2 class="once animeText">js・php開発用サイト</h2>

          <div class="leftArea eBox1">
            <div class="detailbBox">
              <p class="mb20">
                マイギャラリーサイトに訪問していただき有り難うございます。
              </p>
              <p class="mb20">
                こちらはPHP、js、フレームワーク等の開発用サイトとして立ち上げました。デザインからコーディングまでフルスクラッチで組み立てています。
              </p>
              <p>
                最近、個人的にVue.jsに興味があり時間を見ては触っています。<br />その延長でNuxt3を使ってみることにしました。<br />コマンドラインを走らせながらの作業は慣れてない上、コンポーネント、レイアウトの構成、データの置き場所など扱い方が独特で手探りでの製作です。
              </p>
            </div>
            <div class="subBox">
              <h3 class="explan">製作環境</h3>
              <div class="column2">
                <ul>
                  <li>Nuxt.js 3.14</li>
                  <li>Node.js 22.11.0</li>
                  <li>GSAP 3.12.5</li>
                  <li class="mb20">jQuery 3.7.1.</li>
                  <li>Netfliy</li>
                </ul>
                <ul>
                  <li>Figma</li>
                  <li>Illustrator</li>
                  <li>Photo shop</li>
                  <li>CLIP PAINT SUTADIO</li>
                  <li>Painter</li>
                  <li>Visual Studio Code</li>
                </ul>
              </div>
            </div>
            <p class="update">更新日 2024年12月15日</p>
          </div>
        </section>
      </div>
      <!-- //.header panel -->
    </header>
    <div class="menuBtn" id="menuBtn">
      <img src="~/assets/image/menu.svg" alt="MENUボタン" />
    </div>

    <NavBar />
    <slot />
    <!-- レイアウトを利用する場合はlayouts ディレクトリを作成して default.vue ファイルを作成。pagesに書き出す場合<slot />は必須 -->
    <Footer />
    <SpNav />

    <div class="toTop" id="toTop">
      <img src="~/assets/image/to-top.svg" alt="TOPへ" />
    </div>
  </div>
</template>
