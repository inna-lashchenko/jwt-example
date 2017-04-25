import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './index';


@Injectable()
export class NewsService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }


    addNews(data: any): Observable<any>{
        // TODO ADD NORM FUNCTIONALITY

        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.post('', options)
            .map((response: Response) => response.json());
    }

    getNews(){
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('news.json', options)
            .map((response: Response) => response.json());
    }

    getNewsById(id: number): Observable<any>{
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('news.json')
            .map((response: Response) => response.json())
    }
}