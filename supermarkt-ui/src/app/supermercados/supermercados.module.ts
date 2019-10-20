import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoPendenteComponent } from './pedido-pendente/pedido-pendente.component';
import { SupermercadosRoutingModule } from './supermercados-routing.module';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { rxStompConfig } from 'src/app/rx-stomp.config';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    PedidoPendenteComponent,
    ],
  imports: [
    CommonModule,
    SupermercadosRoutingModule,
    ButtonModule
  ],
  providers: [
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
export class SupermercadosModule { }
