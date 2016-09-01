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