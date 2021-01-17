import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 

    //const token = "this.injector.get(KeycloakService).getToken();"

    //console.log(token);

    const modifiedReq = req.clone({
      headers: req.headers.set("Access-Control-Allow-Origin","*")
      .set("Access-Control-Allow-Methods","DELETE, POST, GET, OPTIONS")
      .set("Access-Control-Allow-Headers","Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    });
    return next.handle(modifiedReq);
  }
}