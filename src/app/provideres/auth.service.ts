import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../models/models';

@Injectable()
export class AuthService {

  private usuarioAutenticado = false;

  constructor(
    private router: Router,
  ) { }

  fazerLogin(usuario) {
    if (
      usuario.username ===  'connecta' &&
      usuario.password === 'connecta'
    ) {
      this.router.navigate(['/']);
      return this.usuarioAutenticado = true;
    }
      // this.router.navigate(['/']);
      return this.usuarioAutenticado = false;
  }

}

