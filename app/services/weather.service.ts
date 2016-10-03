import { Injectable } from '@angular/core';
import { Jsonp,URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
    
    apiKey = '067dab9e5ee2f07b';
    conditionsUrl = 'https://api.wunderground.com/api/'+this.apiKey +'/conditions/q';
    searchUrl = 'https://autocomplete.wunderground.com/aq?query=';
    tendaysUrl = 'https://api.wunderground.com/api/'+this.apiKey +'/forecast10day/q';

    constructor(private jsonp: Jsonp) {
       
    }
    
    getWeather(zmw) {
        let params = new URLSearchParams();   
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp.get(this.conditionsUrl+'/zmw:'+zmw+'.json', {search:params})
        .map(res => res.json());
    }

    searchCity(searchStr) {
        let params = new URLSearchParams();   
        params.set('cb', 'JSONP_CALLBACK');

        return this.jsonp.get(this.searchUrl+''+searchStr, {search:params})
        .map(res => res.json());
    }

    getTenDaysWeather(zmw) {
        let params = new URLSearchParams();   
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp.get(this.tendaysUrl+'/zmw:'+zmw+'.json', {search:params})
        .map(res => res.json());
    }

}
