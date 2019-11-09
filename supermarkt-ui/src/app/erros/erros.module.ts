import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrosComponent } from './erros-component/erros.component';
import { ErrosHandler } from './erros-handler';
import { ErrorsService } from './servicos/errors.service';
import { NotificacaoService } from './servicos/notificacao.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ErrosComponent
  ],
  providers: [
    NotificacaoService,
    ErrorsService,
    {
      provide: ErrorHandler,
      useClass: ErrosHandler,
    },
  ]
})
export class ErrosModule { }
