import { Component, OnInit } from '@angular/core';
import { EstoqueService } from '../estoque.service';
import { ConfirmationService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-estoque-busca',
  templateUrl: './estoque-busca.component.html',
  styleUrls: ['./estoque-busca.component.scss']
})
export class EstoqueBuscaComponent implements OnInit {

  itensEstoque = [];
  inputSearch;
  idSupermercado = '';

  constructor(
    private estoqueService: EstoqueService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idSupermercado = this.route.snapshot.params.idSupermercado;
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
    this.estoqueService.getByName(this.idSupermercado, value)
      .subscribe(
        supermercados => {
          this.itensEstoque = supermercados;
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
        }
      );
  }

  private loadEstoque() {
    this.estoqueService.estoquePorSupermercadoId(this.idSupermercado)
        .subscribe(
          supermercados => {
            this.itensEstoque = supermercados;
          },
          error => {
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
          }
        );
  }

  private deleteItemEstoque(itemEstoque) {
    this.estoqueService.remove(this.idSupermercado, itemEstoque)
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
