import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  styles: []
})
export class FooterComponent implements OnInit {
  fecha = new Date();
  constructor() { }

  ngOnInit() {
  }

}
