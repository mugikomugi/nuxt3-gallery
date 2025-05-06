<script setup lang=ts>
useHead({
  script: [
    {
      type: "text/javascript",
      src: "/js/prettify.js",
      tagPosition: "bodyClose",
    },
    { type: "text/javascript", src: "/js/code.js", tagPosition: "bodyClose" },
  ],
});
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