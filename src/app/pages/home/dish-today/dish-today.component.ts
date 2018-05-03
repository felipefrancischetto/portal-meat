import { Component, OnInit, Input } from '@angular/core';

import { CardapioAssociado, Alimento } from './../../../models/models';

@Component({
  selector: 'app-dish-today',
  templateUrl: './dish-today.component.html',
  styleUrls: ['./dish-today.component.scss']
})
// alterar o nome da classe por prato do dia!
export class DishTodayComponent implements OnInit {

  @Input()
  cardapio: CardapioAssociado;

  proteinas;
  acompanhamentos;
  saladas;
  sobremesas;

  ngOnInit() {
    this.getAlimentos();
  }

  getAlimentos() {
    // this.cardapio.cardapio.filter(res => console.log(res));
  }

}
