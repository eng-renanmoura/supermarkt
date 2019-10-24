import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstoqueBuscaComponent } from './estoque-busca/estoque-busca.component';
import { EstoqueFormularioComponent } from './estoque-formulario/estoque-formulario.component';
import { AutorizacaoGuard } from '../../guards/autorizacao.guard';

const routes: Routes = [
  {
      path: '',
      component: EstoqueBuscaComponent ,
      canActivate: [AutorizacaoGuard],
      data: { role: ['ADMIN', 'SUPERMERCADO']}
  },
  {
      path: 'novo',
      component: EstoqueFormularioComponent,
      canActivate: [AutorizacaoGuard],
      data: { role: ['ADMIN']}
  },
  {
      path: ':idItemEstoque',
      component: EstoqueFormularioComponent,
      canActivate: [AutorizacaoGuard],
      data: { role: ['ADMIN']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
