import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService, private _router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({
        next: (event) => {
          // no-op
        },
        error: (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) {
              console.log('HTTP Error 401: Token likely expired');
              // TODO: handle refresh?
              // Token likely expired; logout and redirect to login
              this._authService.logout();
              this._router.navigate(['/']);
            }
          }
        },
      })
    );
  }
}
