import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private apiKey: any = '112698584f6df14b44584de7d6aa90fb'

  constructor(private http:HttpClient) { }
  
  getWeather(city:string) {
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
    return this.http.get(Url)
  }
}
