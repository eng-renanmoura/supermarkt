import { Component, OnInit } from '@angular/core';
import { TipoPagamentoService } from '../tipo-pagamento.service';
import { ConfirmationService } from 'primeng/api';

import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-tipo-pagamento-busca',
  templateUrl: './tipo-pagamento-busca.component.html',
  styleUrls: ['./tipo-pagamento-busca.component.scss'],
  providers: [MessageService]
})
export class TipoPagamentoBuscaComponent implements OnInit {

  tipos = [];
  inputSearch;

  constructor(
    private tipoPagamentoService: TipoPagamentoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.loadTiposPagamento();
  }

  dialogDelete(item) {
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja excluir este item?',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.deleteTipo(item);
        },
        reject: () => {
        }
    });
  }

  getTiposDePagamentoByName(value) {
    this.tipoPagamentoService.getByName(value)
      .subscribe(
        tipos => {
          this.tipos = tipos;
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
        }
      );
  }

  private loadTiposPagamento() {
    this.tipoPagamentoService.getTiposPagamento()
        .subscribe(
          tipos => {
            this.tipos = tipos;
          },
          error => {
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
          }
        );
  }

  private deleteTipo(tipo) {
    this.tipoPagamentoService.remove(tipo)
      .subscribe(
        () => {
          this.loadTiposPagamento();
          this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
        }
      );
  }

}
