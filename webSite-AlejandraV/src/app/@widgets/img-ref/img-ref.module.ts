import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgRefComponent } from './img-ref.component';



@NgModule({
  declarations: [ImgRefComponent],
  imports: [
    CommonModule
  ],
  exports:[ImgRefComponent]
})
export class ImgRefModule { }
