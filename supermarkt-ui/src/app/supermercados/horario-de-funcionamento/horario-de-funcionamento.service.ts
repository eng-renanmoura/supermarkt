import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { DiaDaSemanaService } from './dia-da-semana.service';

@Injectable({
  providedIn: 'root'
})
export class HorarioDeFuncionamentoService {

  private API = environment.baseUrl + '';

  constructor(private http: HttpClient,
              private diaDaSemanaService: DiaDaSemanaService) {
  }

  todosDoSupermercado(supermercado): Observable<any> {
    return this.http.get(`${this.API}/supermercados/${supermercado.id}/horarios-de-funcionamento`)
      .pipe(
        map(horarios => this.ordena(horarios))
      );
  }

  porId(supermercadoId, horarioId) {
    return this.http.get(`${this.API}/supermercados/${supermercadoId}/horarios-de-funcionamento/${horarioId}`);
  }

  salva(horario): Observable<any> {
    if (horario.id) {
      return this.http.put(`${this.API}/parceiros/supermercados/${horario.supermercado.id}/horarios-de-funcionamento/${horario.id}`, horario);
    } else {
      return this.http.post(`${this.API}/parceiros/supermercados/${horario.supermercado.id}/horarios-de-funcionamento`, horario);
    }
  }

  remove(horario) {
    return this.http.delete(`${this.API}/parceiros/supermercados/${horario.supermercado.id}/horarios-de-funcionamento/${horario.id}`);
  }

  ordena(horarios) {
    return horarios.sort(
      (a,b) => this.diaDaSemanaService.compara(a.diaDaSemana, b.diaDaSemana)
    );
  }

}
