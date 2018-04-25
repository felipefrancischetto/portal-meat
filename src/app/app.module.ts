import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './shared';

import { ROUTES } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MetricCardComponent } from './pages/home/metric-card/metric-card.component';
import { DishTodayComponent } from './pages/home/dish-today/dish-today.component';
import { NotificationCardComponent } from './pages/home/notification-card/notification-card.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { NovoComponent } from './pages/cardapio/novo/novo.component';

import { AlimentoService } from './provideres/alimento.service';

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
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
  ],
  providers: [AlimentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
