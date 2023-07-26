import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable()
export class AppHttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone(
      {
      // url: "https://jsonplaceholder.typicode.com/users",// change the url 
      headers: req.headers.set("content-type","application/json")
    })
    return next.handle(req)
    .pipe(
      map((res: HttpEvent<any>) => {
        if (res instanceof HttpResponse) {
          // Do whatever you want with the response.
          return res;
        }
        return res;
      }),

      catchError((err: any) => {
        console.log(err);
        if (err instanceof HttpErrorResponse) {
          console.log(err.status);
          console.log(err.statusText);
          if (err.status === 401) {
            // redirect the user to the login page
            // 401 unauthorized user
          }
        }
        return of(err);
      })
      )
    
  }

}
