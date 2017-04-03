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
    pageHeader.classList.remove('page-header--bg-top');
    pageHeader.classList.add('page-header--bg-center');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    headerTop.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    pageHeader.classList.add('page-header--bg-top');
    pageHeader.classList.remove('page-header--bg-center');
  }
});
