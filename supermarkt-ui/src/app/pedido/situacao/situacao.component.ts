import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { Subscription } from 'rxjs';
import { Avaliacao } from 'src/app/pedido/modelos/avaliacao';
import { AvaliacoesService } from 'src/app/pedido/servicos/avaliacoes.service';
import { PedidoService } from 'src/app/pedido/servicos/pedido.service';
import { Pedido } from '../modelos/pedido';


@Component({
  selector: 'app-situacao',
  templateUrl: './situacao.component.html',
  styleUrls: ['./situacao.component.scss']
})
export class SituacaoComponent implements OnInit, OnDestroy {

  private topicSubscription: Subscription;

  pedido: Pedido;
  avaliacao: Avaliacao;

  constructor(
    private route: ActivatedRoute,
    private rxStompService: RxStompService,
    private pedidoService: PedidoService,
    private avaliacoesService: AvaliacoesService
  ) { }

  ngOnInit(): void {
    const pedidoId = this.route.snapshot.params.pedidoId;
    this.pedidoService.porId(pedidoId)
      .subscribe(pedido => this.pedido = pedido);

    this.topicSubscription = this.rxStompService.watch(`/pedidos/${pedidoId}/situacao`).subscribe((message: Message) => {
      const pedido = JSON.parse(message.body);
      this.pedido.situacao = pedido.situacao;
    });
    this.avaliacao = new Avaliacao();
  }

  ngOnDestroy(): void {
    this.topicSubscription.unsubscribe();
  }

  salvaAvaliacao(): void {
    this.avaliacao.pedido = this.pedido;
    this.avaliacoesService.salva(this.avaliacao, this.pedido.supermercado.id)
      .subscribe(avaliacao => this.avaliacao = avaliacao);
  }

}
