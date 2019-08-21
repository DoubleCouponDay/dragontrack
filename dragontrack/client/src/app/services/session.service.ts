import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiroute } from './constants';
import { session } from '../models/session';

const sessionroute = "/session"

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  constructor(private httpClient : HttpClient) { }

  public getSession(inputsessionid : string) : Observable<session>
  {
    return this.httpClient
      .get<session>(
        `${apiroute}${sessionroute}/${inputsessionid}`)
  }

  public postSession() : Observable<session>
  {
    return this.httpClient
      .post<session>(`${apiroute}${sessionroute}`, {})      
  }
}
