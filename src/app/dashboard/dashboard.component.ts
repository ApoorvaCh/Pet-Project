import { Component, OnInit, ViewChild } from '@angular/core';
import { SohoHomePageComponent } from 'ids-enterprise-ng';
import { DashboardService } from '../services/dashboard.service';
import { Select, Store } from '@ngxs/store';
import { DogState } from '../store/dog.state';
import { Observable } from 'rxjs';
import { Dog } from '../model/dog.model';
import { Dogs } from '../store/dog.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Select(DogState.getAllDogs) dogs$: Observable<Dog[]>;
  @ViewChild(SohoHomePageComponent, { static: true }) homepage: SohoHomePageComponent;
  
  constructor(private myDashboardService:DashboardService, private store:Store) {
    
  }
  ngOnInit() {  
    this.myDashboardService.emptyDashboard();
    for(let i=0;i<20;i++){
    this.myDashboardService.loadDog();
    }
    if(localStorage.getItem('favDogs')!=null){
    this.favdogs=JSON.parse(localStorage.getItem('favDogs'));
    }
  }


  favdogs:Dog[]=[];
  myDog:Dog;
  liked(likeddog:Dog){
    this.myDog={...likeddog};
    if(this.myDog.like===true){
      this.myDog.like=false;
    }
    else{
      this.myDog.like=true;
    }
    this.favdogs.push(this.myDog);
    localStorage.setItem('favDogs',JSON.stringify(this.favdogs));
    this.favdogs.forEach(val=>this.store.dispatch(new Dogs.addToFav(val)));
  }

}




