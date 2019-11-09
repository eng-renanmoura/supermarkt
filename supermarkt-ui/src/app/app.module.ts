import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localeFr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToastModule } from 'primeng/toast';
import { SupermercadoModule } from './admin/supermercado/supermercado.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrosModule } from './erros/erros.module';
import { LoginModule } from './login/login.module';
import { JwtInterceptor } from './shared/interceptors/jwt-interceptor';
import { ServerErrorInterceptor } from './shared/interceptors/server-errors-interceptor';
import { TemplateModule } from './template/template.module';

registerLocaleData(localeFr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TemplateModule,
    SupermercadoModule,
    ErrosModule,
    ToastModule,
    LoginModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor , multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor , multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
