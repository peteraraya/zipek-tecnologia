import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Modulos
import { SharedModule } from '../shared/shared.module';
// Rutas
import { PAGES_ROUTES } from './pages.routes';
// Componentes
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { MisServiciosComponent } from '../components/mis-servicios/mis-servicios.component';

@NgModule({
  declarations: [
    HomeComponent,
    PersonalComponent,
    PortafolioComponent,
    MisServiciosComponent
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
