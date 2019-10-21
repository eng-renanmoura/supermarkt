import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tipo-pagamento-grade',
  templateUrl: './tipo-pagamento-grade.component.html',
  styleUrls: ['./tipo-pagamento-grade.component.scss']
})
export class TipoPagamentoGradeComponent implements OnInit {

  @Input() tipos = [];

  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleDelete(tipo) {
    this.delete.emit(tipo);
  }
}
