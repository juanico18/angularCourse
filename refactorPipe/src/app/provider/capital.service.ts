import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  constructor() { }

  getCapitalValue(lowerValue: string): string {
    return lowerValue.replace(/\w\S*/g, txt => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

}
