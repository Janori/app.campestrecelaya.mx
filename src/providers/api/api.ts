import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Provider } from '../provider';

@Injectable()
export class ApiProvider extends Provider {

    constructor(public http: Http) {
        super();
    }

    newsfeed() {
        return this.http.get(this.getApiRoute('newsfeed'));
    }

    swimming_pool() {
        return this.http.get(this.getApiRoute('swimming_pools'));
    }

    access_history(){
      return this.http.get(this.getApiRoute('access_history'));
    }
}
