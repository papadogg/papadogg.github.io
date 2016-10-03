import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather.service';

@Component({
    selector: 'my-about',
    templateUrl: 'app/components/settings/settings.component.html'
})
export class SettingsComponent implements OnInit { 

    searchStr: string;
    defaultCity;
    results;

    constructor(private weatherService: WeatherService) {

    }

    ngOnInit(){
        this.getDefaultCity();
    }

    getQuery() {
        this.weatherService.searchCity(this.searchStr)
        .subscribe(res => {
            this.results = res.RESULTS;
        });
    }

    getDefaultCity() {
        if(localStorage.city !== undefined) {
            this.defaultCity = JSON.parse(localStorage.city).name;
        } else {
            this.defaultCity = '';
        }
        
    }

    setDefaultCity(city) {
        this.results =[];
        if(typeof(Storage) !== undefined) {
            localStorage.city = JSON.stringify(city);
            this.searchStr = city.name;
            this.getDefaultCity();
        } else {
            console.log("Localstorage not supported");
        }
    }
}