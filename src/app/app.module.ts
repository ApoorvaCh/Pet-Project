import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SohoComponentsModule } from 'ids-enterprise-ng';

import { AppComponent } from './app.component';
import { SohoLocaleInitializerModule } from './locale/soho-locale-initializer.module';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    SohoComponentsModule,
    SohoLocaleInitializerModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
