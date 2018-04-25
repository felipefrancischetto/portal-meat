import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { SidebarComponent } from './siderbar/sidebar.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    SidebarComponent,
  ],
})
export class ComponentsModule { }

