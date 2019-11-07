import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorsComponent } from './errors-component/errors.component';
import { ErrorsHandler } from './errors-handler';
import { ErrorsService } from './servicos/errors.service';
import { NotificationService } from './servicos/notification.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ErrorsComponent
  ],
  providers: [
    NotificationService,
    ErrorsService,
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
  ]
})
export class ErrorsModule { }
