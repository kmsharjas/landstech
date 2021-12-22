import { Component } from '@angular/core';
import * as AOS from 'aos'
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landseatech';

  constructor() { }

  ngOnInit(): void {
    AOS.init({ duration: 1200 });
  }
}
