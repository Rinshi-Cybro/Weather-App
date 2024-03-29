import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SavedCityService } from 'src/app/service/saved-city.service';
import { WeatherApiService } from 'src/app/service/weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  city = ''
  weatherData: any;
  tempShow: boolean = true;
  saveButton: boolean = false;
  error: string | null = null;

  constructor(private weather: WeatherApiService,
    private savedcity: SavedCityService,
    private router: Router, private toast: ToastrService) { }

  getCityWeather() {
    this.saveButton = true
    this.weather.getWeather(this.city).subscribe((res) => {
      this.weatherData = res
      console.log(this.weatherData);
    },
      (_error) => {
        this.weatherData = null
        this.toast.error('City not found. Check the correct city name !!', 'error');
        // this.error = 'City not found. Check the correct city name';
        console.log(_error)
      }
    );
  }

  toggle() {
    this.tempShow = !this.tempShow
  }

  saveCity() {
    if (confirm('Are you sure you want to save')) {
      this.savedcity.postCity(this.weatherData).subscribe((res) => {
        // alert('Successfully saved')
        this.toast.success('Successfully saved', 'success');
        console.log(res)
        this.router.navigate(['saved-city'])
      })
    }
  }

}
