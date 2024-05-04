import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.storageService.token;

    if (token) {
      this.checkToken(token);
      const authReq = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`,
        }),
      });

      return next.handle(authReq);
    }

    return next.handle(request);
  }

  private checkToken(token: string) {
    const unixExp = JSON.parse(atob(token.split('.')[1])).exp * 1000;
    const unixNow = new Date().getTime();
    if (unixExp <= unixNow) {
      this.router.navigateByUrl('/login');
      this.storageService.logout();
    }
  }
  
}
