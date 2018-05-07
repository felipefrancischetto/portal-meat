import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CardapioAssociado, Almoco, Alteracao } from './../models/models';

import { API } from './../app.api';
import { ErrorHandler } from './../app.error-hander';


@Injectable()
export class AlmocoService {
  constructor(private http: HttpClient) { }

  getAlmocos(): Observable<Almoco[]> {
    return this.http.get<Almoco[]>(`${API}/almocos`);
  }

  getCardapiosAssociados(): Observable<CardapioAssociado[]> {
    return this.http.get<CardapioAssociado[]>(`${API}/cardapiosAssociados`);
  }

  getCardapioDoDia(id: string): Observable<CardapioAssociado> {
    return this.http.get<CardapioAssociado>(`${API}/cardapiosAssociados/${id}`);
  }

  getAlteracoes(): Observable<Alteracao[]> {
    return this.http.get<Alteracao[]>(`${API}/alteracoes`);
  }

  getAlteracoesPorData(data): Observable<Alteracao[]> {
    let params: HttpParams;
    if (data) {
      params = new HttpParams().set('data', data);
    }
    return this.http.get<Alteracao[]>(`${API}/alteracoes`, { params: data });
  }

  newAlteracao(alteracao: Alteracao): Observable<Alteracao> {
    return this.http.post<Alteracao>(`${API}/alteracoes`, alteracao);
  }
}
