import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


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
      public toastCtrl: ToastController) {
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

}
