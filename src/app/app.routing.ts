import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';

export const ROUTES: Routes = [
  { path: '', component: CardapioComponent },
];

