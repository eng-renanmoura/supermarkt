import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CategoriaSearchComponent } from './admin/categoria/categoria-search/categoria-search.component';
import { CategoriaCreateAndEditComponent } from './admin/categoria/categoria-create-and-edit/categoria-create-and-edit.component';

import { SupermercadoSearchComponent } from './admin/supermercado/supermercado-search/supermercado-search.component';
import { SupermercadoCreateAndEditComponent } from './admin/supermercado/supermercado-create-and-edit/supermercado-create-and-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin/categorias', component: CategoriaSearchComponent },
  { path: 'admin/categorias/novo', component: CategoriaCreateAndEditComponent},
  { path: 'admin/categorias/:idCategoria', component: CategoriaCreateAndEditComponent},
  { path: 'admin/supermercados', component: SupermercadoSearchComponent },
  { path: 'admin/supermercados/novo', component: SupermercadoCreateAndEditComponent},
  { path: 'admin/supermercados/:idSupermercado', component: SupermercadoCreateAndEditComponent},
  { path: '**', redirectTo: '' }];

export const appRoutes = RouterModule.forRoot(routes);
