import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SohoComponentsModule } from 'ids-enterprise-ng';

import { AppComponent } from './app.component';
import { SohoLocaleInitializerModule } from './locale/soho-locale-initializer.module';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { NgxsModule } from '@ngxs/store'
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin'
import { environment } from 'src/environments/environment';
import { DogState } from './store/dog.state';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([DogState], {developmentMode: !environment.production}),
    NgxsLoggerPluginModule.forRoot({disabled: environment.production }),
    SohoComponentsModule,
    SohoLocaleInitializerModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
