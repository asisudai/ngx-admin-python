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
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, Type, } from '@angular/core';
import { batch, range } from '../../helpers';
import { NbCalendarSize } from '../../model';
import { NbCalendarYearCellComponent } from './calendar-year-cell.component';
import { NbDateService } from '../../services';
var defaultYearCount = 20;
var NbCalendarYearPickerComponent = /** @class */ (function () {
    function NbCalendarYearPickerComponent(dateService) {
        this.dateService = dateService;
        this.cellComponent = NbCalendarYearCellComponent;
        this.size = NbCalendarSize.MEDIUM;
        this.yearChange = new EventEmitter();
    }
    Object.defineProperty(NbCalendarYearPickerComponent.prototype, "_cellComponent", {
        set: function (cellComponent) {
            if (cellComponent) {
                this.cellComponent = cellComponent;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarYearPickerComponent.prototype, "medium", {
        get: function () {
            return this.size === NbCalendarSize.MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarYearPickerComponent.prototype, "large", {
        get: function () {
            return this.size === NbCalendarSize.LARGE;
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarYearPickerComponent.prototype.ngOnChanges = function () {
        this.initYears();
    };
    NbCalendarYearPickerComponent.prototype.initYears = function () {
        var _this = this;
        var selectedYear = this.dateService.getYear(this.year);
        var startYear = Math.ceil(selectedYear - defaultYearCount / 2);
        var years = range(defaultYearCount).map(function (i) { return _this.createYearDateByIndex(i + startYear); });
        this.years = batch(years, 4);
    };
    NbCalendarYearPickerComponent.prototype.onSelect = function (year) {
        this.yearChange.emit(year);
    };
    NbCalendarYearPickerComponent.prototype.createYearDateByIndex = function (i) {
        return this.dateService.createDate(i, this.dateService.getMonth(this.year), this.dateService.getDate(this.year));
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarYearPickerComponent.prototype, "date", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarYearPickerComponent.prototype, "min", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarYearPickerComponent.prototype, "max", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], NbCalendarYearPickerComponent.prototype, "filter", void 0);
    __decorate([
        Input('cellComponent'),
        __metadata("design:type", Type),
        __metadata("design:paramtypes", [Type])
    ], NbCalendarYearPickerComponent.prototype, "_cellComponent", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbCalendarYearPickerComponent.prototype, "size", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarYearPickerComponent.prototype, "year", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NbCalendarYearPickerComponent.prototype, "yearChange", void 0);
    __decorate([
        HostBinding('class.medium'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbCalendarYearPickerComponent.prototype, "medium", null);
    __decorate([
        HostBinding('class.large'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbCalendarYearPickerComponent.prototype, "large", null);
    NbCalendarYearPickerComponent = __decorate([
        Component({
            selector: 'nb-calendar-year-picker',
            template: "\n    <nb-calendar-picker\n      [data]=\"years\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [filter]=\"filter\"\n      [selectedValue]=\"date\"\n      [visibleDate]=\"year\"\n      [cellComponent]=\"cellComponent\"\n      (select)=\"onSelect($event)\">\n    </nb-calendar-picker>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [NbDateService])
    ], NbCalendarYearPickerComponent);
    return NbCalendarYearPickerComponent;
}());
export { NbCalendarYearPickerComponent };
//# sourceMappingURL=calendar-year-picker.component.js.map