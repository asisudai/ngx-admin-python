var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { NbAuthTokenParceler } from './token-parceler';
var NbTokenStorage = /** @class */ (function () {
    function NbTokenStorage() {
    }
    return NbTokenStorage;
}());
export { NbTokenStorage };
/**
 * Service that uses browser localStorage as a storage.
 *
 * The token storage is provided into auth module the following way:
 * ```ts
 * { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
 * ```
 *
 * If you need to change the storage behaviour or provide your own - just extend your class from basic `NbTokenStorage`
 * or `NbTokenLocalStorage` and provide in your `app.module`:
 * ```ts
 * { provide: NbTokenStorage, useClass: NbTokenCustomStorage },
 * ```
 *
 */
var NbTokenLocalStorage = /** @class */ (function (_super) {
    __extends(NbTokenLocalStorage, _super);
    function NbTokenLocalStorage(parceler) {
        var _this = _super.call(this) || this;
        _this.parceler = parceler;
        _this.key = 'auth_app_token';
        return _this;
    }
    /**
     * Returns token from localStorage
     * @returns {NbAuthToken}
     */
    NbTokenLocalStorage.prototype.get = function () {
        var raw = localStorage.getItem(this.key);
        return this.parceler.unwrap(raw);
    };
    /**
     * Sets token to localStorage
     * @param {NbAuthToken} token
     */
    NbTokenLocalStorage.prototype.set = function (token) {
        var raw = this.parceler.wrap(token);
        localStorage.setItem(this.key, raw);
    };
    /**
     * Clears token from localStorage
     */
    NbTokenLocalStorage.prototype.clear = function () {
        localStorage.removeItem(this.key);
    };
    NbTokenLocalStorage = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NbAuthTokenParceler])
    ], NbTokenLocalStorage);
    return NbTokenLocalStorage;
}(NbTokenStorage));
export { NbTokenLocalStorage };
//# sourceMappingURL=token-storage.js.map