import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoPagamentoService {

  private API = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTiposPagamento(): Observable<any> {
    return this.http.get(`${this.API}/tipo-pagamento`);
  }

  getFormas(): Observable<any> {
    return this.http.get(`${this.API}/admin/tipo-pagamento/formas`);
  }

  salva(tipoPagamento: any): Observable<any> {
    let tipo = tipoPagamento;
    tipo.forma = tipoPagamento.forma.valor;
    if (tipoPagamento.id) {
      return this.http.put(`${this.API}/admin/tipo-pagamento/${tipoPagamento.id}`, tipo);
    }
    return this.http.post(`${this.API}/admin/tipo-pagamento`, tipo);
  }

  remove(tipoPagamento: any): Observable<any> {
    return this.http.delete(`${this.API}/admin/tipo-pagamento/${tipoPagamento.id}`);
  }

  getByName(nome: any): Observable<any> {
    return this.http.get(`${this.API}/tipo-pagamento/${nome}`);
  }

  getTipoPagamentoById(id): Observable<any> {
    return this.http.get(`${this.API}/admin/tipo-pagamento/${id}`);
  }
}
