import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {SettingsComponent} from './components/settings/settings.component';
import {WeatherComponent} from './components/weather/weather.component';


const appRoutes: Routes = [
    {
        path: '',
        component: WeatherComponent
    },
    {
        path:'settings',
        component: SettingsComponent
    }
    
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);