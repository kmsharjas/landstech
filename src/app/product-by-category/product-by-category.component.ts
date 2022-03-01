import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {
  envApiRoot: string = environment.BaseAPIUrl
  mailForm:FormGroup
  constructor(public dataserv: DataService, private http: HttpClient,private fb:FormBuilder) {
    this.mailForm=this.fb.group({
      name: [null],
      email: [null],
      number: [null],
      companyAddress: [null],
      message: [null],
    })
   }
  // desc
  // catTitle
  page: number = 1;
  ngOnInit(): void {
    this.dataserv.getCategory()
    // this.dataserv.getProductListByCategoryId(15)
  }

  Submit(val){
    console.log(val);

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

    //----------sorting---Searching----------------
    userFilter: any = {};  //search table filter
    //----------sorting-Searching------------------

  categoryExpand() {
    var x = document.getElementById("category-mobile");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  mailSend(val,name){
    let data=val.value
    console.log(val);
    console.log(data.name);
    console.log(name);
    let body = {
      "name": data.name,
      "email": data.email,
      "number": data.number,
      "cmpny_address": data.companyAddress,
      "message": data.message,
      "category":name
    };
    console.log(body);

    this.http.post(this.envApiRoot + '/categorymailsend/', body).subscribe((res) => {
      console.log(res);
    });
  }

}
