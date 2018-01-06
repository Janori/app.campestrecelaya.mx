import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage, HomePage, AccessPage, SwimmingPoolPage, ProfilePage } from '../../pages/index';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = HomePage;
  homePage = HomePage;
  accessPage = AccessPage;
  swimmingPoolPage = SwimmingPoolPage;
  profilePage = ProfilePage;

  public user: any = {
      name: 'Felipillo Suárez',
      email: 'admin@janori.com'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
