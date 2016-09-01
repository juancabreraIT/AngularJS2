import { Component, OnInit } from '@angular/core';

import { ListService } from '../services/list.service';

class OlympicCities {

    name : string;
    year : number;
}

@Component({
    selector: 'simple-list',
    templateUrl: './app/simple-list/simple-list.component.html',
    providers: [ ListService ]
})

export class SimpleListComponent implements OnInit {
    
    public cities : OlympicCities[];
    public status : string;
    public errorMessage : string;


    constructor(private _service : ListService) { 
        this.cities = [];
        this.status = '';
        this.errorMessage = '';
    }

    ngOnInit() {
        console.log("Simple List Component loaded");
     }

     getCities() {
         this._service.getList()
            .subscribe(
                result => { this.cities = result.data,
                            this.status = result.status
                },
                error => { console.log(<any>error)
                            this.errorMessage = <any> error;
                }
            );
     }

     clear() {
         this.cities = [];
     }

}