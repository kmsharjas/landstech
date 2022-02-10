import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  constructor(public dataserv:DataService) { }

  ngOnInit(): void {
    this.dataserv.getCareers()
  }

  getCareerDetails(val){
    console.log(val);
    this.dataserv.getCareerById(val)
  }

}
