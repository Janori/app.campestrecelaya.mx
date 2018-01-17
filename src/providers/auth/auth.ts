import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Provider } from '../provider';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider extends Provider{
    constructor(public http: Http) {
        super();
    }

    public authenticate(user:string, pwd:string){
        return this.http.post(this.getApiRoute('authenticate'), {
          username: user,
          password: pwd
        });
    }

}
