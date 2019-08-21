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
import { synchronousgroupclick } from '../../../models/synchronousgroupclick';

@Component({
  selector: 'app-createsession',
  templateUrl: './createsession.component.html',
  styleUrls: ['./createsession.component.css']
})
export class CreatesessionComponent implements OnInit, synchronousgroupclick {
  public wasClicked : boolean

  constructor(
    private sessionService : SessionService,
    private router : Router
    ) { }

  ngOnInit() {
  }
  
  public onClick() : void 
  {
    if(this.wasClicked === false)
    {
      this.wasClicked = true

      this.sessionService
        .postSession()
        .subscribe(result => {
          this.wasClicked = false

          this.router 
            .navigate([sessionpageroute, result])
        },
        error => {
          this.wasClicked = false

          window.alert(JSON.stringify(error))
        })
    }
  }
}
