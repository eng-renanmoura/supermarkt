import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Supermercado } from 'src/app/admin/supermercado/modelos/supermercado';
import { SupermercadoService } from '../../../admin/supermercado/servicos/supermercado.service';
import { ItemEstoque } from '../../modelos/item-estoque';
import { EstoqueService } from '../../servicos/estoque.service';


@Component({
  selector: 'app-estoque-busca',
  templateUrl: './estoque-busca.component.html',
  styleUrls: ['./estoque-busca.component.scss'],
  providers: [MessageService]
})
export class EstoqueBuscaComponent implements OnInit {

  itensEstoque: ItemEstoque[];
  inputSearch;
  supermercadoId: number;
  supermercado: Supermercado;

  constructor(
    private estoqueService: EstoqueService,
    private supermercadoService: SupermercadoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.supermercadoId = this.route.snapshot.params.supermercadoId;
    this.supermercadoService.getSupermercadoById(this.supermercadoId)
        .subscribe( supermercado => this.supermercado = supermercado);
    this.loadEstoque();
  }

  dialogDelete(item: ItemEstoque): void {
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

  getItemEstoqueByName(nome: string): void {
    this.estoqueService.getByName(this.supermercadoId, nome)
      .subscribe(
        itensEstoque => {
          this.itensEstoque = itensEstoque;
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
        }
      );
  }

  private loadEstoque(): void {
    this.estoqueService.detalhaEstoqueDoSupermercado(this.supermercadoId)
        .subscribe(
          itensEstoque => {
            this.itensEstoque = itensEstoque;
          },
          error => {
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
          }
        );
  }

  private deleteItemEstoque(itemEstoque: ItemEstoque): void {
    this.estoqueService.remove(this.supermercadoId, itemEstoque.id)
      .subscribe(
        () => {
          this.loadEstoque();
          this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível remover o item.'});
        }
      );
  }

}
