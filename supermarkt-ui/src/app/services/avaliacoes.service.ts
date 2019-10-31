import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvaliacoesService {

  private API = environment.baseUrl + '/supermercados';

  constructor(
    private http: HttpClient
  ) { }

  porIdDoSupermercado(supermercadoId: string): Observable<any> {
    return this.http.get(`${this.API}/${supermercadoId}/avaliacoes`);
  }

  salva(avaliacao: any): Observable<any> {
    const supermercadoId = avaliacao.pedido.supermercado.id;
    return this.http.post(`${this.API}/${supermercadoId}/avaliacoes`, avaliacao);
  }

  mediaDasAvaliacoesDosSupermercados(supermercados: any[]): Observable<any> {
    const idsDosSupermercados = supermercados.map(supermercado => supermercado.id).join(',');
    return this.http.get(`${this.API}/media-avaliacoes?idsDosSupermercados=${idsDosSupermercados}`);
  }

}
