import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class Interceptor implements HttpInterceptor {
    constructor(private loaderService: NgxUiLoaderService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        
        console.log('in interceptor')
        this.loaderService.start();
       return next.handle(req).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.loaderService.stop();
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            this.loaderService.stop();
          }
        })
      )
    }
}