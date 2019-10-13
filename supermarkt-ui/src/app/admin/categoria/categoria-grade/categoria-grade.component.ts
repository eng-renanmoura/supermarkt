import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categoria-grade',
  templateUrl: './categoria-grade.component.html',
  styleUrls: ['./categoria-grade.component.scss']
})
export class CategoriaGradeComponent implements OnInit {

  @Input() categorias = [];

  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleDelete(categoria) {
    this.delete.emit(categoria);
}

}
