import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private API = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<any> {
    return this.http.get(`${this.API}/categorias`);
  }

  salva(categoria: any): Observable<any> {
    if (categoria.id) {
      return this.http.put(`${this.API}/admin/categorias/${categoria.id}`, categoria);
    }
    return this.http.post(`${this.API}/admin/categorias`, categoria);
  }

  remove(categoria: any): Observable<any> {
    return this.http.delete(`${this.API}/admin/categorias/${categoria.id}`);
  }

  getByName(nome: any): Observable<any> {
    return this.http.get(`${this.API}/categorias/${nome}`);
  }

  getCategoriaById(id): Observable<any> {
    return this.http.get(`${this.API}/admin/categorias/${id}`);
  }

}
