import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homepagecomponent } from './pages/homepage/homepage.component'
import { EntersessionidComponent } from './pages/joinsessionpage/entersessionid/entersessionid.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      // {
      //   path: 'create-session',
      //   component: SessionpageComponent
      // }, 
      {
        path: 'join-session',
        component: EntersessionidComponent
      },
      {
        path: '',
        component: homepagecomponent
      }, 
      {
        path: '**',
        redirectTo: ''
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DragontrackRouterModule { }
