import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public toastCtrl: ToastController,
      public alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProfilePage');
    }

    onSubmit() {
        let toast = this.toastCtrl.create({
            message: '¡La contraseña ha sido modificada exitosamente!',
            duration: 3000
        });
        toast.present();
    }

    logOut(){
      let confirm = this.alertCtrl.create({
          title: 'Cerrar sesón',
          message: '¿Estás seguro de que quieres cerrar sesión?',
          buttons: [
            {
              text: 'Si',
              handler: () => {
                this.navCtrl.setRoot(LoginPage);
              }
            },
            {
              text: 'No',
            }
          ]
        });
        confirm.present();
    }

}
