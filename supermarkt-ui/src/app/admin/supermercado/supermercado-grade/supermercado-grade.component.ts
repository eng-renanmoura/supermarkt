import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-supermercado-grade',
  templateUrl: './supermercado-grade.component.html',
  styleUrls: ['./supermercado-grade.component.scss']
})
export class SupermercadoGradeComponent implements OnInit {

  @Input() supermercados = [];

  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleDelete(supermercado) {
    this.delete.emit(supermercado);
  }

}
