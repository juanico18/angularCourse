import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date:Date = new Date();
  percentageValue:number = 0.1234;
  time:number = 330;
  time1:number = 305;
}
