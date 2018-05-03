import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Cardapio } from './../models/models';

import { API } from './../app.api';
import { ErrorHandler } from '../app.error-hander';

@Injectable()
export class CardapioService {

  constructor(private http: Http) { }

  getCardapios(): Observable<Cardapio[]> {
    return this.http.get(`${API}/cardapios`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

  cardapioById(id: string): Observable<Cardapio[]> {
    return this.http.get(`${API}/cardapios${id}`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

  newCardapio(cardapio): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${API}/cardapios`, JSON.stringify(cardapio),
                          new RequestOptions({ headers: headers }))
                          .map(res => res.json())
                          .catch(ErrorHandler.handleError);
  }

  removeCardapio(id: string): Observable<Cardapio> {
    return this.http.delete(`${API}/cardapios/${id}`)
      .map(res => res.json()
      .catch(ErrorHandler.handleError));
  }
}

