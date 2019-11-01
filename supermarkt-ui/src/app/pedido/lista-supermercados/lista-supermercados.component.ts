import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supermercado } from 'src/app/admin/supermercado/supermercado';
import { PedidoService } from '../pedido.service';
import { SupermercadoComAvaliacao } from '../supermercado-com-avaliacao';


@Component({
  selector: 'app-lista-supermercados',
  templateUrl: './lista-supermercados.component.html',
  styleUrls: ['./lista-supermercados.component.scss']
})
export class ListaSupermercadosComponent implements OnInit {

  supermercadosComAvaliacao: Array<SupermercadoComAvaliacao>;

  constructor(
    private pedidoService: PedidoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pedidoService.getSupermercadosComAvaliacao().subscribe(supermercados => {
      this.supermercadosComAvaliacao = supermercados;
    });
  }

  escolher(supermercado: Supermercado): void {
    this.router.navigateByUrl(`/pedidos/supermercado/${supermercado.id}`);
  }

}
