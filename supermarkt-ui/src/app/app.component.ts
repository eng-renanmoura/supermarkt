import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacaoService } from './services/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'supermarkt-ui';
  user: any;

  constructor(private router: Router,
              private autenticacaoService: AutenticacaoService) {}

  ngOnInit() {
    this.autenticacaoService.currentUser.subscribe(user => this.user = user);
  }

  logout() {
    this.autenticacaoService.logout();
    this.router.navigate(['']);
  }

}
