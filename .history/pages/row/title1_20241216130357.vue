<script setup>
useHead({
  title: "title1 | My Gallery Site",
  meta: [
    {
      name: "description",
      content: "ルートのテスト",
    },
  ],
});

//vueも使えるように
import { ref } from "vue";
const itemLi = [
  { num: "1", text: "タイトル1" },
  { num: "2", text: "タイトル2" },
  { num: "3", text: "タイトル3" },
];

const items = ref(itemLi);
const name1 = ref("v-forの書出し");
</script>

<template>
  <div>
    <h3 class="rowTitle">title1</h3>
    <div class="pageIntro">
      <p class="mb20">HOME / row / title1</p>
      <p class="center">ここはrow階層のtitle1<br />Git hub更新テスト</p>
    </div>

    <h3 class="rowTitle">{{ name1 }}</h3>
    <p class="mt20">
      VueでできているならVueも使えるはずだと思い、差し込んでみました。<br />連想配列のループ書き出しは便利です。scriptの中にref関数で呼び出せました。
    </p>
    <ul class="vTest">
      <li v-for="item in items" :key="item">
        <p>numの番号は {{ item.num }}、textは {{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>