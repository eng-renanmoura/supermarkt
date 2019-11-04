import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DirectiveModule } from '../directive/directive.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule,
    DirectiveModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
  ]
})
export class TemplateModule { }
