<script setup>
definePageMeta({
  layout: "code", //適用しない場合はfalse
});
</script>

<template>
  <main class="pageMain">
    <section class="container">
      <h2 class="pageTitle">ROOT TEST</h2>
      <div class="parent">
        <p>親要素のrowファイル<br />ここはrow共通部分</p>
      </div>
      <NuxtPage />
    </section>
  </main>
</template>