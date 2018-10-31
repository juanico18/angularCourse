import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePrueba'
})
export class PipePruebaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
