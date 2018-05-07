import { Component, OnInit, Input } from '@angular/core';

import { CardapioAssociado, Alimento, Cardapio } from './../../../models/models';

@Component({
  selector: 'app-prato-do-dia',
  templateUrl: './prato-do-dia.component.html',
  styleUrls: ['./prato-do-dia.component.scss']
})
// alterar o nome da classe por prato do dia!
export class PratoDoDiaComponent implements OnInit {

  @Input()
  cardapio: Cardapio;

  ngOnInit() {
  }

}
