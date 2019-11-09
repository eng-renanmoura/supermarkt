import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/errors/servicos/notification.service';
import { AutenticacaoService } from 'src/app/login/servicos/autenticacao.service';


@Injectable({
  providedIn: 'root'
})
export class AutorizacaoGuard implements CanActivate {

  constructor(private router: Router,
              private autenticacaoService: AutenticacaoService,
              private toaster: ToastrService,
              private notificaoServico: NotificationService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const role = next.data.role;
      if (role && this.autenticacaoService.hasRole(role)) {
        return true;
      }
      this.notificaoServico.notify({severity: 'warn', summary: 'Aviso', detail: 'Efetue o login para ter acesso.'});
      this.router.navigate(['/login']);
      return false;
  }

}
