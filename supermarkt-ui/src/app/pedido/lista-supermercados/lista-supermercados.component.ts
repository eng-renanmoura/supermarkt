import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supermercado } from 'src/app/admin/supermercado/modelos/supermercado';
import { NotificationService } from 'src/app/errors/servicos/notification.service';
import { SupermercadoService } from '../../admin/supermercado/servicos/supermercado.service';
import { SupermercadoComAvaliacao } from '../modelos/supermercado-com-avaliacao';
import { PedidoService } from '../servicos/pedido.service';

@Component({
  selector: 'app-lista-supermercados',
  templateUrl: './lista-supermercados.component.html',
  styleUrls: ['./lista-supermercados.component.scss'],
})
export class ListaSupermercadosComponent implements OnInit {

  supermercadosComAvaliacao: Array<SupermercadoComAvaliacao>;

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private supermercadoService: SupermercadoService,
    private notificaoServico: NotificationService,
  ) { }

  ngOnInit(): void {
    this.pedidoService.getSupermercadosComAvaliacao()
    .subscribe(supermercados => {
      this.supermercadosComAvaliacao = supermercados;
    },
    error => {
        this.notificaoServico.notify({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os supermercados.'});
      }
    );
  }

  escolher(supermercado: Supermercado): void {
    this.router.navigateByUrl(`/pedidos/supermercado/${supermercado.id}`);
  }

  favoritar(supermercado: Supermercado): void {
    //try{
      //supermercado = undefined;
      //throw new Error('Erro teste djakdjaskl jadskldj aslkdj aklsjd aklsjd aksjd ka qkdjksdjaksdj adksadksald kasl;dkasl;dk asl;dkasl;dkasl;dkald kk l kqdl; keql kql kl kld keql;dk ql;dk qldk q dkql;kdwqldklq k k dqlwkdqlw;d kql kajdaskljd klasjd klsaj dk');
      
      supermercado.aprovado = supermercado.aprovado ? false : true;
      this.supermercadoService.favoritar(supermercado).subscribe( () => {
          this.notificaoServico.notify({severity: 'success', summary: 'Sucesso', detail: 'Supermercado favoritado.'});
        }
      );
    //} catch (e) {
    //  console.error(e);
    //  this.notificaoServico.notify({severity: 'error', summary: 'Erro', detail: 'Não foi possível favoritar o supermercado.'});
    //}
  }

}
