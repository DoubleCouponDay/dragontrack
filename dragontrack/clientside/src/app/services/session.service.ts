import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  constructor(private httpClient : HttpClient) { }

  public postSession() : Observable<string>
  {
    this.httpClient.post()
  }
}
