import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrosModule } from '../erros/erros.module';
import { NotificacaoService } from '../erros/servicos/notificacao.service';

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
