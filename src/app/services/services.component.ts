import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos'
import { DataService } from '../data.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public dataserv:DataService,private router:Router) {}


  ngOnInit(): void {
    AOS.init({ duration: 1200 });
    this.dataserv.getServices()
  }
  gotoDetail(val){
    console.log(val);
    this.router.navigate(['../serviceDetail/'])
  }
}
