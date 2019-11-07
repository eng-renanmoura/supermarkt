import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelos/usuario';
import { AutenticacaoService } from '../servicos/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginInfo: Usuario = {};

  constructor(private router: Router,
              private autenticacaoService: AutenticacaoService) { }

  efetuaLogin(): void {
    this.autenticacaoService.login(this.loginInfo)
      .subscribe(() => this.router.navigate(['']));
  }

}
