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
    return this.http.get(`${this.API}/admin/supermercados`);
  }

  getByName(nome: any): Observable<any> {
    return this.http.get(`${this.API}/admin/supermercados/${nome}`);
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

  getSupermercadoById(id): Observable<any> {
    return this.http.get(`${this.API}/supermercados/${id}`);
  }

  parceiroPorId(id): Observable<any> {
    return this.http.get(`${this.API}/parceiros/supermercados/${id}`);
  }

  tiposPagamento(supermercado): Observable<any>  {
    return this.http.get(`${this.API}/supermercados/${supermercado.id}/tipo-pagamento`);
  }
}
