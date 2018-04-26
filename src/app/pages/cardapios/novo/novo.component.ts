import { AlimentoService } from './../../../provideres/alimento.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TIPO_ALIMENTOS } from './../../../shared/mocks/tipo-alimentos';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.scss']
})
export class NovoComponent implements OnInit {

  @Input()
  public novoForm: FormGroup;
  public tipoAlimentos: string[] = TIPO_ALIMENTOS;

  closeResult: string;

  alertConfirm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private alimentoService: AlimentoService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.novoForm = this.fb.group({
      nome:  ['', Validators.required],
      tipo: ['', Validators.required],
    });
  }

  saveAlimento(alimento) {
    this.alimentoService.newAlimento(alimento)
      .subscribe(salvo => console.log(salvo));
  }

}

