import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Cardapio } from './../../../models/models';
import { Alimento } from '../../../models/models';

import { AlimentoService } from './../../../provideres/alimento.service';
import { CardapioService } from '../../../provideres/cardapio.service';

import { TIPO_ALIMENTOS } from './../../../shared/mocks/tipo-alimentos';

@Component({
  selector: 'app-novo-cardapio',
  templateUrl: './novo-cardapio.component.html',
  styleUrls: ['./novo-cardapio.component.scss']
})
export class NovoCardapioComponent implements OnInit {

  @Input()
  public cardapioForm: FormGroup;
  public cardapio: Cardapio;
  public cardapios$: Observable<Cardapio[]>;
  public proteinas$: Observable<Alimento[]>;
  public acompanhamentos$: Observable<Alimento[]>;
  public saladas$: Observable<Alimento[]>;
  public sobremesas$: Observable<Alimento[]>;

  constructor(
    private fb: FormBuilder,
    private alimentoService: AlimentoService,
    private cardapioService: CardapioService,
  ) { }

  ngOnInit() {
    this.initForm();
    this.getAlimentos();
    this.getCardapios();
  }

  initForm() {
    this.cardapioForm = this.fb.group({
      acompanhamentos: this.fb.array([this.createAlimento()], Validators.required),
      proteinas: this.fb.array([this.createAlimento()], Validators.required),
      sobremesas: this.fb.array([this.createAlimento()]),
      saladas: this.fb.array([this.createAlimento()]),
    });
  }

  addAlimento(tipo): void {
    const formArray = this.cardapioForm.get(tipo) as FormArray;
    formArray.push(this.createAlimento());
  }

  removeAlimento(tipo, index): void {
    const formArray = this.cardapioForm.get(tipo) as FormArray;
    formArray.removeAt(index);
  }

  createAlimento() {
    return this.fb.control(null, Validators.required);
  }

  getAlimentos() {
    const filterAlimentoByType = (tipo: string) => (alimento: Alimento) => alimento.tipo === tipo;
    const alimentos$ = this.alimentoService.getAlimentos();
    this.proteinas$ = alimentos$.pipe(map(alimentos => alimentos.filter(filterAlimentoByType('proteína'))));
    this.acompanhamentos$ = alimentos$.pipe(map(alimentos => alimentos.filter(filterAlimentoByType('acompanhamento'))));
    this.saladas$ = alimentos$.pipe(map(alimentos => alimentos.filter(filterAlimentoByType('salada'))));
    this.sobremesas$ = alimentos$.pipe(map(alimentos => alimentos.filter(filterAlimentoByType('sobremesa'))));
  }

  getCardapios() {
    this.cardapios$ = this.cardapioService.getCardapios();
  }

  parseCardapio(cardapio) {
    const cardapios = {
      nome: cardapio.proteinas[0].nome,
      alimentos: [
        ...cardapio.proteinas,
        ...cardapio.acompanhamentos,
        ...cardapio.saladas,
        ...cardapio.sobremesas,
      ]
    };
    return cardapios;
  }

  saveCardapio(cardapio) {
    const cardapioParse = this.parseCardapio(cardapio);
    this.cardapioService.newCardapio(cardapioParse).subscribe(() => this.cardapioService.getCardapios());
    this.getCardapios();
  }

}

