import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  constructor(public dataserv: DataService) {}

  ngOnInit(): void {
    this.dataserv.getBlogs();
  }

  getBlogDetails(val){
    console.log(val);
    this.dataserv.getBlogById(val)
  }
}
