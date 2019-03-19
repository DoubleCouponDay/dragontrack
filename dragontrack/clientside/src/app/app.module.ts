import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { homepagemodule } from './pages/homepage/homepage.module';
import { JoinsessionpageModule } from './pages/joinsessionpage/joinsessionpage.module';
import { sessionpagemodule } from './pages/sessionpage/sessionpage.module';
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
    
    homepagemodule,
    JoinsessionpageModule,
    sessionpagemodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
