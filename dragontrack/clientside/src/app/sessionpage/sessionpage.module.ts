import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialelementsModule } from '../materialelements/materialelements.module'
import { CreatesessionComponent } from './createsession/createsession.component';
import { JoinsessionComponent } from './joinsession/joinsession.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [CreatesessionComponent, JoinsessionComponent],
  imports: [
    CommonModule,
    materialelementsModule,
    BrowserAnimationsModule
  ],
  exports: [CreatesessionComponent, JoinsessionComponent]
})
export class SessionpageModule 
{  
}
