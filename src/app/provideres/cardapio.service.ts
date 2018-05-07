import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Cardapio } from './../models/models';

import { API } from './../app.api';
import { ErrorHandler } from '../app.error-hander';

@Injectable()
export class CardapioService {

  constructor(private http: HttpClient) { }

  getCardapios(): Observable<Cardapio[]> {
    return this.http.get<Cardapio[]>(`${API}/cardapios`);
  }

  cardapioById(id: string): Observable<Cardapio[]> {
    return this.http.get<Cardapio[]>(`${API}/cardapios${id}`);
  }

  newCardapio(cardapio: Cardapio): Observable<string> {
    return this.http.post<any>(`${API}/cardapios`, cardapio);
  }

  removeCardapio(id: string): Observable<Cardapio> {
    return this.http.delete<Cardapio>(`${API}/cardapios/${id}`);
  }
}

