import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { routerTransition } from './router-animations';
import { filter, map } from "rxjs/operators";
import { defer } from "rxjs"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition],
})
export class AppComponent {
  title = 'dragontrack'
  pageTransition : any

  private previousPath: string = ''
  private router: Router

  constructor(router: Router) {


    this.pageTransition = router.events.pipe(
      map((event) => {
        if (event instanceof NavigationEnd || event instanceof NavigationStart) {
          return event.url
        }
      }),
      filter(Boolean)
    )
  }
}