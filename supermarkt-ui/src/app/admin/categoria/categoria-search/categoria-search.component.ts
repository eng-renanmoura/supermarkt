import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import {ConfirmationService} from 'primeng/api';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-categoria-search',
  templateUrl: './categoria-search.component.html',
  styleUrls: ['./categoria-search.component.scss'],
  providers: [MessageService]
})
export class CategoriaSearchComponent implements OnInit {

  categorias = [];
  inputSearch;

  constructor(
    private categoriaService: CategoriaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.loadCategorias();
  }

  dialogDelete(item) {
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja excluir este item?',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.deleteCategoria(item);
        },
        reject: () => {
        }
    });
  }

  getCategoriasByName(value) {
    this.categoriaService.getByName(value)
      .subscribe(
        categorias => {
          this.categorias = categorias;
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
        }
      );
  }

  private loadCategorias() {
    this.categoriaService.getCategorias()
        .subscribe(
          categorias => {
            this.categorias = categorias;
          },
          error => {
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
          }
        );
  }

  private deleteCategoria(categoria) {
    this.categoriaService.remove(categoria)
      .subscribe(
        () => {
          this.loadCategorias();
          this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
        }
      );
  }

}
