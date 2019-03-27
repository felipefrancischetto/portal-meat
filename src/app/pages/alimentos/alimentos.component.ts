import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';

import { TIPO_ALIMENTOS } from './../../shared/mocks/tipo-alimentos';

import { Alimento } from './../../models/models';
import { AlimentoService } from '../../provideres/alimento.service';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.scss']
})
export class AlimentosComponent implements OnInit {

  @Input()
  public novoForm: FormGroup;
  public tipoAlimentos: string[] = TIPO_ALIMENTOS;
  public proteinas$: Observable<Alimento[]>;
  public acompanhamentos$: Observable<Alimento[]>;
  public saladas$: Observable<Alimento[]>;
  public sobremesas$: Observable<Alimento[]>;

  closeResult: string;

  constructor(
    private modalService: NgbModal,
    private alimentoSevice: AlimentoService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();
    this.getAlimentos();
  }

  initForm() {
    this.novoForm = this.fb.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
    });
  }

  saveAlimento(alimento: Alimento) {
    this.alimentoSevice.newAlimento(alimento)
      .subscribe(res => {
        this.getAlimentos();
        this.novoForm.reset();
      });
  }

  removerAlimento(id: string) {
    this.alimentoSevice.removeAlimento(id)
    .subscribe(() => this.getAlimentos());
  }

  alertConfirm(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }

  getAlimentos() {
    const filterAlimentoByType = (tipo: string) => (alimento: Alimento) => alimento.tipo === tipo;
    const alimentos$ = this.alimentoSevice.getAlimentos();
    this.proteinas$ = alimentos$.pipe(map(alimentos => alimentos.filter(filterAlimentoByType('proteína'))));
    this.acompanhamentos$ = alimentos$.pipe(map(alimentos => alimentos.filter(filterAlimentoByType('acompanhamento'))));
    this.saladas$ = alimentos$.pipe(map(alimentos => alimentos.filter(filterAlimentoByType('salada'))));
    this.sobremesas$ = alimentos$.pipe(map(alimentos => alimentos.filter(filterAlimentoByType('sobremesa'))));
  }
}





