import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-supermercado-grid',
  templateUrl: './supermercado-grid.component.html',
  styleUrls: ['./supermercado-grid.component.scss']
})
export class SupermercadoGridComponent implements OnInit {

  @Input() supermercados = [];

  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleDelete(supermercado) {
    this.delete.emit(supermercado);
  }

}
