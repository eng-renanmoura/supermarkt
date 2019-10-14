import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaBuscaComponent } from './categoria-busca/categoria-busca.component';
import { CategoriaFormularioComponent } from './categoria-formulario/categoria-formulario.component';
import { AutorizacaoGuard } from '../../guards/autorizacao.guard';

const routes: Routes = [
    {
        path: '',
        component: CategoriaBuscaComponent ,
        canActivate: [AutorizacaoGuard],
        data: { role: 'ADMIN'}
    },
    {
        path: 'novo',
        component: CategoriaFormularioComponent,
        canActivate: [AutorizacaoGuard],
        data: { role: 'ADMIN'}
    },
    {
        path: ':idCategoria',
        component: CategoriaFormularioComponent,
        canActivate: [AutorizacaoGuard],
        data: { role: 'ADMIN'}
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
