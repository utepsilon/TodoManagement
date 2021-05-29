import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler  ){
    let username='utkarsh'
    let password='utkarsh123456'
    let BasicAuthUserString= 'Basic '+window.btoa(username+ ':'+ password);
    request = request.clone({
      setHeaders:{
        Authorization: BasicAuthUserString
      }
    }
    )
    return next.handle(request);
    
  }

  }
