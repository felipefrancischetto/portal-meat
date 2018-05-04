import { Alimento } from './../../models/models';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/filter';

import { CardapioAssociado } from '../../models/models';
import { AlmocoService } from '../../provideres/almoco.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public hoje = new Date();
  public cardapioAssociado;

  constructor(private almocoService: AlmocoService) { }

  ngOnInit() {
    this.getCardapioAssociado()
    .subscribe(res => {
      this.cardapioAssociado = this.parseCardapio(res);
    });
  }

  getCardapioAssociado() {
    return this.almocoService
    .getCardapioDoDia(this.hoje.getDay().toString());
  }

  parseCardapio(cardapio) {
    const filterAlimentoByType = tipo => (alimento) => alimento.tipo === tipo;
    const parse = {
      diaSemana: cardapio.diaSemana,
      proteinas: cardapio.cardapio.alimentos.filter(filterAlimentoByType('proteína')),
      acompanhamentos: cardapio.cardapio.alimentos.filter(filterAlimentoByType('acompanhamento')),
      saladas: cardapio.cardapio.alimentos.filter(filterAlimentoByType('salada')),
      sobremesas: cardapio.cardapio.alimentos.filter(filterAlimentoByType('sobremesa')),
    };
    return parse;
  }

}

