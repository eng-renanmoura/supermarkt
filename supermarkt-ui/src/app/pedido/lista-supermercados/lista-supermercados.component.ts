import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supermercado } from 'src/app/admin/supermercado/modelos/supermercado';
import { SupermercadoService } from '../../admin/supermercado/servicos/supermercado.service';
import { SupermercadoComAvaliacao } from '../modelos/supermercado-com-avaliacao';
import { PedidoService } from '../servicos/pedido.service';

@Component({
  selector: 'app-lista-supermercados',
  templateUrl: './lista-supermercados.component.html',
  styleUrls: ['./lista-supermercados.component.scss']
})
export class ListaSupermercadosComponent implements OnInit {

  supermercadosComAvaliacao: Array<SupermercadoComAvaliacao>;

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private supermercadoService: SupermercadoService
  ) { }

  ngOnInit(): void {
    this.pedidoService.getSupermercadosComAvaliacao().subscribe(supermercados => {
      this.supermercadosComAvaliacao = supermercados;
    });
  }

  escolher(supermercado: Supermercado): void {
    this.router.navigateByUrl(`/pedidos/supermercado/${supermercado.id}`);
  }

  favoritar(supermercado: Supermercado): void {
    //throw new Error('My Pretty Error');
    supermercado.aprovado = supermercado.aprovado ? false : true;
    this.supermercadoService.favoritar(supermercado).subscribe();
  }

}
