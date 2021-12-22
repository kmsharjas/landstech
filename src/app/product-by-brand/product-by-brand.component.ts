import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';
@Component({
  selector: 'app-product-by-brand',
  templateUrl: './product-by-brand.component.html',
  styleUrls: ['./product-by-brand.component.css']
})
export class ProductByBrandComponent implements OnInit {
  envApiRoot: string = environment.BaseAPIUrl
  // page=1
  // pageSize=12
  page: number = 1;
  constructor(public dataserv: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataserv.getBrand()
  }

  showBrandProductList(id) {
    this.dataserv.getProductByBrandId(id)
  }

}
