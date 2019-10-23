import { Component, OnInit } from '@angular/core';
import { EstoqueService } from '../estoque.service';
import { ConfirmationService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

import { SupermercadoService } from '../../../admin/supermercado/supermercado.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-estoque-busca',
  templateUrl: './estoque-busca.component.html',
  styleUrls: ['./estoque-busca.component.scss'],
  providers: [MessageService]
})
export class EstoqueBuscaComponent implements OnInit {

  itensEstoque = [];
  inputSearch;
  supermercadoId = '';
  supermercado;

  constructor(
    private estoqueService: EstoqueService,
    private supermercadoService: SupermercadoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.supermercadoId = this.route.snapshot.params.supermercadoId;
    this.supermercadoService.getSupermercadoById(this.supermercadoId)
        .subscribe( supermercado => this.supermercado = supermercado);
    this.loadEstoque();
  }

  dialogDelete(item) {
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja excluir este item?',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.deleteItemEstoque(item);
        },
        reject: () => {
        }
    });
  }

  getItemEstoqueByName(value) {
    this.estoqueService.getByName(this.supermercadoId, value)
      .subscribe(
        itensEstoque => {
          this.itensEstoque = itensEstoque;
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
        }
      );
  }

  private loadEstoque() {
    this.estoqueService.estoquePorSupermercadoId(this.supermercadoId)
        .subscribe(
          itensEstoque => {
            this.itensEstoque = itensEstoque;
          },
          error => {
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
          }
        );
  }

  private deleteItemEstoque(itemEstoque) {
    this.estoqueService.remove(this.supermercadoId, itemEstoque)
      .subscribe(
        () => {
          this.loadEstoque();
          this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
        }
      );
  }

}
