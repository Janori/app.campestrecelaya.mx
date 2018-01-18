import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers'

/**
 * Generated class for the SwimmingPoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-swimming-pool',
  templateUrl: 'swimming-pool.html',
})
export class SwimmingPoolPage {
  data:IPool = {
    first_pool: 0,
    second_pool: 0
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private apiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    this.apiProvider.swimming_pool().subscribe(result=>{
      try{
        let json = result.json();
        if(json.status == true){
          this.data = json.data;
        }else{
          console.error("error", json);
        }
      }catch(e){
        console.error("e", e);
      }
    });
  }

}

interface IPool{
  first_pool: number,
  second_pool: number
}
