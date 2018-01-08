import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  loginPage = LoginPage;

  public user: any = {
      name: 'Administrador Campestre',
      email: 'admin@campestrecelaya.mx'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
