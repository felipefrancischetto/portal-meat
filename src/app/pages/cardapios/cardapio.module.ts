import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routing } from './cardapio.routing';

import { CardapioComponent } from './cardapio.component';

@NgModule({
  declarations: [
    CardapioComponent,
  ],
  imports: [
    routing,
  ],
})
export class CardapioModule { }
