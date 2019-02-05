import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DeetsModel } from './deets.model';

@Injectable({
  providedIn: 'root'
})
export class SpideyService {
  private _url1 = `http://gateway.marvel.com/v1/public/series/466`

  constructor(private _http: HttpClient) { }

  getSpidey1() : Observable<SpideyService> { 
    return this._http.get<SpideyService>(this._url1)
  }

  getSpideyDeets(deetsUrl) : Observable<DeetsModel> {
    return this._http.get<DeetsModel>(deetsUrl)
  }
}
