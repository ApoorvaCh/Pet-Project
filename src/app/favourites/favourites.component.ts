import { Component, OnInit, ViewChild } from '@angular/core';
import { SohoHomePageComponent } from 'ids-enterprise-ng';
import { Select, Store } from '@ngxs/store';
import { DogState } from '../store/dog.state';
import { Observable } from 'rxjs';
import { Dog } from '../model/dog.model';
import { Dogs } from '../store/dog.action';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  @ViewChild(SohoHomePageComponent, { static: true }) homepage: SohoHomePageComponent;
  constructor( private store:Store) {
   }
  @Select(DogState.getAllFavDogs)dogs$ : Observable<Dog[]>
  favDogs:Dog[]=[];
  ngOnInit() {
    this.store.dispatch(new Dogs.clearFav());
    
    if(localStorage.getItem('favDogs')==null){
      this.favDogs=[];
    }
    else{
      this.favDogs=JSON.parse(localStorage.getItem('favDogs'));
    }
    this.favDogs.forEach(val=>this.store.dispatch(new Dogs.addToFav(val)));  
  }

  selectedDog:Dog;
  unlike(dog:Dog){
    this.selectedDog={...dog};
    this.selectedDog.likeStatus="LIKE";
    for(let i=0;i<this.favDogs.length;i++){
      if(this.favDogs[i].url===dog.url){
        this.favDogs.splice(i,1);
      }
    }
    localStorage.setItem('favDogs',JSON.stringify(this.favDogs));
    this.store.dispatch(new Dogs.deletefromFav(dog));
  }

}
