import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { MenuPage, PwdResetPage } from '../';
import { AuthProvider } from '../../providers/index';
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
              private toastCtrl: ToastController,
              private authProvider:AuthProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  resetPwd(){
    let modal = this.modalCtrl.create(PwdResetPage);
    modal.present();
  }

  login(){
    //this.navCtrl.setRoot(MenuPage);
    if(!this.user || !this.pwd)
      this.loginFailed('Ingresa tu usuario y contraseña.');
    else{
      this.authProvider.authenticate(this.user, this.pwd).subscribe(x=>{
        let data = x.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log(data);
        if(data.status == false){
          this.loginFailed('Acceso denegado. Usuario o contraseña incorrecta.')
        }else{

          this.navCtrl.setRoot(MenuPage);
        }
      }, error=>{
        this.loginFailed('Ocurrió un problema al conectar con el servidor, intente de nuevo más tarde.');
      });
    }
    /*else if(this.user == 'admin' && this.pwd == 'secret'){
      this.navCtrl.setRoot(MenuPage);
    }else this.loginFailed('Acceso denegado. Usuario o contraseña incorrecta.');*/
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
