import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdatableTable } from '../data';

const KEY = '417faddb3e3fe4a061678bb3c66a6d55';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=nynashamn&lang=se&APPID=' + KEY;

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  
    refresh(table: UpdatableTable) {
      this.http.get(WEATHER_URL);
    }
}
