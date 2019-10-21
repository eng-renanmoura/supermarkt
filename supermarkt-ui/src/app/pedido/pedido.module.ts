import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { ListaSupermercadosComponent } from './lista-supermercados/lista-supermercados.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { SituacaoComponent } from './situacao/situacao.component';
import { ResumoComponent } from './resumo/resumo.component';
import { TabViewModule } from 'primeng/tabview';
import { TextMaskModule } from 'angular2-text-mask';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoService } from './pedido.service';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';

import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';

import { PipesModule } from '../pipes/pipes.module';

import { rxStompConfig } from 'src/app/rx-stomp.config';

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
    InputTextModule,
    InputTextareaModule,
    RatingModule,
    TabViewModule,
    DialogModule,
    TextMaskModule,
    DropdownModule,
    PipesModule
  ],
  providers: [
    PedidoService,
    {
      provide: InjectableRxStompConfig,
      useValue: rxStompConfig
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }
  ]
})
export class PedidoModule { }
