import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class SpideyService {
  // private _url = environment.apiUrl
  private _url1 = 'http://gateway.marvel.com/v1/public/series/466?ts=1548174805663&apikey=2e12565e91b1cafc84cb038a996e8ec6&hash=80789714944ef1e51d045228ed194ef8'
  private _url2 = 'http://gateway.marvel.com/v1/public/series/8509?ts=1548174805663&apikey=2e12565e91b1cafc84cb038a996e8ec6&hash=80789714944ef1e51d045228ed194ef8'

  constructor(private _http: HttpClient) { }

  getSpidey1() : Observable<any> { 
    return this._http.get<any>(this._url1)
  }

  getSpidey2() : Observable<any> { 
    return this._http.get<any>(this._url2)
  }
}
