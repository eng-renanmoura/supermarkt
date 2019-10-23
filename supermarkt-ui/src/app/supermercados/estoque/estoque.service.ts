import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  private API = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getByName(idSupermercado, nome: any): Observable<any> {
    return this.http.get(`${this.API}/parceiros/supermercados/${idSupermercado}/estoque/${nome}`);
  }

  salva(idSupermercado, itemEstoque: any): Observable<any> {
    if (itemEstoque) {
      return this.http.put(`${this.API}/parceiros/supermercados/${idSupermercado}/estoque/${itemEstoque.id}`, itemEstoque);
    }
    return this.http.post(`${this.API}/parceiros/supermercados/${idSupermercado}/estoque`, itemEstoque);
  }

  remove(idSupermercado, idItemEstoque: any): Observable<any> {
    return this.http.delete(`${this.API}/parceiros/supermercados/${idSupermercado}/estoque/${idItemEstoque}`);
  }

  getItemEstoqueById(idSupermercado, idItemEstoque): Observable<any> {
    return this.http.get(`${this.API}/parceiros/supermercados/${idSupermercado}/estoque/${idItemEstoque}`);
  }

  estoquePorSupermercadoId(supermercadoId): Observable<any> {
    return this.http.get(`${this.API}/parceiros/supermercados/${supermercadoId}/estoque`);
  }

}
