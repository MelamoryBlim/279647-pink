var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var headerTop = document.querySelector('.page-header__top');
var pageHeader = document.querySelector('.page-header--index');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    headerTop.style.backgroundColor = '#283645';
    if(window.matchMedia('(max-width: 660px)').matches) {
      pageHeader.style.backgroundPosition = 'center center';
    }
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    headerTop.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    if(window.matchMedia('(max-width: 660px)').matches) {
      pageHeader.style.backgroundPosition = 'top center';
    }
  }
});
