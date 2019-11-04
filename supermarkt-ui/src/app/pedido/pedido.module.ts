import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { TextMaskModule } from 'angular2-text-mask';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { TabViewModule } from 'primeng/tabview';
import { rxStompConfig } from 'src/app/rx-stomp.config';
import { DirectiveModule } from '../directive/directive.module';
import { PipesModule } from '../pipes/pipes.module';
import { ListaSupermercadosComponent } from './lista-supermercados/lista-supermercados.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoService } from './pedido.service';
import { ResumoComponent } from './resumo/resumo.component';
import { SituacaoComponent } from './situacao/situacao.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';


@NgModule({
  declarations: [
    ListaSupermercadosComponent,
    PagamentoComponent,
    SupermercadoComponent,
    SituacaoComponent,
    ResumoComponent,
  ],
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
    PipesModule,
    DirectiveModule
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
