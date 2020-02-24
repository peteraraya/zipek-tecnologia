import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { PortafolioComponent } from './portafolio/portafolio.component';

const pagesRoutes: Routes = [
{  path:'home',       component: HomeComponent,        data:{ titulo: 'Inicio de aplicación'}},
{  path:'personal',   component: PersonalComponent,    data:{ titulo: 'Datos personales'}},
{  path:'portafolio', component: PortafolioComponent,  data:{ titulo: 'Portafolio Personal' } },

{ path: '', redirectTo: '/home', pathMatch: 'full' }     
]
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
