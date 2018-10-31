import { Pipe, PipeTransform } from '@angular/core';
import { CapitalService } from '../provider/capital.service';

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {
  constructor(private capitalService: CapitalService){}
  transform(value: any, args?: any): any {
    if(!value) return value;
    return this.capitalService.getCapitalValue(value);
  }

}
