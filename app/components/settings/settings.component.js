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
var SettingsComponent = (function () {
    function SettingsComponent(weatherService) {
        this.weatherService = weatherService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.getDefaultCity();
    };
    SettingsComponent.prototype.getQuery = function () {
        var _this = this;
        this.weatherService.searchCity(this.searchStr)
            .subscribe(function (res) {
            _this.results = res.RESULTS;
        });
    };
    SettingsComponent.prototype.getDefaultCity = function () {
        if (localStorage.city !== undefined) {
            this.defaultCity = JSON.parse(localStorage.city).name;
        }
        else {
            this.defaultCity = '';
        }
    };
    SettingsComponent.prototype.setDefaultCity = function (city) {
        this.results = [];
        if (typeof (Storage) !== undefined) {
            localStorage.city = JSON.stringify(city);
            this.searchStr = city.name;
            this.getDefaultCity();
        }
        else {
            console.log("Localstorage not supported");
        }
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'my-about',
            templateUrl: 'app/components/settings/settings.component.html'
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map