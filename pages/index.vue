<template>
  <main class="main">
    <div class="area1 areaBox panel" id="section1">
      <div class="areaRow">
        <section class="container">
          <p class="readTitle animeText">Section01</p>
          <h2 class="areaTitle animeText">Introduction</h2>
          <div class="areaWrap eBox2">
            <div class="leftArea">
              <div class="detailbBox">
                <p class="mb20">
                  最初はNuxt2を触っていたのですが、新しい方が良さげに思えてNuxt3で構築することにしました。<br />Nuxt2から3にアップグレードするには単に上書きすれば出来るかなと思っていたら2と3では大違いでした。<br />2ではディレクトリはセットで揃っていたのですが、3は自分で必要なものは作らないとないけなくて、名前の法則やデータの役割、パスも決まっています。しかも設定ファイルはTypeScript。tsは初めて触りました。
                </p>
              </div>
              <div class="subBox">
                <h3 class="explan">素材について</h3>
                <p class="mb20">
                  イラストは全てオリジナルで自作しています。<br />ただ、プライベートではあまり描いていません。一年に一枚くらいでしょうか。
                </p>
                <p>
                  仕事ではサイトのファーストビューや
                  商品の説明図、ちょっとしたイラストなど製作しています。
                </p>
              </div>
            </div>

            <div class="rightArea">
              <img src="~/assets/image/main02.jpg" alt="" />
              <div class="toolWrap">
                <dl class="tool">
                  <dt>Illustration Tool</dt>
                  <dd>Photoshop・ Illustrator ・CLIP PAINT STADIO</dd>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- //.areaRow -->
    </div>
    <!-- //.area1 -->

    <div class="area2 areaBox panel" id="section2">
      <div class="areaRow">
        <section class="container">
          <p class="readTitle animeText">Section02</p>
          <h2 class="areaTitle animeText">About-the-GSAP</h2>
          <div class="areaWrap eBox3">
            <div class="leftArea">
              <div class="detailbBox">
                <p class="mb20">
                  Nuxtを調べていた時、GSAPというライブラリを見つけました。jQueryでは複雑になりがちなプログラムも簡潔にできそうな作りです。
                </p>
                <p class="mb20">
                  ライブラリを二重に読み込むのには抵抗があったので、要素はDOMで取得することにしました。jQueryも読み込ませていますがGSAPとは別にしています。
                </p>
                <p class="mb20">
                  初めて使ってみたので、自分用のチートシートとしてコードを下層ページにアップしておきます。また、Nuxt3でのpagesやコンポーネントのテストも試しています。
                </p>
                <!-- <a class="outLink" href="https://gsap.com" target="_blank" rel="noopener">GSAP公式サイト</a> -->
              </div>
              <div class="linkBtn">
                <a href="/gsapcode">GSAP CODE</a>
                <!-- <NuxtLink to="/gsapcode">GSAP CODE</NuxtLink> -->
              </div>
            </div>

            <div class="rightArea">
              <img src="~/assets/image/main03.jpg" alt="" />
              <div class="toolWrap">
                <dl class="tool">
                  <dt>Illustration Tool</dt>
                  <dd>Photoshop・CLIP PAINT STADIO</dd>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- //.areaRow -->
    </div>
    <!-- //.area2 -->

    <div class="area3 areaBox panel" id="section3">
      <div class="areaRow">
        <section class="container">
          <p class="readTitle animeText">Section03</p>
          <h2 class="areaTitle animeText">Development</h2>
          <div class="areaWrap eBox4">
            <div class="leftArea">
              <div class="detailbBox">
                <p class="mb20">
                  jsだけでなくPHPもわからないと色々不便に感じることが多くなりました。<br />今は配列、関数と仮引数、ループや条件分岐がようやく組めるようになってきたというところです。<br />Laravelもいつかは使えるようになりたいと思っていますが、その前にオブジェクトの使い方もマスターしなければと課題は山積みです。カプセル化してプラグインも作成してみたいです。
                </p>
                <p>
                  少しづつですがシステム開発も進めてますので、リンクを貼りました。
                </p>
              </div>
              <div class="subBox">
                <h3 class="explan">GitHub</h3>
                <ul class="dvlink">
                  <li>
                    <a
                      href="https://github.com/mugikomugi/calender"
                      target="_blank"
                      rel="noopener"
                      >カレンダーシフト表</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://github.com/mugikomugi/password_creat"
                      target="_blank"
                      rel="noopener"
                      >パスワードランダム生成</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://spica.okamechan.com/avatar/"
                      target="_blank"
                      rel="noopener"
                      >インコアバター生成システム</a
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="rightArea">
              <img src="~/assets/image/main04.jpg" alt="" />
              <div class="toolWrap">
                <dl class="tool">
                  <dt>Illustration Tool</dt>
                  <dd>Photoshop・ Illustrator ・CLIP PAINT STADIO</dd>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- //.areaRow -->
    </div>
    <!-- //.area3 -->

    <div class="area4 areaBox panel" id="section4">
      <div class="areaRow">
        <section class="container">
          <p class="readTitle animeText">Section04</p>
          <h2 class="areaTitle animeText">Server-used</h2>
          <div class="areaWrap eBox5">
            <div class="leftArea">
              <div class="detailbBox">
                <p class="mb20">
                  一般のレンタルサーバはNode.jsを入れられないので、別にVPSを契約するか、諦めてビルドしてサーバUPしようかと迷っていたところ、Netlifyというホスティングサービスを知りました。
                </p>
                <p class="mb20">
                  GitHubからの連携でNetlifyでデプロイ。GitHubに上げるにはデータが重たかったのでコマンドラインからのssh接続。Gitのインストールからのスタートでした。<br />しかもローカルではjsちゃんと動いていたのにサーバに移したら呪文のようなエラー表示。はっきり言ってNuxtよりもサーバ公開する方が大変でした。
                </p>

                <a
                  class="outLink"
                  href="https://www.netlify.com/"
                  target="_blank"
                  rel="noopener"
                  >Netlify</a
                >
              </div>
            </div>

            <div class="rightArea">
              <img src="~/assets/image/main05.jpg" alt="" />
              <div class="toolWrap">
                <dl class="tool">
                  <dt>Illustration Tool</dt>
                  <dd>Photoshop・CLIP PAINT STADIO</dd>
                </dl>
              </div>
            </div>
            <!-- //.rightArea -->
          </div>
        </section>
      </div>
      <!-- //.areaRow -->
    </div>
    <!-- //.area4 -->
  </main>
</template>
