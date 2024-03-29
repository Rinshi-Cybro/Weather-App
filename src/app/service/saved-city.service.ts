import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedCityService {

  baseUrl = 'http://localhost:3000/savecity'

  constructor(private http: HttpClient) { }

  postCity(data:any){
    return this.http.post<any>(`${this.baseUrl}`, data);
  }

  getCity(){
    return this.http.get<any>(`${this.baseUrl}`);
  }

}
