import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import * as AOS from 'aos'
@Component({
  selector: 'app-our-news-and-blogs',
  templateUrl: './our-news-and-blogs.component.html',
  styleUrls: ['./our-news-and-blogs.component.css'],
})
export class OurNewsAndBlogsComponent implements OnInit {
  constructor(public dataserv: DataService) {}

  ngOnInit(): void {
    // AOS.init({ duration: 1200 });
    this.dataserv.getBlogs();
  }
}
