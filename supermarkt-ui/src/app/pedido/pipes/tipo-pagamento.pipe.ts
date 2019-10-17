import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoPagamento'
})
export class TipoPagamentoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
