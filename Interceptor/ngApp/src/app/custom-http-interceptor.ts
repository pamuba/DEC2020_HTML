import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error("Method not implemented.");
        const hardcodedToken = '123456-asdf-9876'
        const reqWithAuth = req.clone({
            setHeaders:{
                Authorization:`Bearer ${hardcodedToken}`
            }
        });
        // return next.handle(reqWithAuth);
        return next.handle(req)
                    .pipe(
                        //retyr on failure
                        retry(3),

                        //Handling Errors
                        catchError((error:HttpErrorResponse)=>{
                            alert(`HTTP Error:${req.url}`)
                            return throwError(error)
                        })
                    )
    }
}
