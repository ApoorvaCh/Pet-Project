import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { FavouritesComponent } from '../favourites/favourites.component';


const routes: Routes = [
  {
    path:'', component : HomeComponent,
    children:[
      {
        path:'dashboard',component:DashboardComponent
      },
      {
        path:'favourites',component:FavouritesComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
