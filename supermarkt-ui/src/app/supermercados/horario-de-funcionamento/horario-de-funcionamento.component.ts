import { Component, OnInit, Input } from '@angular/core';

import { HorarioDeFuncionamentoService } from './horario-de-funcionamento.service';
import { DiaDaSemanaService } from './dia-da-semana.service';

@Component({
  selector: 'app-horario-de-funcionamento',
  templateUrl: './horario-de-funcionamento.component.html',
  styleUrls: ['./horario-de-funcionamento.component.scss']
})
export class HorarioDeFuncionamentoComponent implements OnInit {

  @Input() restaurante: any;
  horariosDeFuncionamento: Array<any> = [];
  horarioDeFuncionamento: any = {};
  diasDaSemana: Array<any> = [];

  displayModalHorario = false;

  constructor(
    private horarioDeFuncionamentoService: HorarioDeFuncionamentoService,
    private diaDaSemanaService: DiaDaSemanaService
  ) {}

  ngOnInit() {
    this.diasDaSemana = this.diaDaSemanaService.diasDaSemana;

    if (this.restaurante.id) {
      this.horarioDeFuncionamentoService.todosDoSupermercado(this.restaurante)
        .subscribe(horarios => this.horariosDeFuncionamento = horarios);
    }
  }

  adiciona(horarioDeFuncionamentoModal) {
    this.horarioDeFuncionamento = {};
    this.showHideDialogEntrega();
  }

  edita(horarioDeFuncionamentoModal, horarioDeFuncionamento) {
    this.horarioDeFuncionamento = Object.assign({}, horarioDeFuncionamento);
    this.showHideDialogEntrega();
  }

  remove(horario) {
    horario.restaurante = this.restaurante;
    this.horarioDeFuncionamentoService.remove(horario).subscribe(() => {
      this.horariosDeFuncionamento = this.horariosDeFuncionamento.filter(h => h !== horario);
    });
  }

  salva() {
    this.horarioDeFuncionamento.restaurante = this.restaurante;
    this.horarioDeFuncionamentoService.salva( this.horarioDeFuncionamento)
      .subscribe(horarioDeFuncionamento => {
        if (this.horarioDeFuncionamento.id) {
          const indice = this.horariosDeFuncionamento.findIndex(f => f.id === horarioDeFuncionamento.id);
          this.horariosDeFuncionamento[indice] = horarioDeFuncionamento;
        } else {
          this.horariosDeFuncionamento.push(horarioDeFuncionamento);
        }
        this.horariosDeFuncionamento = this.horarioDeFuncionamentoService.ordena(this.horariosDeFuncionamento);
        this.horarioDeFuncionamento = {};
        this.showHideDialogEntrega();
      });
  }

  showHideDialogEntrega() {
    this.displayModalHorario = (this.displayModalHorario === true ? false : true);
  }

}
