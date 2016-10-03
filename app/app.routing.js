"use strict";
var router_1 = require('@angular/router');
var settings_component_1 = require('./components/settings/settings.component');
var weather_component_1 = require('./components/weather/weather.component');
var appRoutes = [
    {
        path: '',
        component: weather_component_1.WeatherComponent
    },
    {
        path: 'settings',
        component: settings_component_1.SettingsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map