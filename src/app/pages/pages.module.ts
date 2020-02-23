import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Modulos
import { SharedModule } from '../shared/shared.module';
// Rutas
import { PAGES_ROUTES } from './pages.routes';
// Componentes
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule
  ]
})
export class PagesModule { }
