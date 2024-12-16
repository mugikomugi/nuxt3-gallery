<script setup>
const error = useError();
definePageMeta({
  layout: "code",
});
</script>

<template>
  <main class="pageMain">
    <section class="container">
      <h1 class="pageTitle" v-if="error.statusCode === 404">404エラー！</h1>
      <h1 class="pageTitle" v-else>エラー</h1>
      <p>{{ error.message }}</p>
      <NuxtLink to="/">Home &gt; </NuxtLink>
    </section>
  </main>
</template>