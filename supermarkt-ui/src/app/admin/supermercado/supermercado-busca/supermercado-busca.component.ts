import { Component, OnInit } from '@angular/core';
import { SupermercadoService } from '../supermercado.service';
import { ConfirmationService } from 'primeng/api';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-supermercado-busca',
  templateUrl: './supermercado-busca.component.html',
  styleUrls: ['./supermercado-busca.component.scss'],
  providers: [MessageService]
})
export class SupermercadoBuscaComponent implements OnInit {

  supermercados = [];
  inputSearch;

  constructor(
    private supermercadoService: SupermercadoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.loadSupermercados();
  }

  dialogDelete(item) {
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja excluir este item?',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.deleteSupermercado(item);
        },
        reject: () => {
        }
    });
  }

  getSupermercadosByName(value) {
    this.supermercadoService.getByName(value)
      .subscribe(
        supermercados => {
          this.supermercados = supermercados;
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
        }
      );
  }

  private loadSupermercados() {
    this.supermercadoService.getSupermercados()
        .subscribe(
          supermercados => {
            this.supermercados = supermercados;
          },
          error => {
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
          }
        );
  }

  private deleteSupermercado(supermercado) {
    this.supermercadoService.remove(supermercado)
      .subscribe(
        () => {
          this.loadSupermercados();
          this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
        }
      );
  }

}
