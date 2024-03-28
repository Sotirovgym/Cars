import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('/api')) {
      request = request.clone({
        url: request.url.replace('/api', environment.apiUrl),
        withCredentials: true, // saves the auth cookie on the client and sends it with every request
      });
    }

    // return next.handle(req).pipe(
    //   catchError((err) => {
    //     // if (err.status === 401) {
    //     //   this.router.navigate(['/auth/login']);
    //     // } else {
    //     //   this.errorService.setError(err?.message || '');
    //     //   this.router.navigate(['/error']);
    //     // }

    //     return [err];
    //   })
    // );

    return next.handle(request);
  }
}
