import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntersessionidComponent } from './entersessionid/entersessionid.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EntersessionidComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: []
})
export class JoinsessionpageModule { }
