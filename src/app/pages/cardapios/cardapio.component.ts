import { Observable } from 'rxjs/Observable';

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Alimento } from './../../models/models';
import { AlimentoService } from '../../provideres/alimento.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  @Input()
  public cardapioForm: FormGroup;
  public proteinas: Alimento[];
  public acompanhamentos: Alimento[];
  public legumes: Alimento[];
  public saladas: Alimento[];
  public sobremesas: Alimento[];

  constructor(
    private fb: FormBuilder,
    private alimentoService: AlimentoService
  ) { }

  ngOnInit() {
    this.initForm();
    this.getAlimentos();
  }

  initForm() {
    this.cardapioForm = this.fb.group({
      proteinas:  ['', Validators.required],
      sobremesas: ['', Validators.required],
      acompanhamentos: ['', Validators.required],
      legumes:    ['', Validators.required],
      saladas:    ['', Validators.required],
    });
  }

  getAlimentos() {
    this.alimentoService.getAlimentos()
    .subscribe(alimentos => {
      this.proteinas = alimentos.filter(alimento => alimento.tipo === 'proteina');
      this.acompanhamentos = alimentos.filter(alimento => alimento.tipo === 'acompanhamento');
      this.legumes = alimentos.filter(alimento => alimento.tipo === 'legume');
      this.saladas = alimentos.filter(alimento => alimento.tipo === 'salada');
      this.sobremesas = alimentos.filter(alimento => alimento.tipo === 'sobremesa');
    });
  }

}
