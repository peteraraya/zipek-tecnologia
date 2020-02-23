import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const pagesRoutes: Routes = [
{ 
    path:'home',
    component:HomeComponent,
    data:{ titulo:'Inicio de aplicación'}
},
    { path: '', redirectTo: '/home', pathMatch: 'full' }     
]
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
