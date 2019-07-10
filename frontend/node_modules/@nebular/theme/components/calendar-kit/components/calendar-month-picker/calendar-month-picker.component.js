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
import { NbCalendarMonthCellComponent } from './calendar-month-cell.component';
import { NbDateService } from '../../services';
var NbCalendarMonthPickerComponent = /** @class */ (function () {
    function NbCalendarMonthPickerComponent(dateService) {
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.monthChange = new EventEmitter();
        this.cellComponent = NbCalendarMonthCellComponent;
    }
    Object.defineProperty(NbCalendarMonthPickerComponent.prototype, "_cellComponent", {
        set: function (cellComponent) {
            if (cellComponent) {
                this.cellComponent = cellComponent;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarMonthPickerComponent.prototype, "medium", {
        get: function () {
            return this.size === NbCalendarSize.MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarMonthPickerComponent.prototype, "large", {
        get: function () {
            return this.size === NbCalendarSize.LARGE;
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarMonthPickerComponent.prototype.ngOnInit = function () {
        this.initMonths();
    };
    NbCalendarMonthPickerComponent.prototype.initMonths = function () {
        var _this = this;
        var months = range(12).map(function (i) { return _this.createMonthDateByIndex(i); });
        this.months = batch(months, 4);
    };
    NbCalendarMonthPickerComponent.prototype.onSelect = function (month) {
        this.monthChange.emit(month);
    };
    NbCalendarMonthPickerComponent.prototype.createMonthDateByIndex = function (i) {
        return this.dateService.createDate(this.dateService.getYear(this.month), i, this.dateService.getDate(this.month));
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarMonthPickerComponent.prototype, "min", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarMonthPickerComponent.prototype, "max", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], NbCalendarMonthPickerComponent.prototype, "filter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbCalendarMonthPickerComponent.prototype, "size", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarMonthPickerComponent.prototype, "month", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NbCalendarMonthPickerComponent.prototype, "monthChange", void 0);
    __decorate([
        Input('cellComponent'),
        __metadata("design:type", Type),
        __metadata("design:paramtypes", [Type])
    ], NbCalendarMonthPickerComponent.prototype, "_cellComponent", null);
    __decorate([
        HostBinding('class.medium'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbCalendarMonthPickerComponent.prototype, "medium", null);
    __decorate([
        HostBinding('class.large'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbCalendarMonthPickerComponent.prototype, "large", null);
    NbCalendarMonthPickerComponent = __decorate([
        Component({
            selector: 'nb-calendar-month-picker',
            template: "\n    <nb-calendar-picker\n      [data]=\"months\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [filter]=\"filter\"\n      [selectedValue]=\"month\"\n      [cellComponent]=\"cellComponent\"\n      (select)=\"onSelect($event)\">\n    </nb-calendar-picker>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [NbDateService])
    ], NbCalendarMonthPickerComponent);
    return NbCalendarMonthPickerComponent;
}());
export { NbCalendarMonthPickerComponent };
//# sourceMappingURL=calendar-month-picker.component.js.map