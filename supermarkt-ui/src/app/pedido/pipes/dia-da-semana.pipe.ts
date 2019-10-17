import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diaDaSemana'
})
export class DiaDaSemanaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
