import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntersessionidComponent } from './entersessionid/entersessionid.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EntersessionidComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: EntersessionidComponent
    }])
  ],
  exports: []
})
export class JoinsessionpageModule { }
