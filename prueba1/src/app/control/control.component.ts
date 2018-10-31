import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  counter: number;
  constructor() {
    this.counter = 0;
  }

  ngOnInit() {
  }

  public plus(): void {
    this.counter++;
  }

  public substract(): void {
    this.counter--;
  }
}
