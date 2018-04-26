import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from '../app.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'cardapios', loadChildren: './cardapio/cardapio.module.ts#CardapioModule' },
      // { path: 'alimentos', loadChildren: './metricas/metricas.module#MetricasModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
