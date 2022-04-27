import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;
//Open Weather 7days One CAll API var
const lat = environment.lat;
const lon = environment.lon;
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
  //Open Weather CURRENT API var
  weatherTemp: any;
  todayDate = new Date();
  locationName: any;
  weatherIcon1: any;
  weatherDetails: any;
  weatherDescp: any;
  weatherSpeed: any;
  speed: any;
  weatherPercip: any;
  percipit: any;
  currentDate = new Date();
  currentDay = new Date();
  //Open Weather 7days One CAll API var
  weatherTemp2: any;
  day0: any;
  day1: any;
  day2: any;
  day3: any;
  day4: any;
  day5: any;
  day6: any;
  day7: any;
  day0_temp: any;
  day1_temp: any;
  day2_temp: any;
  day3_temp: any;
  day4_temp: any;
  day5_temp: any;
  day6_temp: any;
  day7_temp: any;
  feel_like: any;
  //Configuration for each Slider




  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 4,
    loop: true,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay: false,
  };


  constructor(public httpClient: HttpClient) {

    //Open Weather Current API
    this.loadData();
    //Open Weather One Call API
    this.getWeatherData();
  }

  //Open Weather API
  loadData() {
    this.httpClient.get(`${API_URL}/weather?q=${"Karachi"}&appid=${API_KEY}`).subscribe(results => {
      console.log(results);
      this.weatherTemp = results['main'],
        this.locationName = results['name'],
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
    })

  }
  //Open Weather 7days One CAll API var
  getWeatherData() {
    this.httpClient.get(`${API_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutley,hourly,alerts&appid=${API_KEY}`).subscribe(res => {
      console.log(res);
      this.weatherTemp2 = res['daily'],
        this.feel_like = this.weatherTemp2[0].feels_like.day;
      console.log(this.weatherTemp2);
      this.day0 = this.weatherTemp2[0];
      this.day0_temp = "Day 0 :" + this.weatherTemp2[0].temp.day;
      this.day1 = this.weatherTemp2[1].dt;
      this.day1_temp = "Day 1 :" + this.weatherTemp2[1].temp.day;
      this.day2 = this.weatherTemp2[2].dt;
      this.day2_temp = "Day 2 :" + this.weatherTemp2[2].temp.day;
      this.day3 = this.weatherTemp2[3].dt;
      this.day3_temp = "Day 3 :" + this.weatherTemp2[3].temp.day;
      this.day4 = this.weatherTemp2[4].dt;
      this.day4_temp = "Day 4 :" + this.weatherTemp2[4].temp.day;
      this.day5 = this.weatherTemp2[5].dt;
      this.day5_temp = "Day 5 :" + this.weatherTemp2[5].temp.day;
      this.day6 = this.weatherTemp2[6].dt;
      this.day6_temp = "Day 6 :" + this.weatherTemp2[6].temp.day;
      this.day7 = this.weatherTemp2[7].dt;
      this.day7_temp = "Day 7 :" + this.weatherTemp2[7].temp.day;
      console.log(this.day0);
      console.log(this.day0_temp);
      console.log(this.day1);
      console.log(this.day1_temp);
      console.log(this.day2);
      console.log(this.day2_temp);
      console.log(this.day3);
      console.log(this.day3_temp);
      console.log(this.day4);
      console.log(this.day4_temp);
      console.log(this.day5);
      console.log(this.day5_temp);
      console.log(this.day6);
      console.log(this.day6_temp);
      console.log(this.day7);
      console.log(this.day7_temp);
      console.log(this.feel_like);
    });


  }
  //  getWeatherData(): Observable<any> {
  //   let lat= 33.44;
  //   let lon = -94.04;
  //   let queryString = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutley,hourly,daily,alerts&appid=${API_KEY}`;
  //   return this.httpClient.get(queryString);
  // };

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
    this.sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 324,
          img: "assets/icons/sun/sun1.png",
          day: this.day0_temp,
        },
        {
          id: 321,
          img: "assets/icons/cloud/22.png",
          day: this.day1_temp,
        },
        {
          id: 435,
          img: "assets/icons/sun/27.png",
          day: this.day2_temp,
        },
        {
          id: 524,
          img: "assets/icons/sun/26.png",
          day: this.day3_temp,
        },
        {
          id: 523,
          img: "assets/icons/moon/moon3.png",
          day: this.day4_temp,
        },
        {
          id: 523,
          img: "assets/icons/sun/27.png",
          day: this.day5_temp,
        },
        {
          id: 523,
          img: "assets/icons/sun/sun1.png",
          day: this.day6_temp,

        },
      ]

    };
    console.log(this.sliderTwo.slidesItems);

  }
}
