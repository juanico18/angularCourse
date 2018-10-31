import { Component, OnInit } from '@angular/core';
import { DiceServiceService } from '../providers/dice-service.service';
import { LangService } from '../providers/lang.service';

@Component({
  selector: 'app-consumer-dice-component',
  templateUrl: './consumer-dice-component.component.html',
  styleUrls: ['./consumer-dice-component.component.css']
})
export class ConsumerDiceComponentComponent implements OnInit {
  throwResult: number;
  spanishTextValue:string;
  englishTextValue:string;
  constructor(private diceServiceService: DiceServiceService, 
              private langService: LangService) { }

  ngOnInit() {
    this.throwResult = this.diceServiceService.throwResult();
  }

  public spanishText():void{
    this.spanishTextValue=this.langService.dameFrase();
  }

  public englishText():void{
    this.englishTextValue=this.langService.getPhrase();
  }
}
