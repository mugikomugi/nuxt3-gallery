//gsap anime
const elements = document.querySelectorAll('.animeText');
elements.forEach((elem) => {
  const word = elem.textContent;
  //console.log('word', word);
  elem.innerHTML = '';

  // wordごとにspanで囲む
  word.split(' ').forEach(function (c) {
    elem.innerHTML += '<span class="word">' + c + '</span>';
  });

  // textごとにspanで囲む
  let words = elem.querySelectorAll(".word");
  words.forEach((word) => {
    const text = word.textContent;
    word.innerHTML = '';

    text.split('').forEach(function (c) {
      word.innerHTML += '<span class="letter">' + c + '</span>';
    });

    const letter = elem.querySelectorAll(".letter");

    gsap.set(letter, {
      y: 100,
      autoAlpha: 0
    });

    gsap.to(letter, 1, {
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
const boxShow = (box, trg) => {
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
//boxShow('.eBox6', '#footer');


//パララックス
/*これNuxt3でエラーになる
let panels = gsap.utils.toArray(".panel");
panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
    pin: true,
    pinSpacing: false,
    toggleActions: 'play none none reverse',
  });
});
*/
