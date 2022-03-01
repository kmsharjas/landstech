import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-section',
  templateUrl: './brand-section.component.html',
  styleUrls: ['./brand-section.component.css'],
})
export class BrandSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
      thumbImage: 'assets/img/brand5.jpg',
    },
    {
      thumbImage: 'assets/img/brand6.jpg',
    },
    {
      thumbImage: 'assets/img/brand7.jpg',
    },
    {
      thumbImage: 'assets/img/brand8.jpg',
    },
    {
      thumbImage: 'assets/img/brand9.jpg',
    },
    {
      thumbImage: 'assets/img/brand10.jpg',
    },
  ];
}
