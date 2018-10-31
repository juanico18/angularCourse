import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsflag'
})
export class SecondsflagPipe implements PipeTransform {

  transform(value: any, flag?: any): any {
    let minutes = Math.floor(value / 60);
    let  seconds = value - minutes * 60;
    return minutes + '´ ' + (flag ? '0' + seconds : seconds) + '´´';
  }

}
