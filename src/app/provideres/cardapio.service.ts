import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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

  newCardapio(cardapio: Cardapio): Observable<Cardapio> {
    return this.http.post<Cardapio>(`${API}/cardapios`, cardapio);
  }

  removeCardapio(id: string): Observable<Cardapio> {
    return this.http.delete<Cardapio>(`${API}/cardapios/${id}`);
  }
}

