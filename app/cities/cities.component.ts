import { Component, OnInit }        from '@angular/core';

import { CitiesService }    from './cities.service';

@Component({
    selector: 'cities',
    templateUrl: './app/cities/cities.component.html',
    providers: [CitiesService]
})
export class CitiesComponent implements OnInit {
        
    constructor(private cityService: CitiesService) { }

    public cities: string[];

    ngOnInit(): void {
        this.cityService.getCities()
                .then(cities => this.cities = cities);
    }
    
}