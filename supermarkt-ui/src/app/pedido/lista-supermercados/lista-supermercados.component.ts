import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-lista-supermercados',
  templateUrl: './lista-supermercados.component.html',
  styleUrls: ['./lista-supermercados.component.scss']
})
export class ListaSupermercadosComponent implements OnInit {

  supermercadosComAvaliacao: Array<any>;

  constructor(
    private pedidoService: PedidoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pedidoService.getSupermercadosComAvaliacao().subscribe(supermercados => {
      this.supermercadosComAvaliacao = supermercados;
    });
  }

  escolher(supermercado) {
    this.router.navigateByUrl(`/pedidos/supermercado/${supermercado.id}`);
  }

}
