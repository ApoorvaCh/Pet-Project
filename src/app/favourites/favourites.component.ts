import { Component, OnInit, ViewChild } from '@angular/core';
import { SohoHomePageComponent } from 'ids-enterprise-ng';
import { Select } from '@ngxs/store';
import { DogState } from '../store/dog.state';
import { Observable } from 'rxjs';
import { Dog } from '../model/dog.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  @ViewChild(SohoHomePageComponent, { static: true }) homepage: SohoHomePageComponent;
  constructor() { }
  //@Select(DogState.getAllDogs)dogs$ : Observable<Dog[]>
  ngOnInit() {

  }

}
