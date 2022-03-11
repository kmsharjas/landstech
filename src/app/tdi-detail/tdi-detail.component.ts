import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tdi-detail',
  templateUrl: './tdi-detail.component.html',
  styleUrls: ['./tdi-detail.component.css'],
})
export class TdiDetailComponent implements OnInit {
  html: any;
  x: any;
  id: number;

  tdiProduct$: Observable<any>;
  constructor(public dataserv: DataService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataserv.getTdiProducts();
    // console.log(this.dataserv.tdiSpec);

    this.tdiProduct$ = this.router.paramMap.pipe(
      switchMap((params) => {
        this.id = +params.get('id');
        return this.dataserv.getTdiListById(this.id);
      })
    );
    this.tdiProduct$.subscribe(console.log);
  }

  //----------sorting---Searching----------------
  userFilter: any = {}; //search table filter
  //----------sorting-Searching------------------

  changeProducta(vl) {
    this.tdiProduct$ = of(vl);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
