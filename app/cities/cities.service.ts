import { Injectable } from '@angular/core';
import { Headers, Http }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CitiesService {

    constructor(private http: Http) { }

    getCities(): Promise<string[]> {
        return this.http.get('this_can_be_whatever_but_cities_has_to_be_cities/cities')
            .toPromise()
            .then(response => response.json().data as string[])
            .catch(this.handleError);
    }   


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}