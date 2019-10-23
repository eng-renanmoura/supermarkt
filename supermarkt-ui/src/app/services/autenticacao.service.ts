import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private API = environment.baseUrl + '/autenticacao';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  hasRole(roles: string[]): boolean {
    let found = false;
    if (this.currentUserValue && this.currentUserValue.roles) {
      roles.forEach(role => {
        if (this.currentUserValue.roles.includes(role)) {
          found = true;
        }
      });
    }
    return found;
  }

  login(loginInfo): Observable<any> {
    return this.http.post(`${this.API}`, loginInfo)
      .pipe(map((authData: any) => {
        if (authData && authData.token) {
          localStorage.setItem('currentUser', JSON.stringify(authData));
          this.currentUserSubject.next(authData);
        }
        return authData;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  registraParceiro(userInfo: any): Observable<any> {
    return this.http.post(`${this.API}/parceiro`, userInfo);
  }

}
