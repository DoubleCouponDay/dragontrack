import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatesessionComponent } from './createsession/createsession.component';
import { JoinsessionComponent } from './joinsession/joinsession.component';

@NgModule({
  declarations: [CreatesessionComponent, JoinsessionComponent],
  imports: [
    CommonModule
  ],
  exports: [CreatesessionComponent, JoinsessionComponent]
})
export class SessionpageModule { }
