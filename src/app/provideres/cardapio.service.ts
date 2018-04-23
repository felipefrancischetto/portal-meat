import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { API } from './../app.api';

@Injectable()
export class CardapioService {

  constructor(private http: Http) { }

  getProteinas(): Observable<any[]> {
    return this.http.get(`${API}/proteinas`)
      .map(res => res.json());
  }
}
