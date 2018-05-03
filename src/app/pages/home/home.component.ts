import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';

import { CardapioAssociado } from '../../models/models';
import { AlmocoService } from '../../provideres/almoco.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public hoje = new Date();
  public cardapioAssociado: CardapioAssociado;

  constructor(private almocoService: AlmocoService) { }

  ngOnInit() {
    this.almocoService.getCardapioDoDia(this.hoje.getDay().toString())
      .subscribe(res => this.cardapioAssociado = res);
      // console.log(this.cardapioAssociado);
  }

}

