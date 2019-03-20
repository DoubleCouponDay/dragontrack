import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { entersessionroute } from '../../joinsessionpage/entersessionid/entersessionid.component';

@Component({
  selector: 'app-joinsession',
  templateUrl: './joinsession.component.html',
  styleUrls: ['./joinsession.component.css']
})
export class JoinsessionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onClick()
  {
    this.router.navigate([entersessionroute])      
      
  }

}
