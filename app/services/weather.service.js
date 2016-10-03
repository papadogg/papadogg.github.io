"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var WeatherService = (function () {
    function WeatherService(jsonp) {
        this.jsonp = jsonp;
        this.apiKey = '067dab9e5ee2f07b';
        this.conditionsUrl = 'https://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
        this.searchUrl = 'https://autocomplete.wunderground.com/aq?query=';
        this.tendaysUrl = 'https://api.wunderground.com/api/' + this.apiKey + '/forecast10day/q';
    }
    WeatherService.prototype.getWeather = function (zmw) {
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(this.conditionsUrl + '/zmw:' + zmw + '.json', { search: params })
            .map(function (res) { return res.json(); });
    };
    WeatherService.prototype.searchCity = function (searchStr) {
        var params = new http_1.URLSearchParams();
        params.set('cb', 'JSONP_CALLBACK');
        return this.jsonp.get(this.searchUrl + '' + searchStr, { search: params })
            .map(function (res) { return res.json(); });
    };
    WeatherService.prototype.getTenDaysWeather = function (zmw) {
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(this.tendaysUrl + '/zmw:' + zmw + '.json', { search: params })
            .map(function (res) { return res.json(); });
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map
