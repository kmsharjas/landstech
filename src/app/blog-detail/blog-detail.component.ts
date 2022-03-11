import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  id: number;

  blog$: Observable<any>;
  constructor(public dataserv: DataService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataserv.getBlogs();
    this.dataserv.getBlogcategory();
    this.blog$ = this.router.paramMap.pipe(
      switchMap((params) => {
        this.id = +params.get('id');
        return this.dataserv.getBlogById(this.id);
      })
    );
  }
  //----------sorting---Searching----------------
  userFilter: any = {}; //search table filter
  //----------sorting-Searching------------------
  getBlogById(vl) {
    console.log(vl);
    this.blog$ = of(vl);
    // this.dataserv.getBlogById(vl.id);
  }

  getBlogByCategory(vl) {
    console.log(vl);
    this.dataserv.getBlogByCategory(vl);
  }
}
