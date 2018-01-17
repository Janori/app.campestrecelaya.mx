import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [ ApiProvider ]
})
export class HomePage {

    constructor(
      public navCtrl: NavController,
      private _apiProvider: ApiProvider
    ) {
        //
    }

    ionViewDidLoad() {
        this._apiProvider.newsfeed().subscribe(result => {
            console.log(result);
        });
    }
}
