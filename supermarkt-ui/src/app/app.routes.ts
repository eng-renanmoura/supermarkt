import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CategoriaBuscaComponent } from './admin/categoria/categoria-busca/categoria-busca.component';
import { CategoriaFormularioComponent } from './admin/categoria/categoria-formulario/categoria-formulario.component';

import { SupermercadoBuscaComponent } from './admin/supermercado/supermercado-busca/supermercado-busca.component';
import { SupermercadoFormularioComponent } from './admin/supermercado/supermercado-formulario/supermercado-formulario.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin/categorias', component: CategoriaBuscaComponent },
  { path: 'admin/categorias/novo', component: CategoriaFormularioComponent},
  { path: 'admin/categorias/:idCategoria', component: CategoriaFormularioComponent},
  { path: 'admin/supermercados', component: SupermercadoBuscaComponent },
  { path: 'admin/supermercados/novo', component: SupermercadoFormularioComponent},
  { path: 'admin/supermercados/:idSupermercado', component: SupermercadoFormularioComponent},
  { path: '**', redirectTo: '' }];

export const appRoutes = RouterModule.forRoot(routes);
