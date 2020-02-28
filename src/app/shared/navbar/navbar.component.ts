import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/service.index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  menu:any = {};
  logo:string = '';
  constructor(
              private _navService: NavbarService
              ) { }

  ngOnInit() {
    this.cargarMenu();
  }

  cargarMenu() {
    // siempre va existir
    this.menu = this._navService.menu;
    this.logo = this._navService.logo;
    console.log(this.menu);
  }

}
