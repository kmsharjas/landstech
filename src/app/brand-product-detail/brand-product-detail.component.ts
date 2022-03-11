import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from '@kolkov/ngx-gallery';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';
declare var $: any;

@Component({
  selector: 'app-brand-product-detail',
  templateUrl: './brand-product-detail.component.html',
  styleUrls: ['./brand-product-detail.component.css'],
})
export class BrandProductDetailComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  envApiRoot: string = environment.BaseAPIUrl;
  productDetails;
  productName;
  category;
  brand;
  description;
  image: any = [];
  product: any = [];
  id: number;
  products$: Observable<any[]>;
  singleProd: any;
  emailForm: FormGroup;
  constructor(
    public dataserv: DataService,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: ActivatedRoute
  ) {
    this.emailForm = this.fb.group({
      name: [null],
      email: [null],
      number: [null],
      cmpny_address: [null],
      message: [null],
      product: [null],
    });
  }

  //  ngOnInit(): void {
  //    // console.log(this.dataserv.brand);
  //    this.products$ = this.router.params.pipe(
  //      switchMap((params) => {
  //        this.id = +params['id'];
  //        return this.dataserv.getProductDetails(this.id);
  //      })
  //    );
  //  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      // console.log(params); //log the entire params object
      // console.log(params['id']); //log the value of id
      this.id = +params['id'];
      return this.dataserv.getProductDetailById(this.id).subscribe((res) => {
        console.log(res);

        this.productDetails = res[0];
        this.productName = this.productDetails.product_name;
        this.category = this.productDetails.category_name;
        this.brand = this.productDetails.brand_name;
        this.description = this.productDetails.desc;
        this.image = this.productDetails.images;
        console.log(this.image);
        this.galleryImages = this.image;
      });
    });

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
      },
    ];

    // this.galleryImages = this.image;
    this.galleryImages;
  }

  Submit(val) {
    console.log(val.value);
  }

  mailSend(val, name) {
    let data = val.value;
    console.log(val);
    console.log(data.name);
    console.log(name);
    let body = {
      name: data.name,
      email: data.email,
      number: data.number,
      cmpny_address: data.cmpny_address,
      message: data.message,
      product: this.productName,
    };
    console.log(body);

    this.http.post(this.envApiRoot + '/emailsend/', body).subscribe((res) => {
      console.log(res);
    });
  }
}
