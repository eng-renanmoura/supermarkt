import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoGuard implements CanActivate {

  constructor(private router: Router,
              private autenticacaoService: AutenticacaoService,
              private toaster: ToastrService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const role = next.data.role;
      if (role && this.autenticacaoService.hasRole(role)) {
        return true;
      }
      this.toaster.error('Efetue o login para ter acesso.', 'Acesso negado');
      this.router.navigate(['/login']);
      return false;
  }

}
