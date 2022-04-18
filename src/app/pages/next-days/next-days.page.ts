import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination} from 'swiper';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-next-days',
  templateUrl: './next-days.page.html',
  styleUrls: ['./next-days.page.scss'],
})
export class NextDaysPage implements OnInit {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;
  
  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;

  //Configuration for each Slider

  slideOptsTwo = {
    initialSlide:1,
    slidesPerView:4,
    loop: true,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay: true,
  };
 
  
  constructor() { 
    this.sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 324,
          img: "assets/icons/sun/sun1.png",
        },
        {
          id: 321,
          img: "assets/icons/cloud/22.png"
        },
        {
          id: 435,
          img: "assets/icons/sun/27.png"
        },
        {
          id: 524,
          img: "assets/icons/sun/26.png"
        },
        {
          id: 523,
          img: "assets/icons/moon/moon3.png"
        },
        {
          id: 523,
          img: "assets/icons/sun/27.png"
        },
        {
          id: 523,
          img: "assets/icons/sun/sun1.png"
        },
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
