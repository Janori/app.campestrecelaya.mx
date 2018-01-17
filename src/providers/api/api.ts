import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provider } from '../provider';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider extends Provider {

    constructor(public http: HttpClient) {
        super();
    }

    newsfeed() {
        return this.http.get(this.getApiRoute('newsfeed'));
    }
}
