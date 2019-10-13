import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-create-and-edit',
  templateUrl: './categoria-create-and-edit.component.html',
  styleUrls: ['./categoria-create-and-edit.component.scss'],
  providers: [MessageService]
})
export class CategoriaCreateAndEditComponent implements OnInit {

  categoriaForm: FormGroup;
  idCategoria = '';
  categoria = {};

  constructor(
      private fb: FormBuilder,
      private messageService: MessageService,
      private categoriaService: CategoriaService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idCategoria = this.route.snapshot.params.idCategoria;
    if (this.idCategoria) {
        this.categoriaService.getCategoriaById(this.idCategoria)
            .subscribe( categoria => {
                this.updateItemForm(categoria);
            },
            erro => {
              this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar a operação. Tente novamente'});
            }
        );
    }

    this.categoriaForm = this.fb.group({
      id: null,
      nome: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
    });
  }

  onSubmit(value: string) {
    this.categoriaService.salva(value)
      .subscribe(
        () => {
          this.categoriaForm.reset();
          this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
        },
        erro => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar a operação. Tente novamente'});
        }
      );
  }

  formInvalid() {
    return !this.categoriaForm.valid;
  }

  private updateItemForm(categoria) {
    this.categoriaForm.patchValue({
        nome: categoria.nome,
        id: categoria.id
    });
  }

}
