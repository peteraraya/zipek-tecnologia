import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

// RouterModule
import { RouterModule } from '@angular/router';

// Componentes de Shared
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    NopagefoundComponent
  ],
  exports:[
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    NopagefoundComponent
  ]
})
export class SharedModule { }
