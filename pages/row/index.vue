<script setup>
useHead({
  title: "row index | My Gallery Site",
  meta: [
    {
      name: "description",
      content: "row階層のindex",
    },
  ],
});
</script>

<template>
  <div>
    <h3 class="rowTitle">row index</h3>
    <div class="pageIntro">
      <p class="center">
        ここはrow階層のindex、<br />子要素にindexファイル作ると親のrowファイルではなく子要素のindexが適用されるようです。<br />親のrowファイルは同名ディレクトリ以下の共通パーツに
      </p>
    </div>
  </div>
</template>