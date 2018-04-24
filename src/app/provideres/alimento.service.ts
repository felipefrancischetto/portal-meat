import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { API } from './../app.api';

@Injectable()
export class AlimentoService {

  constructor(private http: Http) { }

  getAlimentos(): Observable<any[]> {
    return this.http.get(`${API}/alimentos`)
      .map(res => res.json());
  }

}
