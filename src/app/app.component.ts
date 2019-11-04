import { Component, ViewChild } from '@angular/core';
import { SohoApplicationMenuComponent } from 'ids-enterprise-ng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(SohoApplicationMenuComponent, { static: true })
  public applicationMenu: SohoApplicationMenuComponent;
  title = 'Pet-Project';
  isApplicationMenuOpen: boolean;

  constructor() {
    Soho.Locale.set('en-US');
  }

  public onMenuVisibility(visible: boolean): void {
    if (this.isApplicationMenuOpen !== visible) {
      this.isApplicationMenuOpen = visible;
    }
  } 
}
