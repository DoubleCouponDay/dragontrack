import { Component, OnInit, ViewChild } from '@angular/core';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-createsession',
  templateUrl: './createsession.component.html',
  styleUrls: ['./createsession.component.css']
})
export class CreatesessionComponent implements OnInit {
  @ViewChild(MatRipple) ripple : MatRipple

  constructor() { }

  ngOnInit() {
  }
  
  public onclick() : void 
  {
    // console.log("creatediamond clicked")
    // let rippledef = this.ripple
    //   .launch({
    //     centered: false,
    //     persistent: true
    //   })
    // rippledef.fadeOut()
  }
}
