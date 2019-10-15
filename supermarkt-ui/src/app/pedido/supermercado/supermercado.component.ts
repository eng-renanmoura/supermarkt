import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SupermercadoService } from 'src/app/admin/supermercado/supermercado.service';
import { AvaliacoesService } from 'src/app/services/avaliacoes.service';
import { PedidoService } from 'src/app/pedido/pedido.service';
import { EstoqueService } from 'src/app/supermercados/estoque/estoque.service';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {

  supermercadoComAvaliacao: any;
  avaliacoes: Array<any> = [];
  estoque: Array<any> = [];
  pedido: any = {
    itens: []
  };
  itemDoPedidoEscolhido: any;
  adicionandoItemAoPedido = false;


  constructor(
    private route: ActivatedRoute,
    private supermercadoService: SupermercadoService,
    private avaliacoesService: AvaliacoesService,
    private pedidoService: PedidoService,
    private estoqueService: EstoqueService
  ) { }

  ngOnInit() {
    const supermercadoId = this.route.snapshot.params.supermercadoId;
    this.pedidoService.getSupermercadoComAvaliacaoPorId(supermercadoId)
      .subscribe(supermercado => {
        this.supermercadoComAvaliacao = supermercado;
      });

    this.avaliacoesService.porIdDoRestaurante(supermercadoId)
      .subscribe(avaliacoes => {
        this.avaliacoes = avaliacoes;
    });

    this.estoqueService.estoqueDoSupermercado(supermercadoId)
      .subscribe(estoque => {
        this.estoque = estoque;
      });
  }


}
