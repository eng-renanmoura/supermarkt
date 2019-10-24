import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoPagamentoBuscaComponent } from './tipo-pagamento-busca/tipo-pagamento-busca.component';
import { TipoPagamentoFormularioComponent } from './tipo-pagamento-formulario/tipo-pagamento-formulario.component';
import { AutorizacaoGuard } from '../../guards/autorizacao.guard';

const routes: Routes = [
  {
      path: '',
      component: TipoPagamentoBuscaComponent ,
      canActivate: [AutorizacaoGuard],
      data: { role: ['ADMIN']}
  },
  {
      path: 'novo',
      component: TipoPagamentoFormularioComponent,
      canActivate: [AutorizacaoGuard],
      data: { role: ['ADMIN']}
  },
  {
      path: ':idTipo',
      component: TipoPagamentoFormularioComponent,
      canActivate: [AutorizacaoGuard],
      data: { role: ['ADMIN']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoPagamentoRoutingModule { }
