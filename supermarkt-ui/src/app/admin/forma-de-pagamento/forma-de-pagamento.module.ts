import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormaDePagamentoFormularioComponent } from './forma-de-pagamento-formulario/forma-de-pagamento-formulario.component';
import { FormaDePagamentoGradeComponent } from './forma-de-pagamento-grade/forma-de-pagamento-grade.component';
import { FormaDePagamentoBuscaComponent } from './forma-de-pagamento-busca/forma-de-pagamento-busca.component';



@NgModule({
  declarations: [FormaDePagamentoFormularioComponent, FormaDePagamentoGradeComponent, FormaDePagamentoBuscaComponent],
  imports: [
    CommonModule
  ]
})
export class FormaDePagamentoModule { }
