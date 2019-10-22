import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { EstoqueService } from '../estoque.service';

@Component({
  selector: 'app-estoque-formulario',
  templateUrl: './estoque-formulario.component.html',
  styleUrls: ['./estoque-formulario.component.scss'],
  providers: [MessageService]
})
export class EstoqueFormularioComponent implements OnInit {

  estoqueForm: FormGroup;
  idSupermercado = '';
  idItemEstoque = '';
  supermercado = {};

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private estoqueService: EstoqueService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idSupermercado = this.route.snapshot.params.idSupermercado;
    this.idItemEstoque = this.route.snapshot.params.idItemEstoque;

    if (this.idSupermercado) {
        this.estoqueService.getItemEstoqueById(this.idSupermercado, this.idItemEstoque)
            .subscribe( supermercado => {
                this.updateItemForm(supermercado);
            },
            erro => {
              this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar a operação. Tente novamente'});
            }
        );
    }

    this.estoqueForm = this.fb.group({
      id: null,
      nome: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
      descricao: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
      quantidade: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
      preco: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
      precoPromocional: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
    });
  }

  onSubmit(value: string) {
    this.estoqueService.salva(this.idSupermercado, value)
      .subscribe(
        () => {
          this.estoqueForm.reset();
          this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
        },
        erro => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar a operação. Tente novamente'});
        }
      );
  }

  formInvalid() {
    return !this.estoqueForm.valid;
  }

  private updateItemForm(estoque) {
    this.estoqueForm.patchValue({
        precoPromocional: estoque.precoPromocional,
        preco: estoque.preco,
        quantidade: estoque.quantidade,
        descricao: estoque.descricao,
        nome: estoque.nome,
        id: estoque.id
    });
  }

}