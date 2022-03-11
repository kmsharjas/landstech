import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  envApiRoot: string = environment.BaseAPIUrl;
  noImage: any = '../../assets/img/noImage.png';
  brand: any = [];
  category: any = [];
  categoryById: any = [];
  categoryListById;
  categoryName;
  productListById;
  brandDetailbyID: any = [];
  pName;
  desc;
  catTitle;
  tdidesc;
  tdiTitle;
  tdiSpec;
  tdiDetail;
  brandListLength;
  spec;
  public imageArray: any = [];
  brandName: any;
  brandDesc: any;
  tdiProducts: any = [];
  blogs;
  blog: any = [];
  recblog: any = [];
  homeblog: any = [];
  careers: any = [];
  career: any = [];
  reccareer: any;
  services: any = [];
  dept: any = [];
  blogcat: any = [];
  careercat: any = [];
  careerCategoryName: any = 'Landseatech';
  catName;

  constructor(private http: HttpClient, private router: Router) {}
  //get Brand List
  getBrand() {
    this.http.get(this.envApiRoot + '/listbrand/').subscribe((res) => {
      // console.log(res);
      this.brand = res;
    });
  }

  //get Category List
  getCategory() {
    this.http.get(this.envApiRoot + '/listcategory/').subscribe((res) => {
      console.log(res);
      this.category = res;
      let val = this.category[0];
      // console.log(val);
      this.categoryDetails(val);
    });
  }

  categoryDetails(val) {
    // console.log(val);
    this.desc = val.cat_desc;
    this.catTitle = val.cat_name;

    this.getProductListByCategoryId(val);
  }

  //get Product List by ID
  getProductListByCategoryId(val) {
    // console.log(id);
    this.catName = val.cat_name;

    this.http
      .get(this.envApiRoot + '/listproductbycategory/' + val.id + '/')
      .subscribe((res) => {
        console.log(res);
        this.categoryById = res;
      });
  }

  getProductByBrandId(val) {
    // console.log(val);
    this.brandName = val.brand_name;
    this.brandDesc = val.desc;
    this.http
      .get(this.envApiRoot + '/listproductbybrand/' + val.id + '/')
      .subscribe((res) => {
        // console.log(res);
        this.productListById = res;
        this.brandListLength = this.productListById.length;
        // console.log(this.productListById);
      });
    this.router.navigate(['brandProductList']);
  }

  getProductDetails(id) {
    return this.http.get<any[]>(
      this.envApiRoot + '/listproductbybrand/' + id + '/'
    );
  }

  getProductDetailById(id) {
    console.log(id);
    return this.http.get<any[]>(
      this.envApiRoot + '/listproductdetail/' + id + '/'
    );
    // .subscribe((res) => {
    //   console.log(res);
    //   this.brandDetailbyID = res[0];
    //   this.imageArray = this.brandDetailbyID;
    //   console.log(this.imageArray);
    // });
  }

  // getProductDetailById(id) {
  //   console.log(id);
  //   return this.http
  //     .get(this.envApiRoot + '/listproductdetail/' + id + '/')
  //     .subscribe((res) => {
  //       this.brandDetailbyID = res[0];
  //       this.imageArray = this.brandDetailbyID;
  //       // console.log(this.imageArray);
  //       // if (this.brandDetailbyID != null) {
  //       //   this.router.navigate(['brandProductDetail']);
  //       // } else alert('No Products');
  //     });
  // }

  getTdiProducts() {
    this.http.get(this.envApiRoot + '/listtdiproducts/').subscribe((res) => {
      // console.log(res);
      this.tdiProducts = res;
      // console.log(this.tdiProducts);
      let val = this.tdiProducts[0];
      // console.log(val);
      // this.tdiDetails(val);
    });
  }

  tdiDetails(val) {
    console.log(val);
    this.tdidesc = val.desc;
    this.tdiTitle = val.title;
    this.tdiSpec = val.specifications;
    this.getTdiListById(val.id);
  }

  getTdiListById(id) {
    console.log(id);
    return this.http
      .get<any[]>(this.envApiRoot + '/listtdiproductsbyid/' + id + '/')
      .pipe(map((arr) => arr[0]));
  }

  // getTdiListById(id) {
  //   console.log(id);
  //   this.http
  //     .get(this.envApiRoot + '/listtdiproductsbyid/' + id + '/')
  //     .subscribe((res) => {
  //       // this.spec = res[0].specifications
  //       this.tdiDetail = res[0].tdiproduct;
  //       console.log(this.tdiDetail);

  //       // console.log(this.tdiSpec);
  //       let v = this.tdiSpec.split('|');
  //       // console.log(v);
  //       this.spec = v;
  //       // console.log(this.spec);
  //       this.router.navigate(['../tdiDetail']);
  //     });
  // }

  //get blog List
  getBlogs() {
    this.http.get(this.envApiRoot + '/listblog/').subscribe((res) => {
      console.log(res);
      this.blogs = res;
      this.recblog = this.blogs.slice(Math.max(this.blogs.length - 15, 0));
      this.homeblog = this.blogs.slice(Math.max(this.blogs.length - 3, 0));
      console.log(this.homeblog);
    });
  }

  getBlogById(id) {
    console.log(id);

    return this.http
      .get<any[]>(this.envApiRoot + '/listblogbyid/' + id + '/')
      .pipe(map((arr) => arr[0]));
  }

  //get blog by ID
  // getBlogById(blg) {
  //   this.http
  //     .get(this.envApiRoot + '/listblogbyid/' + blg.id + '/')
  //     .subscribe((res) => {
  //       console.log(res);
  //       this.blog = res[0];
  //       this.router.navigate(['../blogDetail']);
  //     });
  // }

  //get blog by ID
  getBlogByCategory(blg) {
    this.http
      .get(this.envApiRoot + '/listblogbycategory/' + blg.blogcat_id + '/')
      .subscribe((res) => {
        console.log(res);
      });
  }

  //get careers List
  getCareers() {
    this.http.get(this.envApiRoot + '/listcareers/').subscribe((res) => {
      console.log(res);
      this.careers = res;
      this.reccareer = this.careers.slice(Math.max(this.careers.length - 5, 0));
    });
  }

  // getCareerById(id) {
  //   console.log(id);

  //   return this.http.get<any[]>(
  //     this.envApiRoot + '/listcareersbyid/' + id + '/'
  //   );
  // }

  //get career by ID
  getCareerById(id) {
    return this.http
      .get<any[]>(this.envApiRoot + '/listcareersbyid/' + id + '/')
      .pipe(map((arr) => arr[0]));
  }

  //get blog by ID
  getCareerByCategory(car) {
    this.http
      .get(this.envApiRoot + '/listcareerbydepartment/' + car.id + '/')
      .subscribe((res) => {
        console.log(res);
        this.careerCategoryName = car.department;
        this.careercat = res;
        this.router.navigate(['../careerByCategory']);
      });
  }

  //get services List
  getServices() {
    this.http.get(this.envApiRoot + '/listservices/').subscribe((res) => {
      console.log(res);
      this.services = res;
      console.log(this.services);
    });
  }

  //get departments List
  getDepartments() {
    this.http.get(this.envApiRoot + '/listdepartment/').subscribe((res) => {
      console.log(res);
      this.dept = res;
    });
  }

  //get Blogcategory List
  getBlogcategory() {
    this.http.get(this.envApiRoot + '/listblogcategory/').subscribe((res) => {
      console.log(res);
      this.blogcat = res;
    });
  }

  mailSend(data, name) {
    console.log(data);
    console.log(name);

    let body = {
      name: 'Request for quote',
      email: 'Jahana@gmail.com',
      number: '9876543210',
      cmpny_address: 'Jahana&Co',
      message: 'Jahana new',
      product: 'tea powder',
      mailSubject: 'Request for quote',
      // mailSubject:'Request for contact'
    };
    this.http.post(this.envApiRoot + '/emailsend/', data).subscribe((res) => {
      console.log(res);
    });
  }
}
