import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardapioComponent } from './pages/cardapios/cardapio.component';
import { AlimentosComponent } from './pages/alimentos/alimentos.component';
import { NovoAlimentoComponent } from './pages/alimentos/novo-alimento/novo-alimento.component';
import { NovoCardapioComponent } from './pages/cardapios/novo-cardapio/novo-cardapio.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { NovoUsuarioComponent } from './pages/usuarios/novo/novo-usuario.component';
import { HomeUserComponent } from './pages/home-user/home-user.component';
import { LoginComponent } from './pages/login/login.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'cardapios', component: CardapioComponent },
  { path: 'cardapios/novo', component: NovoCardapioComponent },
  { path: 'alimentos', component: AlimentosComponent },
  { path: 'alimentos/novo', component: NovoAlimentoComponent },
  { path: 'usuarios/novo', component: NovoUsuarioComponent },
  { path: 'homeuser', component: HomeUserComponent },
  { path: 'login', component: LoginComponent },
];

