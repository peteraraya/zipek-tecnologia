import { Injectable } from '@angular/core';
import { navbar } from 'src/app/interfaces/shared/navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  logo = '../../../assets/images/zipek/logo/logo-zipek-tecnologia.png';
  //Arreglo de objeto para el menú
  menu: navbar[] = [
    {
      titulo: 'Principal',
      icono: 'fas fa-home',
      url:'/home',
      submenu:[],
      muestra:true,
      pos:1
    },
     {
      titulo: 'Personal',
       icono: 'fas fa-user-shield',
       url: '/personal',
       submenu: [],
       muestra: true,
       pos: 2
    },
    {
      titulo: 'Portafolio',
      icono: 'fas fa-portrait',
      url: '/portafolio',
      submenu: [
        { titulo: 'Sitios Web Html', url: '/web' },
        { titulo: 'Aplicaciones Angular', url: '/app-angular' },
        { titulo: 'Aplicaciones Javascript', url: '/app-js' },
      ],
      muestra: true,
      pos: 3
    }
  ];
  constructor() { }



}
