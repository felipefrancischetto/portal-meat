import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Cardapio, Agenda } from './../../../models/models';

import { CardapioService } from '../../../provideres/cardapio.service';
import { AgendaService } from '../../../provideres/agenda.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AssociarCardapioComponent } from '../associar-cardapio/associar-cardapio.component';

@Component({
  selector: 'app-gerenciar-cardapio',
  templateUrl: './gerenciar-cardapio.component.html',
  styleUrls: ['./gerenciar-cardapio.component.scss']
})

export class GerenciarCardapioComponent implements OnInit {

  public cardapios$: Observable<Cardapio[]>;
  public agendados$: Observable<Agenda[]>;
  public diaDaSemanaSelecionado;

  public optionsModal: NgbModalOptions = {
    size: 'lg'
  };


  constructor(
    private cardapioService: CardapioService,
    private agendaService: AgendaService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.getCardapios();
    this.getAgendados();
  }

  getAgendados() {
    this.agendados$ = this.agendaService.getAgendados();
  }

  getCardapios() {
    this.cardapios$ = this.cardapioService.getCardapios();
  }

  openEditar(dia: Agenda) {
    this.diaDaSemanaSelecionado = dia;
    const instance = this.modalService.open(
      AssociarCardapioComponent,
      this.optionsModal
    );
    instance.componentInstance.diaSelecionado = dia;
  }
}

