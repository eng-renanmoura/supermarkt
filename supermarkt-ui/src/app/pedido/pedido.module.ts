import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSupermercadosComponent } from './lista-supermercados/lista-supermercados.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { SituacaoComponent } from './situacao/situacao.component';
import { ResumoComponent } from './resumo/resumo.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoService } from './pedido.service';

@NgModule({
  declarations: [
    ListaSupermercadosComponent,
    PagamentoComponent,
    SupermercadoComponent,
    SituacaoComponent,
    ResumoComponent],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    CardModule,
    ButtonModule
  ],
  providers: [
    PedidoService
  ]
})
export class PedidoModule { }
