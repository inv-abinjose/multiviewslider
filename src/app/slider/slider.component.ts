import { Component,  OnInit } from '@angular/core';
import Swiper, { Thumbs,Navigation,
  Pagination,
  Scrollbar,
  A11y } from 'swiper';
//import SwiperCore from 'swiper/core';

import SwiperCore from "swiper/core";
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements  OnInit {

  constructor() {
    Swiper.use([Navigation, Pagination, Scrollbar, A11y,Thumbs]);
   }
 
windowflag:number;
screenwidth:number=window.innerWidth;
  ngOnInit(): void {
    
    var sliderSelector2 = '.swiper-container';
    var mySwiper2 = new Swiper(sliderSelector2, {
    init: false,
    loop: true,
    speed:800,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    })

    var galleryThumbs = new Swiper('.gallery-thumbs', {
      autoHeight: true, //enable auto height
  spaceBetween: 20,
  
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      
    });
    
  var sliderSelector = '.swiper-container';
  var mySwiper = new Swiper(sliderSelector, {
  init: false,
  loop: true,
  speed:800,
  slidesPerView: 2, // or 'auto'
  // spaceBetween: 10,
  centeredSlides : true,
  effect: 'coverflow', // 'cube', 'fade', 'coverflow',
  coverflowEffect: {
    rotate: 0, // Slide rotate in degrees
    stretch: 0, // Stretch space between slides (in px)
    depth: 100, // Depth offset in px (slides translate in Z axis)
    modifier: 1, // Effect multipler
    slideShadows : true,
     // Enables slides shadows
  },
  
  grabCursor: true,
  parallax: true,
  thumbs: {
    swiper: galleryThumbs
  }
  ,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1023: {
      slidesPerView: 2,
      spaceBetween: 0
    }
  },
  // Events
  
 
});

// Initialize slider
if(this.screenwidth>758)
{
mySwiper.init();
galleryThumbs.init();
   }
   else 
   {
    mySwiper2.init();
   }
   }
 
}
