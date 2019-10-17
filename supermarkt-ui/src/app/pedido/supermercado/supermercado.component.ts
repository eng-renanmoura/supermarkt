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
  estoqueProdutos: Array<any> = [];
  pedido: any = {
    itens: []
  };
  itemDoPedidoEscolhido: any;
  adicionandoItemAoPedido = false;

  displayModalPedido = false;

  displayModalEntrega = false;

  constructor(
    private router: Router,
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
        this.pedido.supermercado = this.supermercadoComAvaliacao.supermercado;
        this.pedido.entrega = { cep: '', cliente: {} };
      });

    this.avaliacoesService.porIdDoRestaurante(supermercadoId)
      .subscribe(avaliacoes => {
        this.avaliacoes = avaliacoes;
    });

    this.estoqueService.estoqueDoSupermercado(supermercadoId)
      .subscribe(estoqueProdutos => {
        this.estoqueProdutos = estoqueProdutos;
      });
  }

  escolheItem(produto) {
    let item = produto.item;
    const indice = this.pedido.itens.findIndex(i => i.item.id === item.id);
    if (indice < 0) {
      this.itemDoPedidoEscolhido = { item, quantidade: 1, estoque: produto };
      this.adicionandoItemAoPedido = true;
    } else {
      this.itemDoPedidoEscolhido = Object.assign({}, this.pedido.itens[indice]);
    }
    this.showHideDialogPedido();
  }


  editaItemDoPedido(itemPedido) {
    this.itemDoPedidoEscolhido = Object.assign({}, itemPedido);
    this.showHideDialogPedido();
  }

  removeItemDoPedido(itemPedido) {
    this.pedido.itens = this.pedido.itens.filter(i => i.item.id !== itemPedido.item.id);
    this.itemDoPedidoEscolhido = null;
    this.adicionandoItemAoPedido = false;
  }

  fazPedido() {
    this.pedido.supermercado = this.supermercadoComAvaliacao.supermercado;
    this.pedido.entrega = { cliente: {} };
    this.showHideDialogEntrega();
  }

  salvaItemNoPedido() {
    if (this.adicionandoItemAoPedido) {
      this.pedido.itens.push(this.itemDoPedidoEscolhido);
    } else if (this.itemDoPedidoEscolhido) {
      const indice = this.pedido.itens.findIndex(i => i.item.id === this.itemDoPedidoEscolhido.item.id);
      this.pedido.itens[indice] = this.itemDoPedidoEscolhido;
    }
    this.itemDoPedidoEscolhido = null;
    this.adicionandoItemAoPedido = false;
  }

  calculaSubTotal(itemPedido) {
    const item = itemPedido.item;
    const preco = item.precoPromocional || item.preco;
    return itemPedido.quantidade * preco;
  }

  totalDoPedido() {
    let total = this.supermercadoComAvaliacao.supermercado.taxaDeEntregaEmReais || 0;
    this.pedido.itens.forEach(item => {
      total += this.calculaSubTotal(item);
    });
    return total;
  }

  registraEntrega() {
    this.pedidoService.adiciona(this.pedido)
    .subscribe(pedido => {
      this.router.navigateByUrl(`pedidos/${pedido.id}/pagamento`);
      this.showHideDialogEntrega();
    });

  }

  showHideDialogPedido() {
    this.displayModalPedido = (this.displayModalPedido === true ? false : true);
  }

  showHideDialogEntrega() {
    this.displayModalEntrega = (this.displayModalEntrega === true ? false : true);
  }

}
