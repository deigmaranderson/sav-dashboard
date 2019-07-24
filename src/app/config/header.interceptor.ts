import { Injectable, Inject, APP_ID } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    constructor(
        @Inject('APP_ID') private appId: string,
        @Inject('APP_TOKEN') private appToken: string
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiReq = request.clone({
            headers: new HttpHeaders()
                .set('X-APP-ID', this.appId)
                .set('X-APP-TOKEN', this.appToken)
        });
        return next.handle(apiReq);
    }
}