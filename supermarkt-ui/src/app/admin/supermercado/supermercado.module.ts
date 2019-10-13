import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

import { SupermercadoCreateAndEditComponent } from './supermercado-create-and-edit/supermercado-create-and-edit.component';
import { SupermercadoGridComponent } from './supermercado-grid/supermercado-grid.component';
import { SupermercadoSearchComponent } from './supermercado-search/supermercado-search.component';

import { SupermercadoService } from './supermercado.service';


@NgModule({
  declarations: [
    SupermercadoCreateAndEditComponent,
    SupermercadoGridComponent,
    SupermercadoSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    CommonModule,
    ConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  exports: [
    SupermercadoCreateAndEditComponent,
    SupermercadoSearchComponent,
  ],
  providers: [SupermercadoService, ConfirmationService]
})
export class SupermercadoModule { }
