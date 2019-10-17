import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaDaSemanaPipe } from './dia-da-semana.pipe';
import { SituacaoPipe } from './situacao.pipe';
import { TipoPagamentoPipe } from './tipo-pagamento.pipe';



@NgModule({
  declarations: [
    DiaDaSemanaPipe,
    SituacaoPipe,
    TipoPagamentoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DiaDaSemanaPipe,
    SituacaoPipe,
    TipoPagamentoPipe
  ],
})
export class PipesModule { }
