console.log('sss')

import Swiper from 'swiper/swiper-bundle'
export let swiperBrends;
export let swiperTechnique;
export let swiperServices;
let clientWidth = document.body.clientWidth;
if (clientWidth < 768) {
   swiperBrends = new Swiper('.brends-slider', {
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      slidesPerView: 1.4,
      spaceBetween: 17,
   })
   swiperTechnique = new Swiper('.technique-slider', {
    pagination: {
       el: '.swiper-pagination',
       clickable: true,
    },
    slidesPerView: 1.4,
    spaceBetween: 17,
 })
  swiperServices = new Swiper('.services-slider', {
  pagination: {
     el: '.swiper-pagination',
     clickable: true,
  },
  slidesPerView: 1.2,
  spaceBetween: 17,
})
}
let hiddenElementBrends = document.querySelectorAll('.brends-slider__slide--hidden');
let buttonOpenBrends = document.querySelector('.brends-slider__button');

for (let i = 0; i < hiddenElementBrends.length; i++) {
  buttonOpenBrends.addEventListener('click', function () {
    hiddenElementBrends[i].classList.toggle('swiper-slide--show')
      if (buttonOpenBrends.textContent === 'Показать все') {
        buttonOpenBrends.textContent = 'Скрыть'
        buttonOpenBrends.style.backgroundImage = 'url(./img/main/arrow-blue-top.svg)'
        console.log('sss')
      } else {
        buttonOpenBrends.textContent = 'Показать все'
        buttonOpenBrends.style.backgroundImage = 'url(./img/main/arrow-blue-bottom.svg)'
      }
   });
}

let hiddenElementTechnique= document.querySelectorAll('.technique-slider__slide--hidden');
let buttonOpenTechnique = document.querySelector('.technique-slider__button');

for (let i = 0; i < hiddenElementTechnique.length; i++) {
  buttonOpenTechnique.addEventListener('click', function () {
    hiddenElementTechnique[i].classList.toggle('swiper-slide--show')
      
   });
}
buttonOpenTechnique.addEventListener('click', function () {
  if (buttonOpenTechnique.textContent === 'Показать все') {
    buttonOpenTechnique.textContent = 'Скрыть'
    buttonOpenTechnique.style.backgroundImage = 'url(./img/main/arrow-blue-top.svg)'
  } else {
    buttonOpenTechnique.textContent = 'Показать все'
    buttonOpenTechnique.style.backgroundImage = 'url(./img/main/arrow-blue-bottom.svg)'
  }
 });
