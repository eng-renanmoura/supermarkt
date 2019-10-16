import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private API = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSupermercadosComAvaliacao(): Observable<any> {
    return this.http.get(`${this.API}/pedidos/supermercados-avaliados`);
  }

  getSupermercadoComAvaliacaoPorId(supermercadoId: string): Observable<any> {
    return this.http.get(`${this.API}/pedidos/supermercado-avaliado/${supermercadoId}`);
  }

  adiciona(pedido): Observable<any> {
    return this.http.post(`${this.API}/pedidos`, pedido);
  }

  porId(pedidoId) {
    return this.http.get(`${this.API}/pedidos/${pedidoId}`);
  }

}
