import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormaPagamentoPipe } from './forma-pagamento.pipe';



@NgModule({
  declarations: [
    FormaPagamentoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormaPagamentoPipe
  ]
})
export class PipesModule { }
