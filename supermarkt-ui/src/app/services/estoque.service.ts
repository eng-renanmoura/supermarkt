import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  private API = environment.baseUrl + '/supermercados';

  constructor(
    private http: HttpClient
  ) { }

  estoqueDoSupermercado(supermercadoId: string): Observable<any> {
    return this.http.get(`${this.API}/${supermercadoId}/estoque`);
  }
}
