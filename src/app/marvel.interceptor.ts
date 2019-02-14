import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from 'src/config/creds';


@Injectable()
export class MarvelInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
    
    if (!req.url.includes('marvel')) { return next.handle(req) }
    
    const creds = req.clone({
      params: req.params
        .set('ts', Credentials.ts)
        .set('apikey', Credentials.publicKey)
        .set('hash', Credentials.hash)
    })
    return next.handle(creds)
  }
}