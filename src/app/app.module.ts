import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CareersComponent } from './careers/careers.component';
import { BlogComponent } from './blog/blog.component';
import { ProductByBrandComponent } from './product-by-brand/product-by-brand.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { BrandProductListComponent } from './brand-product-list/brand-product-list.component';
import { BrandProductDetailComponent } from './brand-product-detail/brand-product-detail.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OurNewsAndBlogsComponent } from './our-news-and-blogs/our-news-and-blogs.component';
import { TdiListComponent } from './tdi-list/tdi-list.component';
import { TdiDetailComponent } from './tdi-detail/tdi-detail.component';
import { CareerDetailComponent } from './career-detail/career-detail.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuoteModalComponent } from './quote-modal/quote-modal.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { BrandSectionComponent } from './brand-section/brand-section.component';
// import { LightgalleryModule } from 'lightgallery/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxPaginationModule } from 'ngx-pagination';
// import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    CareersComponent,
    BlogComponent,
    ProductByBrandComponent,
    ProductByCategoryComponent,
    BrandProductListComponent,
    BrandProductDetailComponent,
    TestimonialsComponent,
    OurNewsAndBlogsComponent,
    TdiListComponent,
    TdiDetailComponent,
    CareerDetailComponent,
    BlogDetailComponent,
    QuoteModalComponent,
    BrandSectionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgImageSliderModule,
    FormsModule,
    HttpClientModule ,
    NgxGalleryModule,//For galleery 
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
