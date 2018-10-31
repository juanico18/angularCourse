import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-component',
  templateUrl: './if-component.component.html',
  styleUrls: ['./if-component.component.css']
})
export class IfComponentComponent implements OnInit {
  inDom: boolean;
  constructor() {
    this.inDom = false;
  }

  ngOnInit() {
  }

  public toogle(): void{
    this.inDom = !this.inDom;
  }

}
