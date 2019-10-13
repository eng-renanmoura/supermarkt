import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormaDePagamentoNovoEEditarComponent } from './forma-de-pagamento-novo-e-editar/forma-de-pagamento-novo-e-editar.component';
import { FormaDePagamentoGradeComponent } from './forma-de-pagamento-grade/forma-de-pagamento-grade.component';
import { FormaDePagamentoBuscaComponent } from './forma-de-pagamento-busca/forma-de-pagamento-busca.component';



@NgModule({
  declarations: [FormaDePagamentoNovoEEditarComponent, FormaDePagamentoGradeComponent, FormaDePagamentoBuscaComponent],
  imports: [
    CommonModule
  ]
})
export class FormaDePagamentoModule { }
