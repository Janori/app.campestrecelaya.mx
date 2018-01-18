import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Provider } from '../provider';

@Injectable()
export class AuthProvider extends Provider{
    constructor(public http: Http) {
        super();
    }

    public authenticate(user:string, pwd:string){
        return this.http.post(this.MAIN_URL + '/authenticate', {
          username: user,
          password: pwd
        });
    }

}
