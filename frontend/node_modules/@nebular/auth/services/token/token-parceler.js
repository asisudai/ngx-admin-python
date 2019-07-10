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
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { nbAuthCreateToken } from './token';
import { NB_AUTH_TOKENS } from '../../auth.options';
export var NB_AUTH_FALLBACK_TOKEN = new InjectionToken('Nebular Auth Options');
/**
 * Creates a token parcel which could be stored/restored
 */
var NbAuthTokenParceler = /** @class */ (function () {
    function NbAuthTokenParceler(fallbackClass, tokenClasses) {
        this.fallbackClass = fallbackClass;
        this.tokenClasses = tokenClasses;
    }
    NbAuthTokenParceler.prototype.wrap = function (token) {
        return JSON.stringify({
            name: token.getName(),
            ownerStrategyName: token.getOwnerStrategyName(),
            createdAt: token.getCreatedAt().getTime(),
            value: token.toString(),
        });
    };
    NbAuthTokenParceler.prototype.unwrap = function (value) {
        var tokenClass = this.fallbackClass;
        var tokenValue = '';
        var tokenOwnerStrategyName = '';
        var tokenCreatedAt = null;
        var tokenPack = this.parseTokenPack(value);
        if (tokenPack) {
            tokenClass = this.getClassByName(tokenPack.name) || this.fallbackClass;
            tokenValue = tokenPack.value;
            tokenOwnerStrategyName = tokenPack.ownerStrategyName;
            tokenCreatedAt = new Date(Number(tokenPack.createdAt));
        }
        return nbAuthCreateToken(tokenClass, tokenValue, tokenOwnerStrategyName, tokenCreatedAt);
    };
    // TODO: this could be moved to a separate token registry
    NbAuthTokenParceler.prototype.getClassByName = function (name) {
        return this.tokenClasses.find(function (tokenClass) { return tokenClass.NAME === name; });
    };
    NbAuthTokenParceler.prototype.parseTokenPack = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) { }
        return null;
    };
    NbAuthTokenParceler = __decorate([
        Injectable(),
        __param(0, Inject(NB_AUTH_FALLBACK_TOKEN)),
        __param(1, Inject(NB_AUTH_TOKENS)),
        __metadata("design:paramtypes", [Object, Array])
    ], NbAuthTokenParceler);
    return NbAuthTokenParceler;
}());
export { NbAuthTokenParceler };
//# sourceMappingURL=token-parceler.js.map