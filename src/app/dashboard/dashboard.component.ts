import { Component, OnInit, ViewChild } from '@angular/core';
import { SohoHomePageComponent } from 'ids-enterprise-ng';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  ngOnInit() {
  }

  @ViewChild(SohoHomePageComponent, { static: true }) homepage: SohoHomePageComponent;
 
  constructor() {
    
  }

}