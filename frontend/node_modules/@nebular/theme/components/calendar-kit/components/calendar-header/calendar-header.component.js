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
import { NbDateService } from '../../services';
var NbCalendarHeaderComponent = /** @class */ (function () {
    function NbCalendarHeaderComponent(directionService, dateService) {
        this.directionService = directionService;
        this.dateService = dateService;
        this.navigateToday = new EventEmitter();
        this.date = this.dateService.today();
    }
    Object.defineProperty(NbCalendarHeaderComponent.prototype, "isRtl", {
        get: function () {
            return this.directionService.isRtl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarHeaderComponent.prototype, "isLtr", {
        get: function () {
            return this.directionService.isLtr();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarHeaderComponent.prototype, "date", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NbCalendarHeaderComponent.prototype, "navigateToday", void 0);
    NbCalendarHeaderComponent = __decorate([
        Component({
            selector: 'nb-calendar-header',
            template: "\n    <div class=\"header\">\n      <span class=\"title\" (click)=\"navigateToday.emit()\">\n        {{ date | date: 'mediumDate' }}\n        <i [ngClass]=\"{ 'nb-arrow-dropright': isLtr, 'nb-arrow-dropleft': isRtl }\"></i>\n      </span>\n      <span class=\"sub-title\">Today</span>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [NbLayoutDirectionService, NbDateService])
    ], NbCalendarHeaderComponent);
    return NbCalendarHeaderComponent;
}());
export { NbCalendarHeaderComponent };
//# sourceMappingURL=calendar-header.component.js.map