import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-estoque-grade',
  templateUrl: './estoque-grade.component.html',
  styleUrls: ['./estoque-grade.component.scss']
})
export class EstoqueGradeComponent implements OnInit {

  @Input() itensEstoque = [];

  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleDelete(itemEstoque) {
    this.delete.emit(itemEstoque);
  }

}
