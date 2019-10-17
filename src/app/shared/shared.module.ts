import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { starComponent } from 'src/shared/star.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    starComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
FormsModule,
BrowserModule,
starComponent
  ]
  
})
export class SharedModule { }
