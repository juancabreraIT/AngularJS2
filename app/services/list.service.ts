import { Injectable }       from '@angular/core';
import { Http, Response}    from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import "rxjs/add/operator/map";

@Injectable()
export class ListService {

    constructor(private _http : Http) { }

    private url = 'http://www.mocky.io/v2/57c8392f1200001206e769df';

    public getList() {
        return this._http.get(this.url)
            .map(result => result.json());
    }
}

/**
 * JSON Response
  {
    "status": "success",
    "data": [
        {
            "name": "Barcelona",
            "year": 1992
        },
        {
            "name": "Atlanta",
            "year": 1996
        },
        {
            "name": "Sidney",
            "year": 2000
        },
        {
            "name": "Athens",
            "year": 2004
        },
        {
            "name": "Beijing",
            "year": 2008
        },
        {
            "name": "London",
            "year": 2012
        },
        {
            "name": "Rio de Janeiro",
            "year": 2016
        }
        ]
    }
 */