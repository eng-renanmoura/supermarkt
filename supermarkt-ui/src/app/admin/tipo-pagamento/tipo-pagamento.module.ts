import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { PipesModule } from '../../pipes/pipes.module';
import { TipoPagamentoBuscaComponent } from './tipo-pagamento-busca/tipo-pagamento-busca.component';
import { TipoPagamentoFormularioComponent } from './tipo-pagamento-formulario/tipo-pagamento-formulario.component';
import { TipoPagamentoGradeComponent } from './tipo-pagamento-grade/tipo-pagamento-grade.component';
import { TipoPagamentoRoutingModule } from './tipo-pagamento-routing.module';
import { TipoPagamentoService } from './tipo-pagamento.service';


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
