import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FavouritesComponent } from '../favourites/favourites.component';
import { HomeComponent } from './home.component';
import { SohoComponentsModule } from 'ids-enterprise-ng';


@NgModule({
  declarations: [
    DashboardComponent,
    FavouritesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SohoComponentsModule
  ]
})
export class HomeModule { }
