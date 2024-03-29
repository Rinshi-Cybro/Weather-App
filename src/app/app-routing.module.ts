import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { SavedCityComponent } from './components/saved-city/saved-city.component';

const routes: Routes = [
  { path:'', component: WeatherComponent },
  { path:'saved-city', component: SavedCityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
