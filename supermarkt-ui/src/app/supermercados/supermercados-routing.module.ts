import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorizacaoGuard } from '../guards/autorizacao.guard';

import { PedidoPendenteComponent } from './pedido-pendente/pedido-pendente.component';

const routes: Routes = [
  {
    path: ':supermercadoId/pedidos/pendentes',
    component: PedidoPendenteComponent,
    canActivate: [AutorizacaoGuard],
    data: { role: 'SUPERMERCADO'}
  },
  { path: ':supermercadoId/estoque', loadChildren: () => import(`./estoque/estoque.module`).then(m => m.EstoqueModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupermercadosRoutingModule { }
