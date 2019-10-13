import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemNovoEEditarComponent } from './item-novo-e-editar/item-novo-e-editar.component';
import { ItemGradeComponent } from './item-grade/item-grade.component';
import { ItemBuscaComponent } from './item-busca/item-busca.component';



@NgModule({
  declarations: [ItemNovoEEditarComponent, ItemGradeComponent, ItemBuscaComponent],
  imports: [
    CommonModule
  ]
})
export class ItemModule { }
