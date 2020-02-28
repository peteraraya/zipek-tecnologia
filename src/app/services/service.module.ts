import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
 NavbarService,
 HomeService
} from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    NavbarService,
    HomeService
  ],
  declarations: [],

})
export class ServiceModule { }
