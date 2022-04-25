import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination} from 'swiper';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;
const latitude = environment.lat;
const longitude = environment.lon;

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
//Open Weather API var
  weatherTemp: any;
  todayDate = new Date();
  locationName: "";
  weatherIcon1: any;
  weatherDetails: any;
  weatherDescp: any;
  weatherSpeed: any;
  speed: any;
  weatherPercip: any;
  percipit: any;
  today = new Date();
  name = "";
  loading =  true;
  //Configuration for each Slider

  slideOptsTwo = {
    initialSlide:1,
    slidesPerView:4,
    loop: true,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay: true,
  };
 
  constructor(public httpClient:HttpClient) {
    //Open Weather API
    // this.loadData();
    this.startTime();
    
  //Item object for Food
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
     //Open Weather API
   loadData(){
     this.httpClient.get(`${API_URL}/weather?q=${this.locationName}&appid=${API_KEY}`).subscribe(results =>{
      console.log(results);
      this.weatherTemp = results['main'],
      // this.locationName = results['name'],
      this.name = results['name'],
      this.weatherSpeed = results['wind'],
      this.weatherDetails = results['weather'][0],
      this.weatherIcon1 = `assets/icons/sun/27.png`,
      this.weatherDescp = `${this.weatherDetails.description}`,
      this.speed = `${this.weatherSpeed.speed}`
      this.weatherPercip = results['precipitation'],
      
      console.log(this.locationName);
      console.log(this.weatherTemp);
      console.log(this.weatherDetails);
      console.log(this.weatherIcon1);
      console.log(this.weatherDescp);
      console.log(this.weatherSpeed);
      console.log(this.speed);
      console.log(this.weatherPercip);
      this.loading = false;
     })

   }
   startTime() {
    var intervalVar = setInterval(function () {
      this.today = new Date().toISOString();
    }.bind(this),500)};
 
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
