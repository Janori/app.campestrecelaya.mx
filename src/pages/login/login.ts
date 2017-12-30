import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { HomePage, PwdResetPage } from '../';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:string;
  pwd:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  resetPwd(){
    let modal = this.modalCtrl.create(PwdResetPage);
    modal.present();
  }

  login(){
    if(!this.user || !this.pwd)
      this.loginFailed('Ingresa tu usuario y contraseña.');
    else if(this.user == 'admin' && this.pwd == 'secret'){
      this.navCtrl.setRoot(HomePage);
    }else this.loginFailed('Acceso denegado. Usuario o contraseña incorrecta.');
  }


  loginFailed(text:string) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });

    /*toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });*/

    toast.present();
  }

}
