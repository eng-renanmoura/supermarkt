import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { Subscription } from 'rxjs';
import { Pedido } from 'src/app/pedido/pedido';
import { PedidoService } from '../../pedido/pedido.service';


@Component({
  selector: 'app-pedido-pendente',
  templateUrl: './pedido-pendente.component.html',
  styleUrls: ['./pedido-pendente.component.scss']
})
export class PedidoPendenteComponent implements OnInit, OnDestroy {

  private topicSubscription: Subscription;

  pendentes: Pedido[];

  constructor(private route: ActivatedRoute,
              private rxStompService: RxStompService,
              private pedidosService: PedidoService) {
  }

  ngOnInit(): void {
    const supermercadoId = this.route.snapshot.params.supermercadoId;
    this.pedidosService.pendentes(supermercadoId)
      .subscribe(pedidosPendentes => this.pendentes = pedidosPendentes);
    this.topicSubscription = this.rxStompService.watch(`/parceiros/supermercados/${supermercadoId}/pedidos/pendentes`)
      .subscribe((message: Message) => {
        const pedido = JSON.parse(message.body);
        this.pendentes.push(pedido);
      });
  }

  ngOnDestroy(): void {
    this.topicSubscription.unsubscribe();
  }

  confirma(pedido: Pedido): void {
    pedido.situacao = 'CONFIRMADO';
    this.pedidosService.atualizaSituacao(pedido)
      .subscribe();
  }

  avisaPronto(pedido: Pedido): void {
    pedido.situacao = 'PRONTO';
    this.pedidosService.atualizaSituacao(pedido)
      .subscribe();
  }

  avisaSaiu(pedido: Pedido): void {
    pedido.situacao = 'SAIU_PARA_ENTREGA';
    this.pedidosService.atualizaSituacao(pedido)
      .subscribe();
  }

  avisaEntregue(pedido: Pedido): void {
    pedido.situacao = 'ENTREGUE';
    this.pedidosService.atualizaSituacao(pedido)
      .subscribe();
  }

}
