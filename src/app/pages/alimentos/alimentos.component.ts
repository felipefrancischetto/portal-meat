import { Alimento } from './../../models/models';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlimentoService } from '../../provideres/alimento.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.scss']
})
export class AlimentosComponent implements OnInit {

  proteinas: Alimento[] = [];
  acompanhamentos: Alimento[] = [];
  legumes: Alimento[] = [];
  saladas: Alimento[] = [];
  sobremesas: Alimento[] = [];

  constructor(
    private modalService: NgbModal,
    private alimentoSevice: AlimentoService,
  ) { }

  ngOnInit() {
    this.getAlimentos();
  }

  alertConfirm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  getAlimentos() {
    this.alimentoSevice.getAlimentos()
      .subscribe(alimentos  => {
        this.proteinas = alimentos.filter(alimento => alimento.tipo === 'proteina');
        this.acompanhamentos = alimentos.filter(alimento => alimento.tipo === 'acompanhamento');
        this.legumes = alimentos.filter(alimento => alimento.tipo === 'legume');
        this.saladas = alimentos.filter(alimento => alimento.tipo === 'salada');
        this.sobremesas = alimentos.filter(alimento => alimento.tipo === 'sobremesa');
      });
  }

}

