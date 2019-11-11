import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Dog, DogApiResponse, dogStatus } from '../model/dog.model';
import { filter, map } from 'rxjs/operators'
import { Store } from '@ngxs/store';
import { Dogs } from '../store/dog.action';

@Injectable({
    providedIn:"root"
})

export class DashboardService{

    constructor(private http: HttpClient, private store: Store){       
    }

    private readonly url="https://dog.ceo/api/breeds/image/random";

    loadDog(){
        this.http.get(this.url).pipe(
            filter((apiStatus:DogApiResponse)=> (apiStatus.status===dogStatus.status)),
            map((imgResponse:DogApiResponse)=>{ return {url : imgResponse.message}; }),
        ). subscribe(dog => this.store.dispatch(new Dogs.Retrieve(dog)));
        
    }

    emptyDashboard() {
        this.store.dispatch(new Dogs.Clear());        
  }


}