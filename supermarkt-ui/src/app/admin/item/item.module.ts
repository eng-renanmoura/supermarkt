import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFormularioComponent } from './item-formulario/item-formulario.component';
import { ItemGradeComponent } from './item-grade/item-grade.component';
import { ItemBuscaComponent } from './item-busca/item-busca.component';



@NgModule({
  declarations: [ItemFormularioComponent, ItemGradeComponent, ItemBuscaComponent],
  imports: [
    CommonModule
  ]
})
export class ItemModule { }
