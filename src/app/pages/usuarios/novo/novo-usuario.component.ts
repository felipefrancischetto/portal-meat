import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UsuarioService } from '../../../provideres/usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  @Input()
  public usuarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.usuarioForm = this.fb.group({
      nome: '',
      email: '',
      tipo: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
  }

  saveUsuario(usuario) {
    this.usuarioService.newUsuario(usuario)
      .subscribe(res => console.log(res));
  }


}

