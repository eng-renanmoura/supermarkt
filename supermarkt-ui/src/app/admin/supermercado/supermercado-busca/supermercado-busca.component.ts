import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Supermercado } from '../supermercado';
import { SupermercadoService } from '../supermercado.service';


@Component({
  selector: 'app-supermercado-busca',
  templateUrl: './supermercado-busca.component.html',
  styleUrls: ['./supermercado-busca.component.scss'],
  providers: [MessageService]
})
export class SupermercadoBuscaComponent implements OnInit {

  supermercados: Supermercado[];
  inputSearch;

  constructor(
    private supermercadoService: SupermercadoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loadSupermercados();
  }

  dialogDelete(supermercado: Supermercado): void {
    this.confirmationService.confirm({
        message: 'Tem certeza que deseja excluir este item?',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.deleteSupermercado(supermercado);
        },
        reject: () => {
        }
    });
  }

  getSupermercadosByName(nome: string): void {
    this.supermercadoService.getByName(nome)
      .subscribe(
        supermercados => {
          this.supermercados = supermercados;
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
        }
      );
  }

  private loadSupermercados(): void {
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

  private deleteSupermercado(supermercado: Supermercado): void {
    this.supermercadoService.remove(supermercado)
      .subscribe(
        () => {
          this.loadSupermercados();
          this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível excluir o registro'});
        }
      );
  }

}
