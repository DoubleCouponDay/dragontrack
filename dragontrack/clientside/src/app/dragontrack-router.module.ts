import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homepagecomponent } from './pages/homepage/homepage.component'
import { EntersessionidComponent, entersessionroute } from './pages/joinsessionpage/entersessionid/entersessionid.component';
import { SessionpageComponent, sessionpageroute } from './pages/sessionpage/sessionpage.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: `${sessionpageroute}/:id`,
        component: SessionpageComponent
      }, 
      {
        path: entersessionroute,
        component: EntersessionidComponent
      },
      {
        path: '',
        component: homepagecomponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DragontrackRouterModule { }
