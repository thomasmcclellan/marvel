import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DeetsModel } from './deets.model';
import { TableModel } from './table.model';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  // private _baseUrl = `http://gateway.marvel.com/v1/public/series/`
  private _baseUrl = `https://gateway.marvel.com:443/v1/public/series?titleStartsWith=`

  constructor(private _http: HttpClient) { }

  getSpidey(apiName: string) : Observable<TableModel> { 
      // return this._http.get<TableModel>(`${this._baseUrl}${apiId}`)
      return this._http.get<TableModel>(`${this._baseUrl}${apiName}`)
  }

  getSpideyDeets(deetsUrl) : Observable<DeetsModel> {
    return this._http.get<DeetsModel>(deetsUrl)
  }
}
