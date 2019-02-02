import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';

import { CreatesessionComponent } from './createsession/createsession.component';
import { JoinsessionComponent } from './joinsession/joinsession.component';


@NgModule({
  declarations: [CreatesessionComponent, JoinsessionComponent],
  imports: [
    CommonModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports: [CreatesessionComponent, JoinsessionComponent]
})
export class SessionpageModule 
{  
}
