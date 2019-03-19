import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialelementsModule } from '../../materialelements.module'
import { CreatesessionComponent } from './createsession/createsession.component';
import { JoinsessionComponent } from './joinsession/joinsession.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SessionService } from '../../services/session.service';
import { homepagecomponent } from './homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CreatesessionComponent, JoinsessionComponent, homepagecomponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    homepagecomponent
  ],
  providers: [
    SessionService
  ]
})
export class homepagemodule 
{  
}
