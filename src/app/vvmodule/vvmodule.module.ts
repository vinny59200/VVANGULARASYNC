import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VvvomponentComponent } from './vvvomponent/vvvomponent.component';
import { HttpClientModule } from '@angular/common/http';
// if you use services just import this
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    VvvomponentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [VvvomponentComponent]
})
export class VvmoduleModule { }
