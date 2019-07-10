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
import { NbCalendarMonthModelService } from '../../services';
import { NbCalendarDayCellComponent } from './calendar-day-cell.component';
import { NbCalendarSize } from '../../model';
/**
 * Provides capability pick days.
 * */
var NbCalendarDayPickerComponent = /** @class */ (function () {
    function NbCalendarDayPickerComponent(monthModel) {
        this.monthModel = monthModel;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonths = true;
        this.cellComponent = NbCalendarDayCellComponent;
        /**
         * Size of the component.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        /**
         * Fires newly selected date.
         * */
        this.dateChange = new EventEmitter();
    }
    Object.defineProperty(NbCalendarDayPickerComponent.prototype, "setCellComponent", {
        /**
         * Custom day cell component. Have to implement `NbCalendarCell` interface.
         * */
        set: function (cellComponent) {
            if (cellComponent) {
                this.cellComponent = cellComponent;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayPickerComponent.prototype, "medium", {
        get: function () {
            return this.size === NbCalendarSize.MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayPickerComponent.prototype, "large", {
        get: function () {
            return this.size === NbCalendarSize.LARGE;
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarDayPickerComponent.prototype.ngOnChanges = function (_a) {
        var visibleDate = _a.visibleDate;
        if (visibleDate) {
            this.weeks = this.monthModel.createDaysGrid(this.visibleDate, this.boundingMonths);
        }
    };
    NbCalendarDayPickerComponent.prototype.onSelect = function (day) {
        this.dateChange.emit(day);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarDayPickerComponent.prototype, "visibleDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbCalendarDayPickerComponent.prototype, "boundingMonths", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarDayPickerComponent.prototype, "min", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarDayPickerComponent.prototype, "max", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], NbCalendarDayPickerComponent.prototype, "filter", void 0);
    __decorate([
        Input('cellComponent'),
        __metadata("design:type", Type),
        __metadata("design:paramtypes", [Type])
    ], NbCalendarDayPickerComponent.prototype, "setCellComponent", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbCalendarDayPickerComponent.prototype, "size", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarDayPickerComponent.prototype, "date", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NbCalendarDayPickerComponent.prototype, "dateChange", void 0);
    __decorate([
        HostBinding('class.medium'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbCalendarDayPickerComponent.prototype, "medium", null);
    __decorate([
        HostBinding('class.large'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbCalendarDayPickerComponent.prototype, "large", null);
    NbCalendarDayPickerComponent = __decorate([
        Component({
            selector: 'nb-calendar-day-picker',
            styles: [" :host { display: block; } "],
            template: "\n    <nb-calendar-days-names></nb-calendar-days-names>\n    <nb-calendar-picker\n      [data]=\"weeks\"\n      [visibleDate]=\"visibleDate\"\n      [selectedValue]=\"date\"\n      [cellComponent]=\"cellComponent\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [filter]=\"filter\"\n      (select)=\"onSelect($event)\">\n    </nb-calendar-picker>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [NbCalendarMonthModelService])
    ], NbCalendarDayPickerComponent);
    return NbCalendarDayPickerComponent;
}());
export { NbCalendarDayPickerComponent };
//# sourceMappingURL=calendar-day-picker.component.js.map