import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-component',
  templateUrl: './model-component.component.html',
  styleUrls: ['./model-component.component.css']
})
export class ModelComponentComponent implements OnInit {
  name: string;
  constructor() { }

  ngOnInit() {
  }

}
