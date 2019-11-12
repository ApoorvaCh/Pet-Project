import { Component, OnInit, HostBinding } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @HostBinding('class.header') get isHeader() { return true; }
  @HostBinding('class.is-personalizable') get isPersonalizable() { return true; }
  constructor(private myService:DashboardService) { }

  ngOnInit() {

  }

  refresh(){
    this.myService.emptyDashboard();
    for(let i=0;i<20;i++){
    this.myService.loadDog();
    }
  }

}