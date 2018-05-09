import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Usuario } from './../../../models/models';
import { UsuarioService } from '../../../provideres/usuario.service';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html'
})

export class EditarUsuarioComponent implements OnInit {

  @Input()
  public usuarioSelecionado: Usuario;

  @Output()
  public isUpdate = new EventEmitter();

  public editarForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalActive: NgbActiveModal,
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.editarForm = this.fb.group({
      nome: this.usuarioSelecionado.nome,
      email: this.usuarioSelecionado.email,
      tipo: this.usuarioSelecionado.tipo,
      estado: this.usuarioSelecionado.estado,
      username: this.usuarioSelecionado.username,
      password: '',
      confirmPassword: '',
    });
  }

  parseUsuario(usuario: Usuario) {
    const parse = {
      _id: this.usuarioSelecionado._id,
      nome: usuario.nome,
      email: usuario.email,
      tipo: usuario.tipo,
      estado: usuario.estado,
      username: usuario.username,
      password: this.updatePassword(usuario.password),
    };
    return parse;
  }

  updatePassword(password: string) {
    return password === '' || undefined || null
    ? this.usuarioSelecionado.password
    : password;
  }


  salvar(usuario: Usuario) {
    this.usuarioService.updateUsuario(this.parseUsuario(usuario))
      .subscribe(res => res);
    this.modalActive.close();
  }

  close() {
    this.modalActive.close();
  }

}
