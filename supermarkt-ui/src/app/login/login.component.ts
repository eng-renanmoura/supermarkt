import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginInfo: any = {};

  constructor(private router: Router,
              private autenticacaoService: AutenticacaoService) { }

  efetuaLogin() {
    this.autenticacaoService.login(this.loginInfo)
      .subscribe(() => this.router.navigate(['']));
  }

}
