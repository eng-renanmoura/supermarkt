import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './login/usuario';
import { AutenticacaoService } from './services/autenticacao.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'supermarkt-ui';
  user: Usuario;

  constructor(private router: Router,
              private autenticacaoService: AutenticacaoService) {}

  ngOnInit(): void {
    this.autenticacaoService.currentUser.subscribe(user => this.user = user);
  }

  logout(): void {
    this.autenticacaoService.logout();
    this.router.navigate(['']);
  }

}
