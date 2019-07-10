import { Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbAuthService } from '../auth.service';
export declare class NbAuthJWTInterceptor implements HttpInterceptor {
    private injector;
    protected filter: any;
    constructor(injector: Injector, filter: any);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    protected readonly authService: NbAuthService;
}
