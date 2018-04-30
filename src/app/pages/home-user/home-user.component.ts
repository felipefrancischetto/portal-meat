import { Component, OnInit } from '@angular/core';

import { OPCOES_PROTEINAS } from './../../shared/mocks/opcao-proteina';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {

  public opcoesProteina = OPCOES_PROTEINAS;

  constructor() { }

  ngOnInit() {
    console.log(this.opcoesProteina);
  }

}

