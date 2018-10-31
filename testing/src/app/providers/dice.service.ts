import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }

  public throwResult():number{
    return Math.round(6 * Math.random());
  }
  
}
