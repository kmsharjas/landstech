import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init({ duration: 1200 });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    // center:true,
    responsive: {
      0: {
        dots: true,
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: false,
  };

  imageObject = [
    {
      thumbImage: 'assets/img/brand1.png',
    },
    {
      thumbImage: 'assets/img/brand2.png',
    },
    {
      thumbImage: 'assets/img/brand3.png',
    },
    {
      thumbImage: 'assets/img/brand4.png',
    },
    {
      thumbImage: 'assets/img/brand1.png',
    },
    {
      thumbImage: 'assets/img/brand2.png',
    },
    {
      thumbImage: 'assets/img/brand3.png',
    },
    {
      thumbImage: 'assets/img/brand4.png',
    },
  ];
}
