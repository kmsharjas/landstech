import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { DataService } from '../data.service';
declare var $: any;

@Component({
  selector: 'app-brand-product-detail',
  templateUrl: './brand-product-detail.component.html',
  styleUrls: ['./brand-product-detail.component.css']
})

export class BrandProductDetailComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  productDetails
  productName
  category
  brand
  description
  image: any = []
  product: any = []
  emailForm:FormGroup
  constructor(public dataserv: DataService,private fb:FormBuilder) {
    this.emailForm = this.fb.group({
      name: [null],
      email: [null],
      number: [null],
      cmpny_address: [null],
      message:  [null],
      product:[null],

    })
   }

  ngOnInit() {
    this.productDetails = this.dataserv.brandDetailbyID;
    this.productName = this.productDetails.product_name;
    this.category = this.productDetails.category_name;
    this.brand = this.productDetails.brand_name;
    this.description = this.productDetails.desc;
    this.image = this.productDetails.images;


    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-angle-left',
        arrowNextIcon: 'fa fa-angle-right',
        imageArrowsAutoHide: true,
        imageSwipe: true,
        previewArrows: true,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnClick: true,
        previewKeyboardNavigation: true,
        previewZoom: true,
        previewRotate: true,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        previewCloseOnClick: true,
        previewKeyboardNavigation: true,
        previewZoom: true,
        previewRotate: true,
        previewSwipe: true,
      },
      // max-width 400
      {
        breakpoint: 400,
        imagePercent: 60,
        preview: true,
        previewArrows: true,
        previewCloseOnClick: true,
        previewKeyboardNavigation: true,
        previewZoom: true,
        previewRotate: true,
        previewSwipe: true,
      }
    ];


    this.galleryImages = this.image
  }

  Submit(val) {
    console.log(val.value);
  }

}


