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
var NbCalendarYearCellComponent = /** @class */ (function () {
    function NbCalendarYearCellComponent(dateService) {
        this.dateService = dateService;
        this.select = new EventEmitter(true);
    }
    Object.defineProperty(NbCalendarYearCellComponent.prototype, "selected", {
        get: function () {
            return this.dateService.isSameYearSafe(this.date, this.selectedValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarYearCellComponent.prototype, "today", {
        get: function () {
            return this.dateService.isSameYearSafe(this.date, this.dateService.today());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarYearCellComponent.prototype, "disabled", {
        get: function () {
            return this.smallerThanMin() || this.greaterThanMax();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarYearCellComponent.prototype, "year", {
        get: function () {
            return this.dateService.getYear(this.date);
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarYearCellComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    };
    NbCalendarYearCellComponent.prototype.smallerThanMin = function () {
        return this.date && this.min && this.dateService.compareDates(this.yearEnd(), this.min) < 0;
    };
    NbCalendarYearCellComponent.prototype.greaterThanMax = function () {
        return this.date && this.max && this.dateService.compareDates(this.yearStart(), this.max) > 0;
    };
    NbCalendarYearCellComponent.prototype.yearStart = function () {
        return this.dateService.getYearStart(this.date);
    };
    NbCalendarYearCellComponent.prototype.yearEnd = function () {
        return this.dateService.getYearEnd(this.date);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarYearCellComponent.prototype, "date", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarYearCellComponent.prototype, "min", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarYearCellComponent.prototype, "max", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarYearCellComponent.prototype, "selectedValue", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NbCalendarYearCellComponent.prototype, "select", void 0);
    __decorate([
        HostBinding('class.selected'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbCalendarYearCellComponent.prototype, "selected", null);
    __decorate([
        HostBinding('class.today'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbCalendarYearCellComponent.prototype, "today", null);
    __decorate([
        HostBinding('class.disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbCalendarYearCellComponent.prototype, "disabled", null);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NbCalendarYearCellComponent.prototype, "onClick", null);
    NbCalendarYearCellComponent = __decorate([
        Component({
            selector: 'nb-calendar-year-cell',
            template: "{{ year }}",
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: { 'class': 'year-cell' },
        }),
        __metadata("design:paramtypes", [NbDateService])
    ], NbCalendarYearCellComponent);
    return NbCalendarYearCellComponent;
}());
export { NbCalendarYearCellComponent };
//# sourceMappingURL=calendar-year-cell.component.js.map