import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShowIconInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log("Inside Intercepter"+ request.url);
   let header = request.headers.get('Authorization');
   header = "EditInInterceptor"+header;

   request.headers.set('Authorization',header);
    console.log(header);
    console.log(request.headers.get('Authorization'));

    return next.handle(request);
  }

  myIntercepterMethod()
  {
    alert("Inside Middle Intercepter......")
  }
}
