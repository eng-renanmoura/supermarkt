import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrosModule } from '../erros/erros.module';
import { NotificacaoService } from './services/notificacao.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErrosModule
  ],
  providers: [
    NotificacaoService,
  ],
})
export class SharedModule { }
