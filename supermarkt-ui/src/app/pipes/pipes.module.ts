import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormaPagamentoPipe } from './forma-pagamento.pipe';
import { SituacaoPedidoPipe } from './situacao-pedido.pipe';

@NgModule({
  declarations: [
    FormaPagamentoPipe,
    SituacaoPedidoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormaPagamentoPipe,
    SituacaoPedidoPipe
  ]
})
export class PipesModule { }
