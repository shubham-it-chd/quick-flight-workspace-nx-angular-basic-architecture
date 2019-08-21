import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [CommonModule, MDBBootstrapModule.forRoot(), ToastrModule.forRoot()], //,BrowserAnimationsModule
  exports: [MDBBootstrapModule, ToastrModule]
  // , BrowserAnimationsModule
})
export class CommonUiModule {}
