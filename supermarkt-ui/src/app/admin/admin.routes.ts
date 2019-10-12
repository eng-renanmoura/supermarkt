import { RouterModule, Routes } from '@angular/router';

import { AutorizacaoGuard } from '../guards/autorizacao.guard';

import { CategoriaSearchComponent } from './categoria/categoria-search/categoria-search.component';

const routes: Routes = [
  {
    path: 'admin/categorias',
    component: CategoriaSearchComponent,
    canActivate: [AutorizacaoGuard],
    data: { role: 'ADMIN'}
  },
];

export const adminRoutes = RouterModule.forChild(routes);
