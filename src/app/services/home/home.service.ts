import { Injectable } from '@angular/core';
import { MisServicios } from '../../interfaces/home/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  servicios: MisServicios[] = [
    {
      titulo: 'Desarrollo Web',
      subtitulo: '',
      imagen:'../../../assets/images/digital-marketing.svg',
      icono: 'fas fa-home',
      tituloDescripcion: '',
      descripcion: '',
      muestra: true,
      pos:1
    },
    {
      titulo: 'E-Commerce',
      subtitulo: '',
      imagen: '../../../assets/images/digital-marketing.svg',
      icono: 'fas fa-home',
      tituloDescripcion: '',
      descripcion: '',
      muestra: true,
      pos: 2
    },
    {
      titulo: 'Soporte Web',
      subtitulo: '',
      imagen: '../../../assets/images/digital-marketing.svg',
      icono: 'fas fa-home',
      tituloDescripcion: '',
      descripcion: '',
      muestra: true,
      pos: 3
    },


   
  ];
  constructor() { }
}
