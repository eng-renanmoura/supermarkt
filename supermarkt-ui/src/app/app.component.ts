import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { NotificationService } from './errors/servicos/notification.service';
import { Autenticacao } from './login/modelos/autenticacao';
import { AutenticacaoService } from './login/servicos/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  title = 'supermarkt-ui';
  user: Autenticacao;
  showMenu = true;

  notification: Message;
  showNotification: boolean;

  constructor(private router: Router,
              private messageService: MessageService,
              private autenticacaoService: AutenticacaoService,
              private notificationService: NotificationService,
              ) {}

  ngOnInit(): void {
    this.autenticacaoService.currentUser.subscribe(user => this.user = user);
    this.notificationService
            .notification$
            .subscribe(message => {
              this.messageService.add(message);
              this.notification = message;
              this.showNotification = true;
            });
  }

  logout(): void {
    this.autenticacaoService.logout();
    this.router.navigate(['']);
  }

}
