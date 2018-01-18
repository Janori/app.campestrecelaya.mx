import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [ ApiProvider ]
})
export class HomePage {
    news:INew[] = [];

    constructor(
      public navCtrl: NavController,
      private _apiProvider: ApiProvider) {
        //
    }

    ionViewDidLoad() {
        this._apiProvider.newsfeed().subscribe(result => {
          try{
            let json = result.json();
            if(json.status == true){
              let data = json.data;
              this.news = data;
            }else{
              console.log("error 2", json);
            }
          }catch(e){
            console.log("error", e);
          }
        });
    }
}

interface INew{
  id: number,
  title: string,
  description: string,
  url: string,
  updated_at: Date,
  created_at: Date,
}
