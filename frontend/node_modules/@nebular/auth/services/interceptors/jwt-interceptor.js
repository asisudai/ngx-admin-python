var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable, Injector } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { NbAuthService } from '../auth.service';
import { NB_AUTH_TOKEN_INTERCEPTOR_FILTER } from '../../auth.options';
var NbAuthJWTInterceptor = /** @class */ (function () {
    function NbAuthJWTInterceptor(injector, filter) {
        this.injector = injector;
        this.filter = filter;
    }
    NbAuthJWTInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // do not intercept request whose urls are filtered by the injected filter
        if (!this.filter(req)) {
            return this.authService.isAuthenticatedOrRefresh()
                .pipe(switchMap(function (authenticated) {
                if (authenticated) {
                    return _this.authService.getToken().pipe(switchMap(function (token) {
                        var JWT = "Bearer " + token.getValue();
                        req = req.clone({
                            setHeaders: {
                                Authorization: JWT,
                            },
                        });
                        return next.handle(req);
                    }));
                }
                else {
                    // Request is sent to server without authentication so that the client code
                    // receives the 401/403 error and can act as desired ('session expired', redirect to login, aso)
                    return next.handle(req);
                }
            }));
        }
        else {
            return next.handle(req);
        }
    };
    Object.defineProperty(NbAuthJWTInterceptor.prototype, "authService", {
        get: function () {
            return this.injector.get(NbAuthService);
        },
        enumerable: true,
        configurable: true
    });
    NbAuthJWTInterceptor = __decorate([
        Injectable(),
        __param(1, Inject(NB_AUTH_TOKEN_INTERCEPTOR_FILTER)),
        __metadata("design:paramtypes", [Injector, Object])
    ], NbAuthJWTInterceptor);
    return NbAuthJWTInterceptor;
}());
export { NbAuthJWTInterceptor };
//# sourceMappingURL=jwt-interceptor.js.map