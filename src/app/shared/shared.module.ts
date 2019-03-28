import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  BreadcrumbComponent,
  FooterComponent,
  HeaderComponent,
  LoadingComponent,
  SidebarComponent
} from './components';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    SidebarComponent
  ],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    SidebarComponent
  ]
})
export class SharedModule {}
