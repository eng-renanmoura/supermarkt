import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

import { EstoqueBuscaComponent } from './estoque-busca/estoque-busca.component';
import { EstoqueFormularioComponent } from './estoque-formulario/estoque-formulario.component';
import { EstoqueGradeComponent } from './estoque-grade/estoque-grade.component';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueService } from './estoque.service';

@NgModule({
  declarations: [EstoqueBuscaComponent, EstoqueFormularioComponent, EstoqueGradeComponent],
  imports: [
    MessagesModule,
    EstoqueRoutingModule,
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
    CommonModule,
    ConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [EstoqueService, ConfirmationService]
})
export class EstoqueModule { }
