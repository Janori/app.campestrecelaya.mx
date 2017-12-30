import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the PwdResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pwd-reset',
  templateUrl: 'pwd-reset.html',
})
export class PwdResetPage {
  email:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PwdResetPage');
  }

  send(){
    let toast = this.toastCtrl.create({
      message: 'En caso de que el correo exista, en unos minutos recibirás un correo con instrucciones para la recuperación de tu contraseña.',
      duration: 7000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });

    /*toast.onDidDismiss(() => {
    });*/

    toast.present();

    this.navCtrl.pop();
  }
  cancel(){
    this.navCtrl.pop();
  }

}
