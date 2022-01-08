import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VVComponent } from './vv/vv.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    VVComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [VVComponent]
})
export class VVModule { }
