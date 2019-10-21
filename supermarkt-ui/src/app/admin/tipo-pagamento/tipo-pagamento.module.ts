import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConfirmationService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { TipoPagamentoBuscaComponent } from './tipo-pagamento-busca/tipo-pagamento-busca.component';
import { TipoPagamentoFormularioComponent } from './tipo-pagamento-formulario/tipo-pagamento-formulario.component';
import { TipoPagamentoGradeComponent } from './tipo-pagamento-grade/tipo-pagamento-grade.component';
import { TipoPagamentoRoutingModule } from './tipo-pagamento-routing.module';

import { TipoPagamentoService } from './tipo-pagamento.service';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    TipoPagamentoFormularioComponent,
    TipoPagamentoGradeComponent,
    TipoPagamentoBuscaComponent],
  imports: [
    CommonModule,
    TipoPagamentoRoutingModule,
    MessagesModule,
    MessageModule,
    RadioButtonModule,
    RouterModule,
    TableModule,
    TooltipModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    InputMaskModule,
    InputTextModule,
    ConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    PipesModule
  ],
  providers: [TipoPagamentoService, ConfirmationService]
})
export class TipoPagamentoModule { }
