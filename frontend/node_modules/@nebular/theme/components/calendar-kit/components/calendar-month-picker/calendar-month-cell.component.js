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
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { NbDateService } from '../../services';
var NbCalendarMonthCellComponent = /** @class */ (function () {
    function NbCalendarMonthCellComponent(dateService) {
        this.dateService = dateService;
        this.select = new EventEmitter(true);
    }
    Object.defineProperty(NbCalendarMonthCellComponent.prototype, "selected", {
        get: function () {
            return this.dateService.isSameMonthSafe(this.date, this.selectedValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarMonthCellComponent.prototype, "today", {
        get: function () {
            return this.dateService.isSameMonthSafe(this.date, this.dateService.today());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarMonthCellComponent.prototype, "disabled", {
        get: function () {
            return this.smallerThanMin() || this.greaterThanMax();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarMonthCellComponent.prototype, "month", {
        get: function () {
            return this.dateService.getMonthName(this.date);
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarMonthCellComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    };
    NbCalendarMonthCellComponent.prototype.smallerThanMin = function () {
        return this.date && this.min && this.dateService.compareDates(this.monthEnd(), this.min) < 0;
    };
    NbCalendarMonthCellComponent.prototype.greaterThanMax = function () {
        return this.date && this.max && this.dateService.compareDates(this.monthStart(), this.max) > 0;
    };
    NbCalendarMonthCellComponent.prototype.monthStart = function () {
        return this.dateService.getMonthStart(this.date);
    };
    NbCalendarMonthCellComponent.prototype.monthEnd = function () {
        return this.dateService.getMonthEnd(this.date);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarMonthCellComponent.prototype, "date", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarMonthCellComponent.prototype, "selectedValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarMonthCellComponent.prototype, "min", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarMonthCellComponent.prototype, "max", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NbCalendarMonthCellComponent.prototype, "select", void 0);
    __decorate([
        HostBinding('class.selected'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbCalendarMonthCellComponent.prototype, "selected", null);
    __decorate([
        HostBinding('class.today'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbCalendarMonthCellComponent.prototype, "today", null);
    __decorate([
        HostBinding('class.disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbCalendarMonthCellComponent.prototype, "disabled", null);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NbCalendarMonthCellComponent.prototype, "onClick", null);
    NbCalendarMonthCellComponent = __decorate([
        Component({
            selector: 'nb-calendar-month-cell',
            template: "{{ month }}",
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: { 'class': 'month-cell' },
        }),
        __metadata("design:paramtypes", [NbDateService])
    ], NbCalendarMonthCellComponent);
    return NbCalendarMonthCellComponent;
}());
export { NbCalendarMonthCellComponent };
//# sourceMappingURL=calendar-month-cell.component.js.map