import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DirectivesModule } from './directives/directives.module';
import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { ServerErrorInterceptor } from './interceptors/server-errors-interceptor';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule
  ],
  exports: [
    PipesModule,
    DirectivesModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor , multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor , multi: true},
  ]
})
export class SharedModule { }
