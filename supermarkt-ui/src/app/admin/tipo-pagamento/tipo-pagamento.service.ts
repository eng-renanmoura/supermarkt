import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormaPagamento } from './forma-pagamento';
import { TipoPagamento } from './tipo-pagamento';

@Injectable({
  providedIn: 'root'
})
export class TipoPagamentoService {

  private API = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTiposPagamento(): Observable<TipoPagamento> {
    return this.http.get<TipoPagamento>(`${this.API}/tipo-pagamento`);
  }

  getFormas(): Observable<FormaPagamento> {
    return this.http.get<FormaPagamento>(`${this.API}/admin/tipo-pagamento/formas`);
  }

  salva(tipoPagamento: any): Observable<any> {
    let tipo = tipoPagamento;
    tipo.forma = tipoPagamento.forma.valor;
    if (tipoPagamento.id) {
      return this.http.put<any>(`${this.API}/admin/tipo-pagamento/${tipoPagamento.id}`, tipo);
    }
    return this.http.post<any>(`${this.API}/admin/tipo-pagamento`, tipo);
  }

  remove(tipoPagamento: TipoPagamento): void {
    this.http.delete(`${this.API}/admin/tipo-pagamento/${tipoPagamento.id}`);
  }

  getByName(nome: string): Observable<TipoPagamento> {
    return this.http.get<TipoPagamento>(`${this.API}/tipo-pagamento/${nome}`);
  }

  getTipoPagamentoById(id: number): Observable<TipoPagamento> {
    return this.http.get<TipoPagamento>(`${this.API}/admin/tipo-pagamento/${id}`);
  }

}
