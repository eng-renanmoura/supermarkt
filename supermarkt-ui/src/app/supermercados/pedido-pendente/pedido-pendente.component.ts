import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { RxStompService} from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';

import { PedidoService } from '../../pedido/pedido.service';

@Component({
  selector: 'app-pedido-pendente',
  templateUrl: './pedido-pendente.component.html',
  styleUrls: ['./pedido-pendente.component.scss']
})
export class PedidoPendenteComponent implements OnInit, OnDestroy {

  private topicSubscription: Subscription;

  pendentes: Array<any>;

  constructor(private route: ActivatedRoute,
              private rxStompService: RxStompService,
              private pedidosService: PedidoService) {
  }

  ngOnInit() {
    const restauranteId = this.route.snapshot.params.restauranteId;
    this.pedidosService.pendentes(restauranteId)
      .subscribe(pedidosPendentes => this.pendentes = pedidosPendentes);

    this.topicSubscription = this.rxStompService.watch(`/parceiros/restaurantes/${restauranteId}/pedidos/pendentes`)
      .subscribe((message: Message) => {
        const pedido = JSON.parse(message.body);
        this.pendentes.push(pedido);
      });
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

  confirma(pedido) {
    pedido.situacao = 'CONFIRMADO';
    this.pedidosService.atualizaSituacao(pedido)
      .subscribe();
  }

  avisaPronto(pedido) {
    pedido.situacao = 'PRONTO';
    this.pedidosService.atualizaSituacao(pedido)
      .subscribe();
  }

  avisaSaiu(pedido) {
    pedido.situacao = 'SAIU_PARA_ENTREGA';
    this.pedidosService.atualizaSituacao(pedido)
      .subscribe();
  }

  avisaEntregue(pedido) {
    pedido.situacao = 'ENTREGUE';
    this.pedidosService.atualizaSituacao(pedido)
      .subscribe();
  }

}
