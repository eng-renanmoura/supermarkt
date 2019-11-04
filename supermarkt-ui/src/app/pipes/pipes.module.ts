import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FavoriteTextPipe } from './favorite-text.pipe';
import { FormaPagamentoPipe } from './forma-pagamento.pipe';
import { SituacaoPedidoPipe } from './situacao-pedido.pipe';

@NgModule({
  declarations: [
    FormaPagamentoPipe,
    SituacaoPedidoPipe,
    FavoriteTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormaPagamentoPipe,
    SituacaoPedidoPipe,
    FavoriteTextPipe
  ]
})
export class PipesModule { }
