import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

// RouterModule
import { RouterModule } from '@angular/router';

// Componentes de Shared
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    NopagefoundComponent,
    NavbarComponent
  ],
  exports:[
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    NopagefoundComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
