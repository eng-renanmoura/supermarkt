import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DirectivesModule } from '../../shared/directives/directives.module';
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
    DirectivesModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
  ]
})
export class TemplateModule { }
