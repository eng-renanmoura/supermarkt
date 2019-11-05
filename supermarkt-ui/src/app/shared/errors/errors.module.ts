import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorsComponent } from './errors-component/errors.component';
import { ErrorsHandler } from './errors-handler';
import { ErrorsService } from './errors.service';
import { ServerErrorInterceptor } from './server-errors-interceptor';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ErrorsComponent
  ],
  providers: [
    ErrorsService,
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    },
  ]
})
export class ErrorsModule { }
