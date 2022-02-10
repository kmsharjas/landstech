import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  page: number = 1;
  constructor(public dataserv: DataService) { }

  ngOnInit(): void {
    this.dataserv.getCategory()
  }
  userFilter: any = {};  //search table filter

}
