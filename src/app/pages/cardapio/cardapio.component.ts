import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CardapioService } from '../../provideres/cardapio.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  @Input()
  public cardapioForm: FormGroup;

  proteinas;

  constructor(
    private fb: FormBuilder,
    private cardapioService: CardapioService,
  ) { }

  ngOnInit() {
    this.initForm();
    this.cardapioService.getProteinas()
      .subscribe(cardapio => console.log(cardapio));
  }

  initForm() {
    this.cardapioForm = this.fb.group({
      proteinas: ['' , Validators.required],
      guarnicoes: ['', Validators.required],
      legumes: ['', Validators.required],
      saladas: ['', Validators.required],
      sobremesas: ['', Validators.required],
    });
  }
}

