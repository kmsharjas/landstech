import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-career-bycategory',
  templateUrl: './career-bycategory.component.html',
  styleUrls: ['./career-bycategory.component.css']
})
export class CareerBycategoryComponent implements OnInit {

  constructor(public dataserv:DataService) { }

  ngOnInit(): void {
    this.dataserv.getCareers()
  }

  getCareerDetails(val){
    console.log(val);
    this.dataserv.getCareerById(val)
  }


}
