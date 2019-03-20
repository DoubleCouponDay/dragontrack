import { Component, OnInit, ViewChild } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { SessionService } from '../../../services/session.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';
import { sessionpageroute } from '../../sessionpage/sessionpage.component';

@Component({
  selector: 'app-createsession',
  templateUrl: './createsession.component.html',
  styleUrls: ['./createsession.component.css']
})
export class CreatesessionComponent implements OnInit {

  constructor(
    private sessionService : SessionService,
    private router : Router
    ) { }

  ngOnInit() {
  }
  
  public onClick() : void 
  {
    this.sessionService
      .postSession()
      .subscribe(result => {
        this.router 
          .navigate([sessionpageroute, result])
      },
      error => {
        window.alert(JSON.stringify(error))
      })
  }
}
