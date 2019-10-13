import { RouterModule, Routes } from '@angular/router';

import { AutorizacaoGuard } from '../guards/autorizacao.guard';

import { CategoriaBuscaComponent } from './categoria/categoria-busca/categoria-busca.component';

const routes: Routes = [
  {
    path: 'admin/categorias',
    component: CategoriaBuscaComponent,
    canActivate: [AutorizacaoGuard],
    data: { role: 'ADMIN'}
  },
];

export const adminRoutes = RouterModule.forChild(routes);
