import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'
import { NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';

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
  PASS_PHRASE = "J4n0r1";

  qrData = null;
  createdCode = null;
  otro = "";
  isUpdating = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log(this.encrypt("holis"));
    this.otro = `Muestra este código en el lector de la estación de acceso para poder ingresar.

    Si tienes problemas con el acceso actualiza tu código de acceso con el boton de actualizar.`;
    //this.encrypt(":qr:1.12-04-2018T14:50:33") + " - " + this.decrypt(this.encrypt(":qr:1.12-04-2018T14:50:33"));
    //this.createdCode = this.encrypt(":qr:1.12-04-2018T14:50:33");//this.encrypt("holis");
    this.updateCode(true);

  }

  updateCode(first:boolean = false) {
    let s = this.encrypt("hola"); //[Log] encrypted – "121-10f-13b-f9-68"
    console.log("encrypted", s);
    let id = 1;
    let date = new Date();
    let tDate = new DatePipe("en-US");// new DatePipe('yyyy-MM-ddTHH:mm:ss');
    //let tDate = DatePipe.prototype.transform('yyyy-MM-ddTHH:mm:ss');
    //var tDate = new DatePipe();
    let code = `${id}.${tDate.transform(date, 'yyyy-MM-ddTHH:mm:ss')}`;

    console.log(code);

    if(!first){
      this.isUpdating = true;
      let timer = Observable.timer(2000);
      timer.subscribe(t=>{
        console.log('si');
        this.isUpdating = false;
        this.createdCode = ':qr:' + this.encrypt(code);
      });
    }else this.createdCode = ':qr:' + this.encrypt(code);


  }

  ionViewDidLoad() {
    console.log('PASS_PHRASE: ' + this.PASS_PHRASE);
  }

  getCharAtIndex(index:number) : number {
      let realIndex:number = +index % +this.PASS_PHRASE.length;
      return this.PASS_PHRASE.codePointAt(realIndex);
  }

  encrypt(word:String){
    var sb = '';
    for(var i = 0; i < word.length; i++){
      let wordChar:number = word.codePointAt(i);
      let passChar:number = this.getCharAtIndex(i);
      var j:number = i + 1;
      if(i + 1 == word.length) j = 0;
      let nextChar = word.codePointAt(j);

      let final:string = String.fromCodePoint(+wordChar + +passChar + +nextChar);
      sb += final;
    }

    sb += word.substring(0,1);
    console.log(sb);

    var ba = "";
    for(let s of sb){
      ba += this.convertBase(s.codePointAt(0)).from(10).to(16) + '-';
    }

    return ba.substr(0, ba.length - 1);
  }

  decrypt(word:string){
    var w:String = "";
    var sb = "";
    let cant = word.split('-').length;
    for(let s of word.split('-')){
      if(s){
        w += ''+String.fromCodePoint(+this.convertBase(s).from(16).to(10));
      }
    }

    console.log(w);
    var current:number = +w.codePointAt(w.length - 1);
    sb += '' + String.fromCodePoint(current);

    for(var i = 0; i < cant - 3; i++){
      let wordChar:number = +w.codePointAt(i);
      let passChar:number = +this.getCharAtIndex(i);
      current = wordChar - passChar - +current;
      sb += String.fromCodePoint(current);
    }

    return sb;
  }

  convertBase(num) {
    return {
      from (baseFrom) {
        return {
          to (baseTo) {
            return parseInt(num, baseFrom).toString(baseTo);
          }
        };
      }
    };
  }



}
