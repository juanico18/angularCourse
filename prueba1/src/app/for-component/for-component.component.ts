import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-component',
  templateUrl: './for-component.component.html',
  styleUrls: ['./for-component.component.css']
})
export class ForComponentComponent implements OnInit {
  lisObjects: any = [
    {
      name: "superman",
      rival: "Luthor",
      superPowers: ["speed", "x-Ray vision"]
    },
    {
      name: "Batman",
      rival: "Pinguin",
      superPowers: ["Brutal force", "Many weapons"]
    },
    {
      name: "Pocoyo",
      rival: "Calimero",
      superPowers: ["Broken eggs", "Big head"]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
