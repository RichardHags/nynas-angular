import { Component, OnInit } from '@angular/core';
import { weatherDAta, UpdatableTable } from '..shared/data';
import { weatherService } from '..shared/remote/weather.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, UpdatableTable {

  constructor() { }

  weatherData: Array<weatherData>;
  
  ngOnInit() {
    this.weatherService.refresh(this);
  }

  updateWeather(data: Array<weatherData>){
    this.weatherData = data;
  }
  
  updateTrain(data: Array<any>){
    
  }
}
