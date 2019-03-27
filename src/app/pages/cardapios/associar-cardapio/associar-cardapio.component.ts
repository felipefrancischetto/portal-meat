import { Observable } from 'rxjs';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Agenda, Cardapio } from '../../../models/models';
import { CardapioService } from '../../../provideres/cardapio.service';

@Component({
  selector: 'app-associar-cardapio',
  templateUrl: './associar-cardapio.component.html',
  styleUrls: ['./associar-cardapio.component.scss']
})
export class AssociarCardapioComponent implements OnInit {

  @Input()
  public diaSelecionado: Agenda;
  public cardapios$: Observable<Cardapio[]>;

  constructor(
    private modalActive: NgbActiveModal,
    private cardapioService: CardapioService,
  ) { }

  ngOnInit() {
    this.getCardapios();
  }

  getCardapios() {
    this.cardapios$ = this.cardapioService.getCardapios();
  }

  close() {
    this.modalActive.close();
  }

}
