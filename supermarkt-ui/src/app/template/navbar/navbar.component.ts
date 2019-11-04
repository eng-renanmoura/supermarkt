import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../login/usuario';
import { AutenticacaoService } from '../../services/autenticacao.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    @Output() showMenu: EventEmitter<any> = new EventEmitter();

    @Input() user: Usuario;

    constructor(private router: Router,
                private autenticacaoService: AutenticacaoService) {}

    ngOnInit(): void {
        this.autenticacaoService.currentUser.subscribe(user => this.user = user);
    }

    logout(): void {
        this.autenticacaoService.logout();
        this.router.navigate(['']);
    }

    toggle(): void {
        this.showMenu.emit();
    }

}
