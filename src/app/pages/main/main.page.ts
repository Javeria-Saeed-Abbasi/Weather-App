import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination} from 'swiper';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;
  
  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;

  //Configuration for each Slider

  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 4,
    loop: true,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay: true,
  };
 

  constructor() {
  //Item object for Food
  this.sliderTwo =
  {
    isBeginningSlide: true,
    isEndSlide: false,
    slidesItems: [
      {
        id: 324
      },
      {
        id: 321
      },
      {
        id: 435
      },
      {
        id: 524
      },
      {
        id: 235
      }
    ]
  };
   }
 //Move to Next slide
 slideNext(object, slideView) {
  slideView.slideNext(1000).then(() => {
    this.checkIfNavDisabled(object, slideView);
  });
}

//Move to previous slide
slidePrev(object, slideView) {
  slideView.slidePrev(1000).then(() => {
    this.checkIfNavDisabled(object, slideView);
  });;
}

//Method called when slide is changed by drag or navigation
SlideDidChange(object, slideView) {
  this.checkIfNavDisabled(object, slideView);
}

//Call methods to check if slide is first or last to enable disbale navigation  
checkIfNavDisabled(object, slideView) {
  this.checkisBeginning(object, slideView);
  this.checkisEnd(object, slideView);
}

checkisBeginning(object, slideView) {
  slideView.isBeginning().then((istrue) => {
    object.isBeginningSlide = istrue;
  });
}
checkisEnd(object, slideView) {
  slideView.isEnd().then((istrue) => {
    object.isEndSlide = istrue;
  });
}
  ngOnInit() {
    
  }

}
