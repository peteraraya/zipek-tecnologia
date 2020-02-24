import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {


  //Arreglo de objeto para el menú
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'fas fa-home',
      url:'/home',
      submenu:[]
    },
     {
      titulo: 'Personal',
       icono: 'fas fa-user-shield',
       url: '/personal',
       submenu: []
    },
    {
      titulo: 'Portafolio',
      icono: 'fas fa-portrait',
      url: '/portafolio',
      submenu: [
        { titulo: 'Sitios Web Html', url: '/web' },
        { titulo: 'Aplicaciones Angular', url: '/app-angular' },
        { titulo: 'Aplicaciones Javascript', url: '/app-js' },
      ]
    }
  ];
  constructor() { }



}
