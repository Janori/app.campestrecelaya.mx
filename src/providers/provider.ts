// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

export class Provider {
    MAIN_URL:string = 'http://system.campestrecelaya.mx/api';
    private url: string = 'http://system.campestrecelaya.mx/api/';
    private version: string = 'v1/';

    public getApiRoute(route: string): string {
        return this.url + this.version + route;
    }
}
