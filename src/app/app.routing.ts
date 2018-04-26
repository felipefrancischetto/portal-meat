import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardapioComponent } from './pages/cardapios/cardapio.component';
import { NovoComponent } from './pages/cardapios/novo/novo.component';
import { AlimentosComponent } from './pages/alimentos/alimentos.component';
import { NovoAlimentoComponent } from './pages/alimentos/novo-alimento/novo-alimento.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'cardapios', component: CardapioComponent },
  { path: 'cardapios/novo', component: CardapioComponent },
  { path: 'alimentos/novo', component: NovoAlimentoComponent },
  { path: 'alimentos', component: AlimentosComponent },
];

