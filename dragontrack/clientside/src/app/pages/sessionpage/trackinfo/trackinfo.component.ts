import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-trackinfo',
  templateUrl: './trackinfo.component.html',
  styleUrls: ['./trackinfo.component.css']
})
export class TrackinfoComponent implements OnInit {
  @Input()
  track : any

  @Input()
  componentname : string

  constructor() { }

  ngOnInit() {
  }

}
