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
import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { NbCalendarSize, NbCalendarViewMode, NbDateService } from '../calendar-kit';
import { NbCalendarRangeDayCellComponent, NbCalendarRangeYearCellComponent } from './calendar-range-cells';
/**
 * CalendarRange component provides a capability to choose a date range.
 *
 * ```html
 * <nb-calendar [(date)]="date"></nb-calendar>
 * <nb-calendar [date]="date" (dateChange)="handleDateChange($event)"></nb-calendar>
 * ```
 *
 * Basic usage example
 * @stacked-example(Range, calendar/calendar-range-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCalendarRangeModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbCalendarRangeModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * CalendarRange component supports all of the Calendar component customization properties. More defails can be found
 * in the [Calendar component docs](docs/components/calendar).
 *
 * @styles
 *
 * calendar-width
 * calendar-body-height
 * calendar-header-title-font-size
 * calendar-header-title-font-weight
 * calendar-header-sub-title-font-size
 * calendar-header-sub-title-font-weight
 * calendar-navigation-button-width
 * calendar-selected-item-bg
 * calendar-hover-item-bg
 * calendar-today-item-bg
 * calendar-active-item-bg
 * calendar-fg
 * calendar-selected-fg
 * calendar-day-cell-width
 * calendar-day-cell-height
 * calendar-month-cell-width
 * calendar-month-cell-height
 * calendar-year-cell-width
 * calendar-year-cell-height
 * calendar-inactive-opacity
 * calendar-disabled-opacity
 * calendar-border-radius
 * calendar-weekday-width
 * calendar-weekday-height
 * calendar-weekday-font-size
 * calendar-weekday-font-weight
 * calendar-weekday-fg
 * calendar-weekday-holiday-fg
 * calendar-range-bg-in-range
 * calendar-large-width
 * calendar-large-body-height
 * calendar-day-cell-large-width
 * calendar-day-cell-large-height
 * calendar-month-cell-large-width
 * calendar-month-cell-large-height
 * calendar-year-cell-large-width
 * calendar-year-cell-large-height
 * */
var NbCalendarRangeComponent = /** @class */ (function () {
    function NbCalendarRangeComponent(dateService) {
        this.dateService = dateService;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonth = true;
        /**
         * Defines starting view for the calendar.
         * */
        this.startView = NbCalendarViewMode.DATE;
        this.dayCellComponent = NbCalendarRangeDayCellComponent;
        this.yearCellComponent = NbCalendarRangeYearCellComponent;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        /**
         * Determines should we show calendars header or not.
         * */
        this.showHeader = true;
        /**
         * Emits range when start selected and emits again when end selected.
         * */
        this.rangeChange = new EventEmitter();
    }
    Object.defineProperty(NbCalendarRangeComponent.prototype, "_cellComponent", {
        /**
         * Custom day cell component. Have to implement `NbCalendarCell` interface.
         * */
        set: function (cellComponent) {
            if (cellComponent) {
                this.dayCellComponent = cellComponent;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeComponent.prototype, "_yearCellComponent", {
        /**
         * Custom year cell component. Have to implement `NbCalendarCell` interface.
         * */
        set: function (cellComponent) {
            if (cellComponent) {
                this.yearCellComponent = cellComponent;
            }
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarRangeComponent.prototype.onChange = function (date) {
        this.initDateIfNull();
        this.handleSelected(date);
    };
    NbCalendarRangeComponent.prototype.initDateIfNull = function () {
        if (!this.range) {
            this.range = { start: null, end: null };
        }
    };
    NbCalendarRangeComponent.prototype.handleSelected = function (date) {
        if (this.selectionStarted()) {
            this.selectEnd(date);
        }
        else {
            this.selectStart(date);
        }
    };
    NbCalendarRangeComponent.prototype.selectionStarted = function () {
        var _a = this.range, start = _a.start, end = _a.end;
        return start && !end;
    };
    NbCalendarRangeComponent.prototype.selectStart = function (start) {
        this.selectRange({ start: start });
    };
    NbCalendarRangeComponent.prototype.selectEnd = function (date) {
        var start = this.range.start;
        if (this.dateService.compareDates(date, start) > 0) {
            this.selectRange({ start: start, end: date });
        }
        else {
            this.selectRange({ start: date, end: start });
        }
    };
    NbCalendarRangeComponent.prototype.selectRange = function (range) {
        this.range = range;
        this.rangeChange.emit(range);
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbCalendarRangeComponent.prototype, "boundingMonth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbCalendarRangeComponent.prototype, "startView", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarRangeComponent.prototype, "min", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarRangeComponent.prototype, "max", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], NbCalendarRangeComponent.prototype, "filter", void 0);
    __decorate([
        Input('dayCellComponent'),
        __metadata("design:type", Type),
        __metadata("design:paramtypes", [Type])
    ], NbCalendarRangeComponent.prototype, "_cellComponent", null);
    __decorate([
        Input(),
        __metadata("design:type", Type)
    ], NbCalendarRangeComponent.prototype, "monthCellComponent", void 0);
    __decorate([
        Input('yearCellComponent'),
        __metadata("design:type", Type),
        __metadata("design:paramtypes", [Type])
    ], NbCalendarRangeComponent.prototype, "_yearCellComponent", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbCalendarRangeComponent.prototype, "size", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarRangeComponent.prototype, "visibleDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbCalendarRangeComponent.prototype, "showHeader", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarRangeComponent.prototype, "range", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NbCalendarRangeComponent.prototype, "rangeChange", void 0);
    NbCalendarRangeComponent = __decorate([
        Component({
            selector: 'nb-calendar-range',
            template: "\n    <nb-base-calendar\n      [date]=\"range\"\n      (dateChange)=\"onChange($event)\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [filter]=\"filter\"\n      [startView]=\"startView\"\n      [boundingMonth]=\"boundingMonth\"\n      [dayCellComponent]=\"dayCellComponent\"\n      [monthCellComponent]=\"monthCellComponent\"\n      [yearCellComponent]=\"yearCellComponent\"\n      [visibleDate]=\"visibleDate\"\n      [showHeader]=\"showHeader\"\n      [size]=\"size\"\n    ></nb-base-calendar>\n  ",
        }),
        __metadata("design:paramtypes", [NbDateService])
    ], NbCalendarRangeComponent);
    return NbCalendarRangeComponent;
}());
export { NbCalendarRangeComponent };
//# sourceMappingURL=calendar-range.component.js.map