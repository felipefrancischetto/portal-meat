import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UsuarioService } from '../../../provideres/usuario.service';
import { AlmocoService } from '../../../provideres/almoco.service';

import { Usuario, Alteracao } from '../../../models/models';


@Component({
  selector: 'app-metricas-card',
  templateUrl: './metricas-card.component.html',
  styleUrls: ['./metricas-card.component.scss']
})
export class MetricasCardComponent implements OnInit {

  public funcionarios$:      Observable<Usuario[]>;
  public funcioariosAtivos$: Observable<Usuario[]>;
  public alteracoes$:        Observable<Alteracao[]>;
  public outraProteina$:     Observable<Alteracao[]>;
  public semProteina$:       Observable<Alteracao[]>;
  public naoAlmocaram$:      Observable<Alteracao[]>;
  public hoje;

  constructor(
    private usuarioService: UsuarioService,
    private almocoService: AlmocoService,
  ) { }

  ngOnInit(): void {
    this.getDataHoje();
    this.getFuncionarios();
    this.getFuncionariosAtivos();
    this.getAlteracoes();
  }

  getFuncionarios(): void {
    this.funcionarios$ = this.usuarioService.getUsuarios();
  }

  getFuncionariosAtivos(): void {
    const filtroPorEstado = tipo => (usuario: Usuario) => usuario.estado === tipo;
    this.funcioariosAtivos$ = this.funcionarios$.pipe(map(usuario => usuario.filter(filtroPorEstado('ativo'))));
  }

  getAlteracoes() {
    this.alteracoes$ = this.almocoService.getAlteracoesPorData(this.getDataHoje());
    this.alteracoes$.subscribe(res => console.log(res));
  }

  getDataHoje() {
    this.hoje = new Date();
  }

  getAlteracoesPorTipo(): void {
    const filtroPorTipo = opcao => (alteracao: Alteracao) => alteracao.opcao === opcao;
    this.outraProteina$ = this.alteracoes$.pipe(map(alteracao => alteracao.filter(filtroPorTipo('outra proteína'))));
    this.semProteina$ =  this.alteracoes$.pipe(map(alteracao => alteracao.filter(filtroPorTipo('sem proteína'))));
    this.naoAlmocaram$ = this.alteracoes$.pipe(map(alteracao => alteracao.filter(filtroPorTipo('não almoçaram'))));
  }

}

