import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupermercadoService {

  private API = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSupermercados(): Observable<any> {
    return this.http.get(`${this.API}/supermercados`);
  }

  salva(categoria: any): Observable<any> {
    if (categoria.id) {
      return this.http.put(`${this.API}/admin/supermercados/${categoria.id}`, categoria);
    }
    return this.http.post(`${this.API}/admin/supermercados`, categoria);
  }

  remove(categoria: any): Observable<any> {
    return this.http.delete(`${this.API}/admin/supermercados/${categoria.id}`);
  }

  getByName(nome: any): Observable<any> {
    return this.http.get(`${this.API}/supermercados/${nome}`);
  }

  getSupermercadoById(id): Observable<any> {
    return this.http.get(`${this.API}/admin/supermercados/${id}`);
  }

  parceiroPorId(id): Observable<any> {
    return this.http.get(`${this.API}/parceiros/supermercados/${id}`);
  }

  formasDePagamento(supermercado): Observable<any>  {
    return this.http.get(`${this.API}/supermercados/${supermercado.id}/formas-de-pagamento`);
  }
}