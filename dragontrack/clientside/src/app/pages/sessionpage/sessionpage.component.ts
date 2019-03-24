import { Component, OnInit, Output, Input } from '@angular/core';

export const sessionpageroute = "sessions"

@Component({
  selector: 'app-sessionpage',
  templateUrl: './sessionpage.component.html',
  styleUrls: ['./sessionpage.component.css']
})
export class SessionpageComponent implements OnInit {
  @Output()
  previoustrack : any

  @Output()
  currenttrack : any

  constructor() { }

  ngOnInit() {
  }
}
