import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Provider } from '../Provider';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider extends Provider{
  url = '/authenticate';

  constructor(public http: Http) {
    super();
  }

  public authenticate(user:string, pwd:string){
    return this.http.post(this.MAIN_URL + this.url, {
      username: user,
      password: pwd
    });
  }

}
