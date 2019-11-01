import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';
import { Usuario } from './usuario';

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
