import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { ListaSupermercadosComponent } from './lista-supermercados/lista-supermercados.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { SituacaoComponent } from './situacao/situacao.component';
import { ResumoComponent } from './resumo/resumo.component';
import {TabViewModule} from 'primeng/tabview';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
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
    FormsModule,
    PedidoRoutingModule,
    CardModule,
    ButtonModule,
    RatingModule,
    TabViewModule
  ],
  providers: [
    PedidoService
  ]
})
export class PedidoModule { }
