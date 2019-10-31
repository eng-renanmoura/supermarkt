import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { RxStompService} from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';

import { PedidoService } from 'src/app/pedido/pedido.service';
import { AvaliacoesService } from 'src/app/services/avaliacoes.service';


@Component({
  selector: 'app-situacao',
  templateUrl: './situacao.component.html',
  styleUrls: ['./situacao.component.scss']
})
export class SituacaoComponent implements OnInit, OnDestroy {

  private topicSubscription: Subscription;

  pedido: any = {};
  avaliacao: any = {};

  constructor(
    private route: ActivatedRoute,
    private rxStompService: RxStompService,
    private pedidoService: PedidoService,
    private avaliacoesService: AvaliacoesService
  ) { }

  ngOnInit() {
    const pedidoId = this.route.snapshot.params.pedidoId;
    this.pedidoService.porId(pedidoId)
      .subscribe(pedido => this.pedido = pedido);

    this.topicSubscription = this.rxStompService.watch(`/pedidos/${pedidoId}/situacao`).subscribe((message: Message) => {
      const pedido = JSON.parse(message.body);
      this.pedido.situacao = pedido.situacao;
    });
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

  salvaAvaliacao() {
    this.avaliacao.pedido = this.pedido;
    this.avaliacoesService.salva(this.avaliacao)
      .subscribe(avaliacao => this.avaliacao = avaliacao);
  }

}
