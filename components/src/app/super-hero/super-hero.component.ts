import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SuperHero } from './model/super-hero.model';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.css']
})
export class SuperHeroComponent implements OnInit {
  @Input() superHero: SuperHero;
  @Output() emitSuperHero = new EventEmitter<SuperHero>()
  constructor() { }

  ngOnInit() {
  }

  public emitirSuperHero(): void{
    this.emitSuperHero.emit(this.superHero);
  }

}
