import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../shared/pipes/pipes.module';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    PipesModule
   ]
})
export class AdminModule { }
