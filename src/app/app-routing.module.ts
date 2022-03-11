import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { BrandProductDetailComponent } from './brand-product-detail/brand-product-detail.component';
import { BrandProductListComponent } from './brand-product-list/brand-product-list.component';
import { CareerBycategoryComponent } from './career-bycategory/career-bycategory.component';
import { CareerDetailComponent } from './career-detail/career-detail.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductByBrandComponent } from './product-by-brand/product-by-brand.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { QuoteModalComponent } from './quote-modal/quote-modal.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServicesComponent } from './services/services.component';
import { TdiDetailComponent } from './tdi-detail/tdi-detail.component';
import { TdiListComponent } from './tdi-list/tdi-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'careers/:id', component: CareerDetailComponent },

  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  // { path: 'blogDetail', component: BlogDetailComponent },
  // { path: 'blogDetail/:id', component: BlogDetailComponent },
  // { path: 'productByBrand', component: ProductByBrandComponent },
  { path: 'productByBrand/:id', component: BrandProductListComponent },
  { path: 'productByCategory', component: ProductByCategoryComponent },
  // {path: 'brandProductList',component:BrandProductListComponent},
  { path: 'brandProductDetail/:id', component: BrandProductDetailComponent },
  { path: 'tdiList', component: TdiListComponent },
  { path: 'tdiList/:id', component: TdiDetailComponent },
  // { path: 'tdiDetail', component: TdiDetailComponent },
  // { path: 'careerDetail', component: CareerDetailComponent },
  { path: 'careerByCategory', component: CareerBycategoryComponent },
  { path: 'serviceDetail', component: ServiceDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
