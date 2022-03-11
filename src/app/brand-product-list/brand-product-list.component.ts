import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-brand-product-list',
  templateUrl: './brand-product-list.component.html',
  styleUrls: ['./brand-product-list.component.css'],
})
export class BrandProductListComponent implements OnInit {
  page: number = 1;
  start;
  last;

  id: number;

  products$: Observable<any[]>;

  constructor(public dataserv: DataService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log(this.dataserv.brand);
    this.products$ = this.router.params.pipe(
      switchMap((params) => {
        console.log(params);
        this.id = +params['id'];
        return this.dataserv.getProductDetails(this.id);
      })
    );
  }
  getProductDetail(val) {
    console.log(val);
    this.dataserv.getProductDetailById(val.id);
  }
  getCount(count) {
    this.start = count;
    this.start = this.start * 12 - 11;
    this.last = count * 12;
    if (this.last > this.dataserv.brandListLength) {
      this.last = this.dataserv.brandListLength;
    }
    // console.log(this.start+'      '+this.last);
  }
}
