import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Alimento } from '../models/models';

import { API } from './../app.api';
import { ErrorHandler } from '../app.error-hander';

@Injectable()
export class AlimentoService {

  constructor(private http: Http) { }

  getAlimentos(): Observable<any[]> {
    return this.http.get(`${API}/alimentos`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

  alimentoById(id: string): Observable<Alimento> {
    return this.http.get(`${API}/alimentos/${id}`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

  newAlimento(alimento: Alimento): Observable<Alimento> {
    return this.http.post(`${API}/alimentos`, alimento)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

  removeAlimento(id: string): Observable<Alimento> {
    return this.http.delete(`${API}/alimentos/${id}`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

}
