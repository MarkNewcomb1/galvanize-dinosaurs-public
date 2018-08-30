import { Component } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Job;
  data;
    constructor(private http:Http) {
      this.http.get('../assets/listings.json')
      .subscribe(res => {
        this.data = res.json().reverse()
  }); 
  }
}
