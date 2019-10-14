import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSupermercadosComponent } from './lista-supermercados/lista-supermercados.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { SituacaoComponent } from './situacao/situacao.component';
import { ResumoComponent } from './resumo/resumo.component';



@NgModule({
  declarations: [ListaSupermercadosComponent, PagamentoComponent, SupermercadoComponent, SituacaoComponent, ResumoComponent],
  imports: [
    CommonModule
  ]
})
export class PedidoModule { }
