import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { adminRoutes } from './admin.routes';
import { CategoriaModule } from './categoria/categoria.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CategoriaModule,
    FormsModule,
    adminRoutes ]
})
export class AdminModule { }
