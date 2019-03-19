import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiroute } from './constants';

const sessionroute = "/session"

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  constructor(private httpClient : HttpClient) { }

  public getSession(inputsessionid : string) : Observable<string>
  {
    return this.httpClient
      .get<string>(`${apiroute}${sessionroute}/${inputsessionid}`)
  }

  public postSession() : Observable<string>
  {
    return this.httpClient
      .post<string>(`${apiroute}${sessionroute}`, {})      
  }
}
