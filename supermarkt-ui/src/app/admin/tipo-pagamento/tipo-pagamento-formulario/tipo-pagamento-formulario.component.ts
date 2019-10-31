import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TipoPagamentoService } from '../tipo-pagamento.service';

@Component({
  selector: 'app-tipo-pagamento-formulario',
  templateUrl: './tipo-pagamento-formulario.component.html',
  styleUrls: ['./tipo-pagamento-formulario.component.scss'],
  providers: [MessageService]
})
export class TipoPagamentoFormularioComponent implements OnInit {

  tipoForm: FormGroup;
  idTipo = '';
  tipo = {};

  formas: object[];

  constructor(
      private fb: FormBuilder,
      private messageService: MessageService,
      private tipoPagamentoService: TipoPagamentoService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idTipo = this.route.snapshot.params.idTipo;
    if (this.idTipo) {
        this.tipoPagamentoService.getTipoPagamentoById(this.idTipo)
            .subscribe( tipo => {
                this.updateItemForm(tipo);
            },
            erro => {
              this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar a operação. Tente novamente'});
            }
        );
    }

    this.tipoPagamentoService.getFormas()
          .subscribe(formas => {
            this.formas = formas;
          },
          erro => {
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar a operação. Tente novamente'});
          }
        );

    this.tipoForm = this.fb.group({
      id: null,
      nome: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
      forma: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)]))
    });
  }

  onSubmit(value: string) {
    this.tipoPagamentoService.salva(value)
      .subscribe(
        () => {
          this.tipoForm.reset();
          this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
        },
        erro => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar a operação. Tente novamente'});
        }
      );
  }

  formInvalid() {
    return !this.tipoForm.valid;
  }

  private updateItemForm(tipo) {
    this.tipoForm.patchValue({
        forma: tipo.forma,
        nome: tipo.nome,
        id: tipo.id
    });
  }

}
