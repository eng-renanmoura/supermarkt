import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorizacaoGuard } from '../guards/autorizacao.guard';
import { ListaSupermercadosComponent } from './lista-supermercados/lista-supermercados.component';

const routes: Routes = [
  {
      path: '',
      component: ListaSupermercadosComponent ,
      canActivate: [AutorizacaoGuard],
      data: { role: 'ADMIN'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
