import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/service.index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css'],
  styles: []
})
export class HomeComponent implements OnInit {
  titulo = 'Zipek Tecnología';


  constructor(
   
  ) { }

  ngOnInit() {
  }



}
