import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    @Output() showMenu: EventEmitter<any> = new EventEmitter();

    constructor() { }

    toggle(): void {
        this.showMenu.emit();
    }
}
