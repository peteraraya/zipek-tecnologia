import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/service.index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  menu:any = {};
  constructor(
              private _navService: NavbarService
              ) { }

  ngOnInit() {
    this.cargarMenu();
  }

  cargarMenu() {
    // siempre va existir
    this.menu = this._navService.menu;
    console.log(this.menu);
  }

}
