import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Alimento } from '../models/models';

import { API } from './../app.api';
import { ErrorHandler } from '../app.error-hander';

@Injectable()
export class AlimentoService {

  constructor(private http: HttpClient) { }

  getAlimentos(): Observable<Alimento[]> {
    return this.http.get<Alimento[]>(`${API}/alimentos`);
  }

  alimentoById(id: string): Observable<Alimento> {
    return this.http.get<Alimento>(`${API}/alimentos/${id}`);
  }

  newAlimento(alimento): Observable<Alimento> {
    return this.http.post<Alimento>(`${API}/alimentos`, alimento);
  }

  removeAlimento(id: string): Observable<Alimento> {
    return this.http.delete<Alimento>(`${API}/alimentos/${id}`);
  }

}
