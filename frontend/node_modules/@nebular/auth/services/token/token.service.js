var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { BehaviorSubject, of as observableOf } from 'rxjs';
import { filter, share } from 'rxjs/operators';
import { NbTokenStorage } from './token-storage';
/**
 * Service that allows you to manage authentication token - get, set, clear and also listen to token changes over time.
 */
var NbTokenService = /** @class */ (function () {
    function NbTokenService(tokenStorage) {
        this.tokenStorage = tokenStorage;
        this.token$ = new BehaviorSubject(null);
        this.publishStoredToken();
    }
    /**
     * Publishes token when it changes.
     * @returns {Observable<NbAuthToken>}
     */
    NbTokenService.prototype.tokenChange = function () {
        return this.token$
            .pipe(filter(function (value) { return !!value; }), share());
    };
    /**
     * Sets a token into the storage. This method is used by the NbAuthService automatically.
     *
     * @param {NbAuthToken} token
     * @returns {Observable<any>}
     */
    NbTokenService.prototype.set = function (token) {
        this.tokenStorage.set(token);
        this.publishStoredToken();
        return observableOf(null);
    };
    /**
     * Returns observable of current token
     * @returns {Observable<NbAuthToken>}
     */
    NbTokenService.prototype.get = function () {
        var token = this.tokenStorage.get();
        return observableOf(token);
    };
    /**
     * Removes the token and published token value
     *
     * @returns {Observable<any>}
     */
    NbTokenService.prototype.clear = function () {
        this.tokenStorage.clear();
        this.publishStoredToken();
        return observableOf(null);
    };
    NbTokenService.prototype.publishStoredToken = function () {
        this.token$.next(this.tokenStorage.get());
    };
    NbTokenService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NbTokenStorage])
    ], NbTokenService);
    return NbTokenService;
}());
export { NbTokenService };
//# sourceMappingURL=token.service.js.map