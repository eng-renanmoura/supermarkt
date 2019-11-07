import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsComponent } from './modules/errors/errors-component/errors.component';


const routes: Routes = [
  { path: 'login', loadChildren: () => import(`./modules/login/login.module`).then(m => m.LoginModule) },
  { path: 'admin', loadChildren: () => import(`./modules/admin/admin.module`).then(m => m.AdminModule) },
  { path: 'pedidos', loadChildren: () => import(`./modules/pedido/pedido.module`).then(m => m.PedidoModule) },
  { path: 'supermercados', loadChildren: () => import(`./modules/supermercados/supermercados.module`).then(m => m.SupermercadosModule) },
  { path: '', redirectTo: 'pedidos', pathMatch: 'full' },
  { path: 'error', component: ErrorsComponent },
  { path: '**', component: ErrorsComponent, data: { error: 404 } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
