import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-access',
  templateUrl: 'access.html',
})
export class AccessPage {
  qrData = null;
  createdCode = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.createdCode = "hola putini :)";
  }
  createCode() {
      this.createdCode = this.qrData;

  }

  ionViewDidLoad() {
  }

}
