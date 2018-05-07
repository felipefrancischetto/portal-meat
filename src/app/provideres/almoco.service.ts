import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CardapioAssociado } from './../models/models';

import { API } from './../app.api';
import { ErrorHandler } from './../app.error-hander';


@Injectable()
export class AlmocoService {
  constructor(private http: Http) { }

  getAlmocos(): Observable<any[]> {
    return this.http.get(`${API}/almocos`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

  getCardapiosAssociados(): Observable<any[]> {
    return this.http.get(`${API}/cardapiosAssociados`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

  getCardapioDoDia(id: string): Observable<any> {
    return this.http.get(`${API}/cardapiosAssociados/${id}`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }
}
