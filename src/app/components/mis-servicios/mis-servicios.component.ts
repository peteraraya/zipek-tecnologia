import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/service.index';

@Component({
  selector: 'app-mis-servicios',
  templateUrl: './mis-servicios.component.html',
  styleUrls: ['./mis-servicios.component.css']
})
export class MisServiciosComponent implements OnInit {
    
  servicios:any = {};
  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this.cargaServicios();
  }

  cargaServicios() {
    // siempre va existir
     this.servicios = this._homeService.servicios;
     console.log(this.servicios);
  }



}
