import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tdi-detail',
  templateUrl: './tdi-detail.component.html',
  styleUrls: ['./tdi-detail.component.css']
})
export class TdiDetailComponent implements OnInit {
  html:any
  x:any
  constructor(public dataserv: DataService) { }

  ngOnInit(): void {
    this.dataserv.getTdiProducts()
    // console.log(this.dataserv.tdiSpec);    
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
