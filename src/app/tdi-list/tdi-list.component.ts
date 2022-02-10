import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tdi-list',
  templateUrl: './tdi-list.component.html',
  styleUrls: ['./tdi-list.component.css']
})
export class TdiListComponent implements OnInit {
productDetail
  constructor(public dataserv: DataService) { }

  ngOnInit(): void {
    this.dataserv.getTdiProducts()
     this.productDetail = this.dataserv.tdiProducts
    console.log(this.productDetail);

  }

}
