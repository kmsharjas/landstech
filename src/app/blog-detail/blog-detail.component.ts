import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  constructor(public dataserv: DataService) {}

  ngOnInit(): void {
    this.dataserv.getBlogs();
    this.dataserv.getBlogcategory();
  }
  //----------sorting---Searching----------------
  userFilter: any = {}; //search table filter
  //----------sorting-Searching------------------
  getBlogById(vl) {
    console.log(vl);
    this.dataserv.getBlogById(vl);
  }

  getBlogByCategory(vl) {
    console.log(vl);
    this.dataserv.getBlogByCategory(vl);
  }
}
