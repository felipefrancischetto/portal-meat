import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../../../provideres/usuario.service';
import { Usuario } from '../../../models/models';
import { EditarUsuarioComponent } from '../editar/editar-usuario.component';

@Component({
  selector: 'app-gerenciar-usuario',
  templateUrl: './gerenciar-usuario.component.html',
  styleUrls: ['./gerenciar-usuario.component.scss']
})

export class GerenciarUsuarioComponent implements OnInit {

  @Output()
  public editarEvent = new EventEmitter();

  public usuariosAtivos$: Observable<Usuario[]>;
  public usuariosInativos$: Observable<Usuario[]>;
  public usuarioSelecionado: Usuario;

  public optionsModal: NgbModalOptions = {
    size: 'lg'
  };

  constructor(
    private usuarioService: UsuarioService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    const filtroPorEstado = tipo => (usuario: Usuario) => usuario.estado === tipo;
    const usuarios$ = this.usuarioService.getUsuarios();
    this.usuariosAtivos$ = usuarios$.pipe(map(usuario => usuario.filter(filtroPorEstado('ATIVO'))));
    this.usuariosInativos$ = usuarios$.pipe(map(usuario => usuario.filter(filtroPorEstado('INATIVO'))));
  }

  openEditar(usuario: Usuario) {
    const instance = this.modalService.open(
      EditarUsuarioComponent,
      this.optionsModal
    );
    instance.componentInstance.usuarioSelecionado = usuario;
  }

}

