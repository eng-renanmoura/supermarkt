import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pt';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { ErrorHandlingInterceptor } from './interceptors/error-handling-interceptor';
import { JwtInterceptor } from './interceptors/jwt-interceptor';

import { TemplateModule } from './template/template.module';

import { SupermercadoModule } from './admin/supermercado/supermercado.module';

registerLocaleData(localeFr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TemplateModule,
    SupermercadoModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor , multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor , multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
