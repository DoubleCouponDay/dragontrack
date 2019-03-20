import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';
import { sessionpageroute } from '../../sessionpage/sessionpage.component';

export const entersessionroute = "enter-session"

@Component({
  selector: 'app-entersessionid',
  templateUrl: './entersessionid.component.html',
  styleUrls: ['./entersessionid.component.css']
})
export class EntersessionidComponent implements OnInit {
  @Input()
  public boundId : string = ''

  constructor(
    private sessionService : SessionService,
    private router : Router) { }

  ngOnInit() {
  }

  public onClick()
  {
    this.sessionService
      .getSession(this.boundId)
      .subscribe(newsessionid => {
        this.router.navigate([sessionpageroute, newsessionid])
      },
      error => {
        window.alert(JSON.stringify(error))
      })
  }
}
