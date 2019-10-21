import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formaPagamento'
})
export class FormaPagamentoPipe implements PipeTransform {

  descricaoDasFormasDePagamento: any = {
    CARTAO_CREDITO: 'Cartão de Crédito',
    CARTAO_DEBITO: 'Cartão de Débito',
    VALE_ALIMENTACAO: 'Vale Alimentação'
  };

  transform(value: any): string {
    return this.descricaoDasFormasDePagamento[value] || value;
  }

}