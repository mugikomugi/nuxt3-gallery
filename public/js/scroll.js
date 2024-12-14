$(function () {
  //
  const header = $('#header').offset().top;
  const section1 = $('#section1').offset().top;
  const section2 = $('#section2').offset().top;
  const section3 = $('#section3').offset().top;
  const section4 = $('#section4').offset().top;
  const footer = $('#footer').offset().top;

  $(window).on('scroll', function () {
    let actPoint = $(this).scrollTop();
    if (header < actPoint + 50) {
      arrival($('.mark li[data-id="header"]'));
    }
    if (section1 < actPoint + 50) {
      arrival($('.mark li[data-id="section1"]'));
    }
    if (section2 < actPoint + 50) {
      arrival($('.mark li[data-id="section2"]'));
    }
    if (section3 < actPoint + 50) {
      arrival($('.mark li[data-id="section3"]'));
    }
    if (section4 < actPoint + 50) {
      arrival($('.mark li[data-id="section4"]'));
    }
    if (footer < actPoint + 50) {
      arrival($('.mark li[data-id="footer"]'));
    }

  });
  const arrival = (mark) => {
    mark.addClass('act').siblings().removeClass('act');
  }
});