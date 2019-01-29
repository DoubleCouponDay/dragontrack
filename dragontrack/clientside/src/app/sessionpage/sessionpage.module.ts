import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'

import { CreatesessionComponent } from './createsession/createsession.component';
import { JoinsessionComponent } from './joinsession/joinsession.component';

@NgModule({
  declarations: [CreatesessionComponent, JoinsessionComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [CreatesessionComponent, JoinsessionComponent]
})
export class SessionpageModule { }
