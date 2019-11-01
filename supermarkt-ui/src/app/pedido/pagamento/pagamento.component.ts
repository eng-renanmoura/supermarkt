import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupermercadoService } from 'src/app/admin/supermercado/supermercado.service';
import { TipoPagamento } from 'src/app/admin/tipo-pagamento/tipo-pagamento';
import { PedidoService } from 'src/app/pedido/pedido.service';
import { Pedido } from '../pedido';
import { Pagamento } from './pagamento';
import { PagamentoService } from './pagamento.service';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements OnInit {

  pedido: Pedido;
  tiposPagamento: TipoPagamento;
  pagamento: Pagamento;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pagamentoService: PagamentoService,
    private pedidoService: PedidoService,
    private supermercadoService: SupermercadoService
  ) { }

  ngOnInit(): void {
    const pedidoId = this.route.snapshot.params.pedidoId;
    this.pedidoService.porId(pedidoId)
      .subscribe((pedido: Pedido) => {
        this.pedido = pedido;
        this.pagamento = new Pagamento();
        this.pagamento.pedido = pedido;
        this.pagamento.valor = pedido.total;
        this.supermercadoService.tiposPagamento(pedido.supermercado)
          .subscribe(tiposPagamento => this.tiposPagamento = tiposPagamento);
      });
  }

  criaPagamento(): void {
    this.pagamentoService.cria(this.pagamento)
      .subscribe(pagamento => {
        this.pagamento = pagamento;
      });
  }

  confirmaPagamento(): void {
    this.pagamentoService.confirma(this.pagamento)
      .subscribe(pagamento => this.router.navigateByUrl(`pedidos/${pagamento.pedido.id}/situacao`));
  }

  cancelaPagamento(): void {
    this.pagamentoService.cancela(this.pagamento)
      .subscribe(() => this.router.navigateByUrl(``));
  }

}
