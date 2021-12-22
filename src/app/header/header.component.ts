import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onscroll=function(){myFunction()};
    var header = document.getElementById("sticky-nav")!
    var sticky = header.offsetTop;
    function myFunction() {
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky_top");
    } else {
    header.classList.remove("sticky_top");
    }
    }
  }

}
