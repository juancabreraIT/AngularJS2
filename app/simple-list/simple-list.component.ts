import { Component, OnInit } from '@angular/core';

import { ListService } from '../services/list.service';

class OlympicCities {

    name : string;
    year : number;
}

@Component({
    selector: 'simple-list',
    templateUrl: './app/simple-list/simple-list.component.html',
    styleUrls: ['./app/simple-list/simple-list.component.css'],
    providers: [ ListService ]
})

export class SimpleListComponent implements OnInit {
    
    public cities : OlympicCities[];
    public status : string;
    public errorMessage : string;
    public loading = false;


    constructor(private _service : ListService) { 
        this.cities = [];
        this.status = '';
        this.errorMessage = '';
    }

    ngOnInit() {
        console.log("Simple List Component loaded");
     }

     getCities() {
         this.loading = true;
         setTimeout(() => this.doCall(), 3000)
     }

     doCall() {
        this._service.getList()            
            .subscribe(
                result => { this.cities = result.data,
                            this.status = result.status

                            this.loading = false;
                },
                error => { console.log(<any>error)
                            this.errorMessage = <any> error;

                            this.loading = false;
                }
            );
     }

     clear() {
         this.cities = [];
     }

}