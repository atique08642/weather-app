import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  city_name = "Mumbai" ; 
  data:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    var baseUrl = "https://api.openweathermap.org/data/2.5/weather?q="+this.city_name+"&appid=3588fa3d74fff694563c18e6f0f8d821";
    this.http.get(baseUrl)
        .subscribe(
          res => {
            this.data = res;
          },
          err => {
            alert("error");
          }
        )
  }

}
