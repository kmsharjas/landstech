import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-brand-product-list',
  templateUrl: './brand-product-list.component.html',
  styleUrls: ['./brand-product-list.component.css']
})
export class BrandProductListComponent implements OnInit {
  page: number = 1;
  start
  last
  constructor(public dataserv: DataService) { }

  ngOnInit(): void {
    // console.log(this.dataserv.brand);

  }
  getProductDetail(val) {
    // console.log(val);    
    this.dataserv.getProductDetailById(val.id)

  }
  getCount(count) {
    this.start = count
    this.start = this.start * 12 - 11
    this.last = count * 12
    if (this.last > this.dataserv.brandListLength) { this.last = this.dataserv.brandListLength }
    // console.log(this.start+'      '+this.last);
  }

}
