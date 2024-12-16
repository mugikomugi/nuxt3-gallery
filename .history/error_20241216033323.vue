<script setup>
const error = useError();
import "@/assets/css/page.css";
</script>

<template>
  <div class="wrapper">
    <header class="pageHeader">
      <section class="container">
        <p class="pageRead"><a href="/">MY PORTFOLIO</a></p>
        <h1 class="h1Title"><a href="/">Gallery Nuxt.ver</a></h1>
        <h2 class="once__row">js・php開発用サイト</h2>
      </section>
    </header>
    <main class="pageMain">
      <section class="container errorP">
        <h1 class="pageTitle" v-if="error.statusCode === 404">404 ERROR</h1>
        <h1 class="pageTitle" v-else>ERROR</h1>
        <p class="errM">{{ error.message }}</p>

        <div class="linkBtn">
          <a href="/">Home</a>
        </div>
      </section>
    </main>
    <footer class="pageFooter">
      <section class="foterRow">
        <img src="~/assets/image/logo-or.svg" alt="" />
        <h3 class="footerTitle">Gallery Nuxt.ver</h3>
      </section>
      <figure class="footer__img">
        <img src="~/assets/image/footer.jpg" alt="" />
        <figcaption>Illustrated by mugikomugi</figcaption>
      </figure>
      <ul class="snsLink">
        <li>
          <a
            href="https://github.com/mugikomugi?tab=repositories"
            target="_blank"
            rel="noopener"
            ><img src="~/assets/image/git.svg" alt="Git Hub"
          /></a>
        </li>
        <li>
          <a
            href="https://qiita.com/kanrek_jyosi/items/ffbeab1ce30da87832ab"
            target="_blank"
            rel="noopener"
            ><img src="~/assets/image/qiita.svg" alt="Qiita"
          /></a>
        </li>
      </ul>
      <div class="copy">
        <small
          >Copyright 2024 mugikomugi All Rights Reserved. 無断転載禁止</small
        >
      </div>
    </footer>
  </div>
</template>

<style scoped>
.errM {
  font-size: 2rem;
  text-align: center;
  padding-bottom: 10px;
}

.errorP {
  margin-bottom: 50px;
}
</style>