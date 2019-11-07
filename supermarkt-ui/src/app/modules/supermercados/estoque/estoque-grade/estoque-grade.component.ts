import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemEstoque } from '../../modelos/item-estoque';

@Component({
  selector: 'app-estoque-grade',
  templateUrl: './estoque-grade.component.html',
  styleUrls: ['./estoque-grade.component.scss']
})
export class EstoqueGradeComponent {

  @Input() itensEstoque: ItemEstoque[];

  @Output() delete = new EventEmitter();

  handleDelete(itemEstoque: ItemEstoque): void {
    this.delete.emit(itemEstoque);
  }

}
