import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css'],
  styles: []
})
export class HomeComponent implements OnInit {
  titulo = 'Mis Proyectos';


  constructor() { }

  ngOnInit() {
  }

}
