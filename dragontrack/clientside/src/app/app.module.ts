import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { SessionpageModule } from './pages/sessionpage/sessionpage.module';
import { JoinsessionpageModule } from './pages/joinsessionpage/joinsessionpage.module';
import { MusicpageModule } from './pages/musicpage/musicpage.module';
import { materialelementsModule } from './materialelements.module';
import { DragontrackRouterModule } from './dragontrack-router.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materialelementsModule,
    DragontrackRouterModule,
    
    SessionpageModule,
    JoinsessionpageModule,
    MusicpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
