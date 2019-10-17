import { Component, OnInit, Input } from '@angular/core';

import { FormaDePagamentoService } from './forma-de-pagamento.service';

@Component({
  selector: 'app-forma-de-pagamento',
  templateUrl: './forma-de-pagamento.component.html',
  styleUrls: ['./forma-de-pagamento.component.scss']
})
export class FormaDePagamentoComponent implements OnInit {

  @Input() supermercado: any;
  todasAsFormasDePagamento: Array<any>;
  formasDePagamentoDoSupermercado: Array<any>;
  formaDePagamentoParaAdicionar: any = {};

  constructor(
    private formaDePagamentoService: FormaDePagamentoService
  ) { }

  ngOnInit() {
    this.formaDePagamentoService.todas()
      .subscribe(todasAsFormas => this.todasAsFormasDePagamento = todasAsFormas);

    this.formaDePagamentoService.doSupermercado(this.supermercado)
      .subscribe((formasDePagamento: any) => this.formasDePagamentoDoSupermercado = formasDePagamento);
  }

  adicionaFormaDePagamentoAoSupermercado() {
    if (this.formaDePagamentoParaAdicionar) {
      const jaTem = this.formasDePagamentoDoSupermercado.some(f => f.id === this.formaDePagamentoParaAdicionar.id);
      if (!jaTem) {
        this.formaDePagamentoParaAdicionar.supermercado = this.supermercado;
        this.formaDePagamentoService.adicionaAoSupermercado(this.formaDePagamentoParaAdicionar)
          .subscribe(() => {
              this.formasDePagamentoDoSupermercado.push(this.formaDePagamentoParaAdicionar);
              this.formasDePagamentoDoSupermercado.sort((a,b) => a.nome.localeCompare(b.nome));
              this.formaDePagamentoParaAdicionar = {};
          });
      }
    }
  }

  remove(formaDePagamento) {
    formaDePagamento.supermercado = this.supermercado;
    this.formaDePagamentoService.removeDoSupermercado(formaDePagamento)
      .subscribe(() => {
        this.formasDePagamentoDoSupermercado = this.formasDePagamentoDoSupermercado.filter(f => f !== formaDePagamento);
      });
  }

}
