import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SupermercadoService } from 'src/app/admin/supermercado/supermercado.service';
import { PagamentoService } from './pagamento.service';
import { PedidoService } from 'src/app/pedido/pedido.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements OnInit {

  pedido: any;
  tiposPagamento: Array<any>;
  pagamento: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pagamentoService: PagamentoService,
    private pedidoService: PedidoService,
    private supermercadoService: SupermercadoService
  ) { }

  ngOnInit() {
    const pedidoId = this.route.snapshot.params.pedidoId;
    this.pedidoService.porId(pedidoId)
      .subscribe((pedido: any) => {
        this.pedido = pedido;
        this.pagamento = { pedido, valor: pedido.total };
        this.supermercadoService.tiposPagamento(pedido.supermercado)
          .subscribe(tiposPagamento => this.tiposPagamento = tiposPagamento);
      });
  }

  criaPagamento() {
    this.pagamentoService.cria(this.pagamento)
      .subscribe(pagamento => {
        this.pagamento = pagamento;
      });
  }

  confirmaPagamento() {
    this.pagamentoService.confirma(this.pagamento)
      .subscribe(pagamento => this.router.navigateByUrl(`pedidos/${pagamento.pedido.id}/situacao`));
  }

  cancelaPagamento() {
    this.pagamentoService.cancela(this.pagamento)
      .subscribe(() => this.router.navigateByUrl(``));
  }

}
