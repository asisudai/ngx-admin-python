/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbLayoutDirectionService } from '../../../../services/direction.service';
var NbCalendarPageableNavigationComponent = /** @class */ (function () {
    function NbCalendarPageableNavigationComponent(directionService) {
        this.directionService = directionService;
        this.changeMode = new EventEmitter();
        this.next = new EventEmitter();
        this.prev = new EventEmitter();
    }
    Object.defineProperty(NbCalendarPageableNavigationComponent.prototype, "isRtl", {
        get: function () {
            return this.directionService.isRtl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarPageableNavigationComponent.prototype, "isLtr", {
        get: function () {
            return this.directionService.isLtr();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarPageableNavigationComponent.prototype, "date", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NbCalendarPageableNavigationComponent.prototype, "changeMode", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NbCalendarPageableNavigationComponent.prototype, "next", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NbCalendarPageableNavigationComponent.prototype, "prev", void 0);
    NbCalendarPageableNavigationComponent = __decorate([
        Component({
            selector: 'nb-calendar-pageable-navigation',
            styles: [":host{display:flex;align-items:center;justify-content:space-between}:host i{font-size:1.5rem;cursor:pointer} "],
            template: "\n    <i [ngClass]=\"{'nb-arrow-left': isLtr, 'nb-arrow-right': isRtl }\" (click)=\"prev.emit()\"></i>\n    <nb-calendar-navigation [date]=\"date\" (changeMode)=\"changeMode.emit()\"></nb-calendar-navigation>\n    <i [ngClass]=\"{'nb-arrow-right': isLtr, 'nb-arrow-left': isRtl }\" (click)=\"next.emit()\"></i>\n  ",
        }),
        __metadata("design:paramtypes", [NbLayoutDirectionService])
    ], NbCalendarPageableNavigationComponent);
    return NbCalendarPageableNavigationComponent;
}());
export { NbCalendarPageableNavigationComponent };
//# sourceMappingURL=calendar-pageable-navigation.component.js.map