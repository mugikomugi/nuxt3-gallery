<script setup>
useHead({
  title: "Gsapについて | My Gallery Site",
  meta: [
    {
      name: "description",
      content: "gsapのコードです",
    },
  ],
});
//default以外のlayoutを使う
definePageMeta({
  layout: "code", //適用しない場合はfalse
});
</script>

<template>
  <main class="pageMain">
    <section class="container">
      <h2 class="pageTitle">GSAP CODE</h2>
      <div class="pageIntro">
        <p class="mb20">
          TOPページで適用したGSAP用コードです。スクロールトリガーのプラグインも使いました。<br />様々な動きによって専用プラグインも豊富に揃えられて、動作の仕組みに慣れるのに少し時間がかかりました。
        </p>
        <p class="mb20">
          組み合わせによって色々なバリエーションが組めるので、LPやプロモーションサイトだったらかなり重宝しそうです。
        </p>
      </div>

      <div class="gCode">
        <pre class="prettyprint linenums lang-js">
//js
const elements = document.querySelectorAll('.animeText');
elements.forEach((elem) =&gt; {
  const word = elem.textContent;
  //console.log('word', word);
  elem.innerHTML = '';

  //wordごとにspanで囲む
  word.split(' ').forEach(function (c) {
    elem.innerHTML += '&lt;span class="word"&gt;' + c + '&lt;/span&gt;';
  });

  //textごとにspanで囲む
  let words = elem.querySelectorAll(".word");
  words.forEach((word) =&gt; {
    const text = word.textContent;
    word.innerHTML = '';

    text.split('').forEach(function (c) {
      word.innerHTML += '&lt;span class="letter"&gt;' + c + '&lt;/span&gt;';
    });

    const letter = elem.querySelectorAll(".letter");

    gsap.set(letter, {
      y: 100,
      autoAlpha: 0
    });

  //textアニメーション
    gsap.to(letter, {
      y: 0,
      autoAlpha: 1,
      duration: 0.5,
      ease: 'power3.out',
      stagger: 0.03,
      scrollTrigger: {
        trigger: elem,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      }
    });
  });
});

//forEachうまく差し込めないので個別で
const boxShow = (box, trg) =&gt; {
  gsap.set(box, {
    y: 40,
    autoAlpha: 0
  });

  gsap.to(box, 1, {
    y: 0,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: trg,
      start: '20px',
      toggleActions: 'play none none',
    }
  });
}
boxShow('.eBox1', '#header');
boxShow('.eBox2', '#section1');
boxShow('.eBox3', '#section2');
boxShow('.eBox4', '#section3');
boxShow('.eBox5', '#section4');


//パララックス
/*これNuxt3でエラーになるので外した
let panels = gsap.utils.toArray(".panel");
panels.forEach((panel, i) =&gt; {
  ScrollTrigger.create({
    trigger: panel,
    start: () =&gt; panel.offsetHeight &lt; window.innerHeight ? "top top" : "bottom bottom",
    pin: true,
    pinSpacing: false,
    toggleActions: 'play none none reverse',
  });
});
*/
          </pre
        >
      </div>
      <!-- //.gCode -->
      <div class="linkBtn">
        <a href="/">TOP PAGE</a>
        <!-- <NuxtLink to="/">TOP PAGE</NuxtLink> -->
        <!-- NuxtLink toで飛ばすとjs効かない -->
      </div>
    </section>
    <!-- //.container -->
  </main>
</template>