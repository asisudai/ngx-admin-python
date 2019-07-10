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
import { InjectionToken, Optional, Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { share } from 'rxjs/operators';
/**
 * Layout direction.
 * */
export var NbLayoutDirection;
(function (NbLayoutDirection) {
    NbLayoutDirection["LTR"] = "ltr";
    NbLayoutDirection["RTL"] = "rtl";
})(NbLayoutDirection || (NbLayoutDirection = {}));
;
/**
 * Layout direction setting injection token.
 * */
export var NB_LAYOUT_DIRECTION = new InjectionToken('Layout direction');
/**
 * Layout Direction Service.
 * Allows to set or get layout direction and listen to its changes
 */
var NbLayoutDirectionService = /** @class */ (function () {
    function NbLayoutDirectionService(direction) {
        if (direction === void 0) { direction = NbLayoutDirection.LTR; }
        this.direction = direction;
        this.$directionChange = new ReplaySubject(1);
        this.setDirection(direction);
    }
    /**
     * Returns true if layout direction set to left to right.
     * @returns boolean.
     * */
    NbLayoutDirectionService.prototype.isLtr = function () {
        return this.direction === NbLayoutDirection.LTR;
    };
    /**
     * Returns true if layout direction set to right to left.
     * @returns boolean.
     * */
    NbLayoutDirectionService.prototype.isRtl = function () {
        return this.direction === NbLayoutDirection.RTL;
    };
    /**
     * Returns current layout direction.
     * @returns NbLayoutDirection.
     * */
    NbLayoutDirectionService.prototype.getDirection = function () {
        return this.direction;
    };
    /**
     * Sets layout direction
     * @param {NbLayoutDirection} direction
     */
    NbLayoutDirectionService.prototype.setDirection = function (direction) {
        this.direction = direction;
        this.$directionChange.next(direction);
    };
    /**
     * Triggered when direction was changed.
     * @returns Observable<NbLayoutDirection>.
     */
    NbLayoutDirectionService.prototype.onDirectionChange = function () {
        return this.$directionChange.pipe(share());
    };
    NbLayoutDirectionService = __decorate([
        Injectable(),
        __param(0, Optional()), __param(0, Inject(NB_LAYOUT_DIRECTION)),
        __metadata("design:paramtypes", [Object])
    ], NbLayoutDirectionService);
    return NbLayoutDirectionService;
}());
export { NbLayoutDirectionService };
//# sourceMappingURL=direction.service.js.map