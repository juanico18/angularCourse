import { Component } from '@angular/core';
import { SuperHero } from './super-hero/model/super-hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  heroes: SuperHero[] = [
    {
      name: "superman",
      rival: "Luthor",
      superpowers: ["speed", "x-Ray vision"],
      status: "free",
    },
    {
      name: "Batman",
      rival: "Pinguin",
      superpowers: ["Brutal force", "Many weapons"],
      status: "free",
    },
    {
      name: "Pocoyo",
      rival: "Calimero",
      superpowers: ["Broken eggs", "Big head"],
      status: "free",
    },
  ];

  peter: string = 'pedro';

  public doSomething(e: any) {
    console.log(e);
    alert("Event: " + e);
  }

  public callSuperHero(e: SuperHero) {
    console.log(e);
    e.status = "busy";
    setTimeout(()=> e.status = "free" , 4000);
  }
}
