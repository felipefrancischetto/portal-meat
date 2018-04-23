import { HomeComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/siderbar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
