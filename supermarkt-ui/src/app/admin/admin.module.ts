import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { adminRoutes } from './admin.routes';
import { CategoriaModule } from './categoria/categoria.module';
import { FormaDePagamentoNovoEEditarComponent } from './forma-de-pagamento-novo-e-editar/forma-de-pagamento-novo-e-editar.component';
import { FormaDePagamentoComponent } from './forma-de-pagamento/forma-de-pagamento.component';

@NgModule({
  declarations: [
  FormaDePagamentoNovoEEditarComponent,
  FormaDePagamentoComponent],
  imports: [
    CommonModule,
    CategoriaModule,
    FormsModule,
    adminRoutes ]
})
export class AdminModule { }
