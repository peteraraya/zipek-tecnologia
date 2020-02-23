import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const appRoutes: Routes = [
    {
        //Lazyload
        path: '',
        component: PagesComponent,
        loadChildren: './pages/pages.module#PagesModule'
    },
    { path: '**', component: NopagefoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });