import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../../provideres/usuario.service';
import { Usuario } from '../../../models/models';

@Component({
  selector: 'app-gerenciar-usuario',
  templateUrl: './gerenciar-usuario.component.html',
  styleUrls: ['./gerenciar-usuario.component.scss']
})

export class GerenciarUsuarioComponent implements OnInit {

  public usuariosAtivos$: Observable<Usuario[]>;
  public usuariosInativos$: Observable<Usuario[]>;

  constructor(
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    const filtroPorEstado = tipo => (usuario: Usuario) => usuario.estado === tipo;
    const usuarios$ = this.usuarioService.getUsuarios();
    this.usuariosAtivos$ = usuarios$
      .map(usuario => usuario.filter(filtroPorEstado('ativo')));
    this.usuariosInativos$ = usuarios$
    .map(usuario => usuario.filter(filtroPorEstado('inativo')));
}

}

