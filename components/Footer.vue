<template>
  <footer class="footer panel" id="footer">
    <section class="foterInner eBox6">
      <img src="~/assets/image/logo-or.svg" alt="" />
      <h3 class="footerTitle">Gallery Nuxt.ver</h3>
      <p class="footerSub">Afterword</p>
      <!-- <p class="myName">mugikomugi</p> -->
      <p class="footerText">
        サイトデザインをするにはプログラミングやデータベースの知識も必要と感じ、スクリプト言語も勉強中。<br />今回、Nuxt、Git、Netlifyを使ってサイトを公開するのは初めての試みでした。特にバックエンドでは躓くことが多く、いつも悩まされています。たいしたことのない単純なサイトでも一般公開できると苦労したぶん感動もひとしおです。
      </p>
      <p class="footerText mt20">
        追記：<br />
        開発初期の最初の読み込み時にJSが動かない時があり、デベロッパーツールを見るとハイドレーションエラーが出ていました。<br />
        再度、読み込みをするとエラーは出なくなりJSは正常に動いていました。<br />このエラーについて解決したのでメモっておきます。claudeを使いました。<br />やはりPromiseチェーンを使って読込み制御が必要だったようです。最初はnuxt.config.tsにscriptでbodyCloseを指定していたのですが、これはNuxt3から廃止されていたようです。知らなかった。。<br />自作jsはcomponentsにuseHeadを使わずonMountedで読み込ませました。claude先生、助かりました。
      </p>
    </section>
    
    <figure class="footerImg">
      <img class="tank" src="~/assets/image/footer.jpg" alt="" />
      <img class="pom" src="~/assets/image/pom.png" alt="" />
      <img class="bullet" src="~/assets/image/bullet.svg" alt="" />
    </figure>
    <p class="fCaption">Illustrated by mugikomugi</p>
    
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
          href="https://qiita.com/kanrek_jyosi/items/90b4201eaa1b8b94a6d1"
          target="_blank"
          rel="noopener"
          ><img src="~/assets/image/qiita.svg" alt="Qiita"
        /></a>
      </li>
      <li>
        <a
          href="https://zenn.dev/okamechan/articles/5857c21c0b9d21"
          target="_blank"
          rel="noopener"
          ><img src="~/assets/image/zenn.svg" alt="zenn"
        /></a>
      </li>
    </ul>
    <div class="copy">
      <small>Copyright 2024 mugikomugi All Rights Reserved. 無断転載禁止</small>
    </div>
  </footer>
</template>
