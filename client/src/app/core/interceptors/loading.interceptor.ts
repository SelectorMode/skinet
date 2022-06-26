import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { BusyService } from '../services/busy.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private busyService: BusyService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // exclude from interception for async email validation (spinner)
    if(!request.url.includes('emailexists')){
      this.busyService.busy();
    }

    return next.handle(request).pipe(
      // to simulate slow network
      delay(1000),
      finalize(() => {
        this.busyService.idle();
      })
    );
  }
}
