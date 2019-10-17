import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorizacaoGuard } from '../guards/autorizacao.guard';
import { ListaSupermercadosComponent } from './lista-supermercados/lista-supermercados.component';

import { SupermercadoComponent } from './supermercado/supermercado.component';
import { SituacaoComponent } from './situacao/situacao.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

const routes: Routes = [
  {
    path: '',
    component: ListaSupermercadosComponent ,
  },
  {
    path: 'supermercado/:supermercadoId',
    component: SupermercadoComponent
  },
  {
    path: ':cep/restaurante/:restauranteId',
    component: SupermercadoComponent
  },
  {
    path: ':pedidoId/pagamento',
    component: PagamentoComponent
  },
  {
    path: ':pedidoId/situacao',
    component: SituacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
