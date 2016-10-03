import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { JsonpModule }    from '@angular/http';
import { NavbarComponent} from './components/navbar/navbar.component';
import { SettingsComponent} from './components/settings/settings.component';
import { WeatherComponent} from './components/weather/weather.component';
import { WeatherService} from './services/weather.service';

@NgModule({
  imports: [ BrowserModule,JsonpModule,FormsModule,routing ],
  declarations: [ AppComponent, NavbarComponent, SettingsComponent,WeatherComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [WeatherService]
})
export class AppModule { }
