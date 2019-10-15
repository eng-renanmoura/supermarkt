import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorizacaoGuard } from '../guards/autorizacao.guard';
import { ListaSupermercadosComponent } from './lista-supermercados/lista-supermercados.component';

import { SupermercadoComponent } from './supermercado/supermercado.component';

const routes: Routes = [
  {
      path: '',
      component: ListaSupermercadosComponent ,
  },
  {
    path: 'supermercado/:supermercadoId',
    component: SupermercadoComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
