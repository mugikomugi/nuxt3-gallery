// JavaScript Document
$(function () {
  const navSp = $('#navSp');
  let menuW, iconTop;
  if (window.matchMedia('(min-width: 768px)').matches) {
    menuW = '-64vw';
    iconTop = '80px';
  } else {
    menuW = '-320px';
    iconTop = '60px';
  }

  //MENU
  $('#menuBtn').on('click', function () {
    navSp.stop().animate({ 'right': 0 }, 500);
  });
  $('#closeBtn').on('click', function () {
    navSp.stop().animate({ 'right': menuW }, 500);
  });

  //TOPへ
  const toTop = $('#toTop');
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      toTop.stop().animate({ 'bottom': iconTop }, 500);
    } else {
      toTop.stop().animate({ 'bottom': '-100px' }, 500);
    }
  });

  toTop.on('click', function () {
    $('body,html').stop().animate({ scrollTop: 0 }, 500);
    $('.mark li:first-child').addClass('act').siblings().removeClass('act');
  });

  //loader
  $('.loader').delay(900).fadeOut(800, function () {
    $(this).remove();
  });


  //side MENU
  let act, position;
  $('.mark li').on('click', function () {
    act = $(this).attr('data-id');
    position = $('#' + act).offset().top;
    $('body,html').animate({ scrollTop: position }, 500);
    //$(this).addClass('act').siblings('li').removeClass('act');
    //クリックしたら閉じる仕様
    //navSp.stop().animate({ 'right': menuW }, 500);
  });

});
