import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { SupermercadoService } from '../supermercado.service';

@Component({
  selector: 'app-supermercado-formulario',
  templateUrl: './supermercado-formulario.component.html',
  styleUrls: ['./supermercado-formulario.component.scss'],
  providers: [MessageService]
})
export class SupermercadoFormularioComponent implements OnInit {

  supermercadoForm: FormGroup;
  idSupermercado = '';
  supermercado = {};

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private supermercadoService: SupermercadoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idSupermercado = this.route.snapshot.params.idSupermercado;
    if (this.idSupermercado) {
        this.supermercadoService.getSupermercadoById(this.idSupermercado)
            .subscribe( categoria => {
                this.updateItemForm(categoria);
            },
            erro => {
              this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar a operação. Tente novamente'});
            }
        );
    }

    this.supermercadoForm = this.fb.group({
      id: null,
      nome: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
      cnpj: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
      descricao: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
      cep: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
      endereco: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
      taxaDeEntregaEmReais: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
      tempoDeEntregaMinimoEmMinutos: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
      tempoDeEntregaMaximoEmMinutos: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
    });
  }

  onSubmit(value: string) {
    this.supermercadoService.salva(value)
      .subscribe(
        () => {
          this.supermercadoForm.reset();
          this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
        },
        erro => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar a operação. Tente novamente'});
        }
      );
  }

  formInvalid() {
    return !this.supermercadoForm.valid;
  }

  private updateItemForm(supermercado) {
    this.supermercadoForm.patchValue({
        tempoDeEntregaMaximoEmMinutos: supermercado.tempoDeEntregaMaximoEmMinutos,
        tempoDeEntregaMinimoEmMinutos: supermercado.tempoDeEntregaMinimoEmMinutos,
        taxaDeEntregaEmReais: supermercado.taxaDeEntregaEmReais,
        endereco: supermercado.endereco,
        cep: supermercado.cep,
        descricao: supermercado.descricao,
        cnpj: supermercado.cnpj,
        nome: supermercado.nome,
        id: supermercado.id
    });
  }

}
