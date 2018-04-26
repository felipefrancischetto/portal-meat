import { ROUTES } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MetricCardComponent } from './pages/home/metric-card/metric-card.component';
import { DishTodayComponent } from './pages/home/dish-today/dish-today.component';
import { NotificationCardComponent } from './pages/home/notification-card/notification-card.component';

import { AlimentoService } from './provideres/alimento.service';
import { AlimentosComponent } from './pages/alimentos/alimentos.component';
import { CardapioComponent } from './pages/cardapios/cardapio.component';
import { NovoComponent } from './pages/cardapios/novo/novo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

    MetricCardComponent,
    DishTodayComponent,
    NotificationCardComponent,
    CardapioComponent,
    NovoComponent,
    AlimentosComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),

  ],
  providers: [AlimentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
