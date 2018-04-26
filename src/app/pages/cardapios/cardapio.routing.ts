import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CardapioComponent } from './cardapio.component';
import { NovoComponent } from './novo/novo.component';

export const routes: Routes = [
  {
    path: 'cardapio',
    component: CardapioComponent,
    children: [
      { path: 'novo', component: NovoComponent },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
