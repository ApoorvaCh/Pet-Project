import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FavouritesComponent } from '../favourites/favourites.component';
import { HomeComponent } from './home.component';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EditModalDialogComponent } from '../edit-modal-dialog/edit-modal-dialog.component';


@NgModule({
  declarations: [
    DashboardComponent,
    FavouritesComponent,
    HomeComponent,
    EditModalDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SohoComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    // You need to add any 'dynamic' components to the entry components otherwise the factory can't find them.
    EditModalDialogComponent
  ],
})
export class HomeModule { }
