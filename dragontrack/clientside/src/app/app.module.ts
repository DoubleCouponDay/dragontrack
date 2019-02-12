import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SessionpageModule } from './sessionpage/sessionpage.module';
import { JoinsessionpageModule } from './joinsessionpage/joinsessionpage.module';
import { MusicpageModule } from './musicpage/musicpage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    SessionpageModule,
    JoinsessionpageModule,
    MusicpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
