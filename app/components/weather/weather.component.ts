import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../../services/weather.service';


@Component({
    selector: 'my-weather',
    templateUrl: 'app/components/weather/weather.component.html'
})
export class WeatherComponent implements OnInit {

    zmw;
    weather;
    searchStr;
    results;
    tendaysresult;

    constructor(private weatherService: WeatherService) {

    }

    ngOnInit() {
        this.getDefaultCity();
        this.weatherService.getWeather(this.zmw)
        .subscribe(weather => {
            this.weather = weather.current_observation;
        })
    }

    getQuery() {
        this.weatherService.searchCity(this.searchStr)
        .subscribe(res => {
            this.results = res.RESULTS;
            
        })
    }

    chooseCity(city){
        this.results = [];
        this.weatherService.getWeather(city.zmw)
        .subscribe(weather => {
            this.weather = weather.current_observation;
           
        })
        this.searchStr ='';
        
        
       
    }

    getDefaultCity() {
        if(localStorage.city !== undefined) {
            this.zmw = JSON.parse(localStorage.city).zmw;
        } else {
        this.zmw = '00000.1.03772';
        }
    }
}
