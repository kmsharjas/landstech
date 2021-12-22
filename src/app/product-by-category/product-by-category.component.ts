import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {
  envApiRoot: string = environment.BaseAPIUrl
  constructor(public dataserv: DataService, private http: HttpClient) { }
  // desc
  // catTitle
  page: number = 1;
  ngOnInit(): void {
    this.dataserv.getCategory()
    this.dataserv.getProductListByCategoryId(15)
  }

  // categoryDetails(val) {
  //   console.log(val);
  //   this.desc = val.cat_desc
  //   this.catTitle = val.cat_name
  //   if (val == null) {
  //     console.log('null');

  //     val.id = 15
  //   }
  //   this.dataserv.getProductListByCategoryId(val.id)
  // }

  categoryExpand() {
    var x = document.getElementById("category-mobile");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

}
