import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormaDePagamentoComponent } from './forma-de-pagamento/forma-de-pagamento.component';
import { HorarioDeFuncionamentoComponent } from './horario-de-funcionamento/horario-de-funcionamento.component';
import { PedidoPendenteComponent } from './pedido-pendente/pedido-pendente.component';
import { EstoqueComponent } from './estoque/estoque.component';



@NgModule({
  declarations: [FormaDePagamentoComponent, HorarioDeFuncionamentoComponent, PedidoPendenteComponent, EstoqueComponent],
  imports: [
    CommonModule
  ]
})
export class SupermercadosModule { }
