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
var weather_service_1 = require('../../services/weather.service');
var WeatherComponent = (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDefaultCity();
        this.weatherService.getWeather(this.zmw)
            .subscribe(function (weather) {
            _this.weather = weather.current_observation;
        });
    };
    WeatherComponent.prototype.getQuery = function () {
        var _this = this;
        this.weatherService.searchCity(this.searchStr)
            .subscribe(function (res) {
            _this.results = res.RESULTS;
        });
    };
    WeatherComponent.prototype.chooseCity = function (city) {
        var _this = this;
        this.results = [];
        this.weatherService.getWeather(city.zmw)
            .subscribe(function (weather) {
            _this.weather = weather.current_observation;
        });
        this.searchStr = '';
        this.weatherService.getTenDaysWeather(city.zmw)
            .subscribe(function (weather) {
            _this.tendaysresult = weather.forecast.simpleforecast.forecastday;
            console.log(_this.tendaysresult);
        });
    };
    WeatherComponent.prototype.getDefaultCity = function () {
        if (localStorage.city !== undefined) {
            this.zmw = JSON.parse(localStorage.city).zmw;
        }
        else {
            this.zmw = '00000.1.03772';
        }
    };
    WeatherComponent = __decorate([
        core_1.Component({
            selector: 'my-weather',
            templateUrl: 'app/components/weather/weather.component.html'
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map