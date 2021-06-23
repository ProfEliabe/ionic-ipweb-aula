import { Component } from '@angular/core';
import { HomeComponent } from '../../home/home.component';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomeComponent;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
