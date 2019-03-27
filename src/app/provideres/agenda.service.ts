import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Agenda } from '../models/models';

import { API } from './../app.api';

@Injectable()
export class AgendaService {

  constructor(private http: HttpClient) { }

  getAgendados(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(`${API}/agendados`);
  }

  agendadoById(_id: number): Observable<Agenda> {
    return this.http.get<Agenda>(`${API}/agendados/${_id}`);
  }

  agendar(agenda: Agenda): Observable<Agenda> {
    return this.http.put<Agenda>(`${API}/agendados${agenda._id}`, agenda);
  }

}
