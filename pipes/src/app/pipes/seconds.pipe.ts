import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seconds'
})
export class SecondsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let minutes = Math.floor(value / 60);
    let  seconds = value - minutes * 60;
    return minutes + '´ ' + seconds + '´´';
  }

}
