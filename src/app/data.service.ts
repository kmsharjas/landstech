import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  envApiRoot: string = environment.BaseAPIUrl
  brand: any = []
  category: any = []
  categoryById: any = []
  categoryListById
  categoryName
  productListById
  brandDetailbyID: any = []
  pName
  desc
  catTitle
  brandListLength
  public imageArray: any = []
  brandName: any;
  brandDesc: any;

  constructor(private http: HttpClient, private router: Router) { }
  //get Brand List
  getBrand() {
    this.http.get(this.envApiRoot + '/listbrand/').subscribe(res => {
      console.log(res);
      this.brand = res

    })
  }

  //get Category List
  getCategory() {
    this.http.get(this.envApiRoot + '/listcategory/').subscribe(res => {
      console.log(res);
      this.category = res
      let val = this.category[0]
      console.log(val);
      this.categoryDetails(val)

    })
  }

  categoryDetails(val) {
    console.log(val);
    this.desc = val.cat_desc
    this.catTitle = val.cat_name

    this.getProductListByCategoryId(val.id)
  }


  //get Product List by ID
  getProductListByCategoryId(id) {
    console.log(id);

    this.http.get(this.envApiRoot + '/listproductbycategory/' + id + '/').subscribe(res => {
      console.log(res);
      this.categoryById = res
    })

  }

  getProductByBrandId(val) {
    console.log(val);
    this.brandName=val.brand_name
    console.log(this.brandName);
    
    this.brandDesc=val.desc
    this.http.get(this.envApiRoot + '/listproductbybrand/' + val.id + '/').subscribe(res => {
      console.log(res);
      this.productListById = res
      this.brandListLength = this.productListById.length
      console.log(this.productListById);

    })
      this.router.navigate(['brandProductList'])
  }

  getProductDetailById(id) {
    console.log(id);
    this.http.get(this.envApiRoot + '/listproductdetail/' + id + '/').subscribe(res => {
      this.brandDetailbyID = res[0]
      this.imageArray = this.brandDetailbyID
      console.log(this.imageArray);
      if (this.brandDetailbyID != null) {
        this.router.navigate(['brandProductDetail'])
      }
      else
        alert('No Products')

    })
  }


}
