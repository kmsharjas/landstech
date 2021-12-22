import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-brand-product-list',
  templateUrl: './brand-product-list.component.html',
  styleUrls: ['./brand-product-list.component.css']
})
export class BrandProductListComponent implements OnInit {
  page: number = 1;
  constructor(public dataserv: DataService) { }

  ngOnInit(): void {

  }
  getProductDetail(val) {
    console.log(val);
    this.dataserv.getProductDetailById(val.id)

  }

}
