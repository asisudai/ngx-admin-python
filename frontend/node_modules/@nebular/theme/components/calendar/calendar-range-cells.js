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
import { NbDateService } from '../calendar-kit';
var NbCalendarRangeDayCellComponent = /** @class */ (function () {
    function NbCalendarRangeDayCellComponent(dateService) {
        this.dateService = dateService;
        this.select = new EventEmitter(true);
    }
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "inRange", {
        get: function () {
            return this.date && this.selectedValue
                && (this.selectedValue.start && this.dateService.compareDates(this.date, this.selectedValue.start) >= 0)
                && (this.selectedValue.end && this.dateService.compareDates(this.date, this.selectedValue.end) <= 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "start", {
        get: function () {
            return this.date && this.selectedValue && this.selectedValue.end
                && (this.selectedValue.start && this.dateService.isSameDay(this.date, this.selectedValue.start));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "end", {
        get: function () {
            return this.date && this.selectedValue &&
                (this.selectedValue.end && this.dateService.isSameDay(this.date, this.selectedValue.end));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "today", {
        get: function () {
            return this.date && this.dateService.isSameDay(this.date, this.dateService.today());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "boundingMonth", {
        get: function () {
            return !this.dateService.isSameMonthSafe(this.date, this.visibleDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "selected", {
        get: function () {
            return this.date && this.selectedValue
                && (this.selectedValue.start && this.dateService.isSameDay(this.date, this.selectedValue.start)) || this.end;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "empty", {
        get: function () {
            return !this.date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "disabled", {
        get: function () {
            return this.smallerThanMin() || this.greaterThanMax() || this.dontFitFilter();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeDayCellComponent.prototype, "day", {
        get: function () {
            return this.date && this.dateService.getDate(this.date);
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarRangeDayCellComponent.prototype.onClick = function () {
        if (this.disabled || this.empty) {
            return;
        }
        this.select.emit(this.date);
    };
    NbCalendarRangeDayCellComponent.prototype.smallerThanMin = function () {
        return this.date && this.min && this.dateService.compareDates(this.date, this.min) < 0;
    };
    NbCalendarRangeDayCellComponent.prototype.greaterThanMax = function () {
        return this.date && this.max && this.dateService.compareDates(this.date, this.max) > 0;
    };
    NbCalendarRangeDayCellComponent.prototype.dontFitFilter = function () {
        return this.date && this.filter && !this.filter(this.date);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarRangeDayCellComponent.prototype, "date", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarRangeDayCellComponent.prototype, "selectedValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarRangeDayCellComponent.prototype, "visibleDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarRangeDayCellComponent.prototype, "min", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarRangeDayCellComponent.prototype, "max", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], NbCalendarRangeDayCellComponent.prototype, "filter", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NbCalendarRangeDayCellComponent.prototype, "select", void 0);
    __decorate([
        HostBinding('class.in-range'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbCalendarRangeDayCellComponent.prototype, "inRange", null);
    __decorate([
        HostBinding('class.start'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbCalendarRangeDayCellComponent.prototype, "start", null);
    __decorate([
        HostBinding('class.end'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbCalendarRangeDayCellComponent.prototype, "end", null);
    NbCalendarRangeDayCellComponent = __decorate([
        Component({
            selector: 'nb-calendar-range-day-cell',
            template: "\n    <div\n      class=\"day-cell\"\n      [class.today]=\"today\"\n      [class.selected]=\"selected\"\n      [class.bounding-month]=\"boundingMonth\"\n      [class.start]=\"start\"\n      [class.end]=\"end\"\n      [class.in-range]=\"inRange\"\n      [class.disabled]=\"disabled\">\n      {{ day }}\n    </div>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: { '(click)': 'onClick()', 'class': 'range-cell' },
        }),
        __metadata("design:paramtypes", [NbDateService])
    ], NbCalendarRangeDayCellComponent);
    return NbCalendarRangeDayCellComponent;
}());
export { NbCalendarRangeDayCellComponent };
var NbCalendarRangeYearCellComponent = /** @class */ (function () {
    function NbCalendarRangeYearCellComponent(dateService) {
        this.dateService = dateService;
        this.select = new EventEmitter(true);
    }
    Object.defineProperty(NbCalendarRangeYearCellComponent.prototype, "selected", {
        get: function () {
            return this.selectedValue && this.dateService.isSameYear(this.date, this.selectedValue.start);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeYearCellComponent.prototype, "today", {
        get: function () {
            return this.date && this.dateService.isSameYear(this.date, this.dateService.today());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeYearCellComponent.prototype, "disabled", {
        get: function () {
            return this.smallerThanMin() || this.greaterThanMax();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarRangeYearCellComponent.prototype, "year", {
        get: function () {
            return this.dateService.getYear(this.date);
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarRangeYearCellComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    };
    NbCalendarRangeYearCellComponent.prototype.smallerThanMin = function () {
        return this.date && this.min && this.dateService.compareDates(this.yearEnd(), this.min) < 0;
    };
    NbCalendarRangeYearCellComponent.prototype.greaterThanMax = function () {
        return this.date && this.max && this.dateService.compareDates(this.yearStart(), this.max) > 0;
    };
    NbCalendarRangeYearCellComponent.prototype.yearStart = function () {
        return this.dateService.getYearStart(this.date);
    };
    NbCalendarRangeYearCellComponent.prototype.yearEnd = function () {
        return this.dateService.getYearEnd(this.date);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarRangeYearCellComponent.prototype, "date", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarRangeYearCellComponent.prototype, "min", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarRangeYearCellComponent.prototype, "max", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarRangeYearCellComponent.prototype, "selectedValue", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NbCalendarRangeYearCellComponent.prototype, "select", void 0);
    __decorate([
        HostBinding('class.selected'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbCalendarRangeYearCellComponent.prototype, "selected", null);
    __decorate([
        HostBinding('class.today'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbCalendarRangeYearCellComponent.prototype, "today", null);
    __decorate([
        HostBinding('class.disabled'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NbCalendarRangeYearCellComponent.prototype, "disabled", null);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NbCalendarRangeYearCellComponent.prototype, "onClick", null);
    NbCalendarRangeYearCellComponent = __decorate([
        Component({
            selector: 'nb-calendar-range-year-cell',
            template: "{{ year }}",
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: { 'class': 'year-cell' },
        }),
        __metadata("design:paramtypes", [NbDateService])
    ], NbCalendarRangeYearCellComponent);
    return NbCalendarRangeYearCellComponent;
}());
export { NbCalendarRangeYearCellComponent };
//# sourceMappingURL=calendar-range-cells.js.map