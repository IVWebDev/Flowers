//header burger

let headerBurger = document.querySelector('.header-burger');
let headerNav = document.querySelector('.header-nav');
let back = document.querySelector('body');
let headerLinks = document.querySelector('.header-links');

headerBurger.onclick = function () {
   headerBurger.classList.toggle('active');
   headerNav.classList.toggle('active');
   back.classList.toggle('lock');
}
headerLinks.onclick = function () {
   back.classList.toggle('lock');
   headerBurger.classList.toggle('active');
   headerNav.classList.toggle('active');
}
// Swiper slider
var swiper = new Swiper('.first-block-slider', {
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
   },
});
var swiper = new Swiper('.dekstop-catalog-slider', {
   slidesPerView: 1,
   spaceBetween: 20,
   freeMode: true,
   scrollbar: {
      el: '.swiper-scrollbar'
   },
   breakpoints: {
      437: {
         slidesPerView: 2,
         spaceBetween: 30,
      },
      767: {
         slidesPerView: 3,
         spaceBetween: 30,
      }
   }
});

