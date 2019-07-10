/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { Component, ComponentFactoryResolver, EventEmitter, Inject, Input, Output, Type, } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbAdjustment, NbComponentPortal, NbOverlayService, NbPosition, NbPositionBuilderService, NbTrigger, NbTriggerStrategyBuilder, patch, } from '../cdk';
import { NbDatepickerContainerComponent } from './datepicker-container.component';
import { NB_DOCUMENT } from '../../theme.options';
import { NbCalendarRangeComponent } from '../calendar/calendar-range.component';
import { NbCalendarComponent } from '../calendar/calendar.component';
import { NbCalendarSize, NbCalendarViewMode, NbDateService, } from '../calendar-kit';
import { NbDatepicker } from './datepicker.directive';
/**
 * The `NbBasePicker` component concentrates overlay manipulation logic.
 * */
var NbBasePicker = /** @class */ (function (_super) {
    __extends(NbBasePicker, _super);
    function NbBasePicker(document, positionBuilder, overlay, cfr, dateService) {
        var _this = _super.call(this) || this;
        _this.document = document;
        _this.positionBuilder = positionBuilder;
        _this.overlay = overlay;
        _this.cfr = cfr;
        _this.dateService = dateService;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        _this.boundingMonth = true;
        /**
         * Defines starting view for calendar.
         * */
        _this.startView = NbCalendarViewMode.DATE;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        _this.size = NbCalendarSize.MEDIUM;
        /**
         * Hide picker when a date or a range is selected, `true` by default
         * @type {boolean}
         */
        _this.hideOnSelect = true;
        /**
         * Stream of picker changes. Required to be the subject because picker hides and shows and picker
         * change stream becomes recreated.
         * */
        _this.onChange$ = new Subject();
        _this.alive = true;
        _this.blur$ = new Subject();
        return _this;
    }
    Object.defineProperty(NbBasePicker.prototype, "picker", {
        /**
         * Returns picker instance.
         * */
        get: function () {
            return this.pickerRef && this.pickerRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBasePicker.prototype, "valueChange", {
        /**
         * Stream of picker value changes.
         * */
        get: function () {
            return this.onChange$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBasePicker.prototype, "isShown", {
        get: function () {
            return this.ref && this.ref.hasAttached();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBasePicker.prototype, "blur", {
        /**
         * Emits when datepicker looses focus.
         */
        get: function () {
            return this.blur$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NbBasePicker.prototype.ngOnChanges = function () {
        if (this.dateService.getId() === 'native' && this.format) {
            throw new Error('Can\'t format native date. To use custom formatting you have to install @nebular/moment or ' +
                '@nebular/date-fns package and import NbMomentDateModule or NbDateFnsDateModule accordingly.' +
                'More information at "Formatting issue" ' +
                'https://akveo.github.io/nebular/docs/components/datepicker/overview#nbdatepickercomponent');
        }
    };
    NbBasePicker.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.hide();
        if (this.ref) {
            this.ref.dispose();
        }
    };
    /**
     * Datepicker knows nothing about host html input element.
     * So, attach method attaches datepicker to the host input element.
     * */
    NbBasePicker.prototype.attach = function (hostRef) {
        this.hostRef = hostRef;
        this.subscribeOnTriggers();
    };
    NbBasePicker.prototype.getValidatorConfig = function () {
        return { min: this.min, max: this.max, filter: this.filter };
    };
    NbBasePicker.prototype.show = function () {
        if (!this.ref) {
            this.createOverlay();
        }
        this.openDatepicker();
    };
    NbBasePicker.prototype.shouldHide = function () {
        return this.hideOnSelect && !!this.value;
    };
    NbBasePicker.prototype.hide = function () {
        if (this.ref) {
            this.ref.detach();
        }
        // save current value if picker was rendered
        if (this.picker) {
            this.queue = this.value;
            this.pickerRef.destroy();
            this.pickerRef = null;
            this.container = null;
        }
    };
    NbBasePicker.prototype.createOverlay = function () {
        this.positionStrategy = this.createPositionStrategy();
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        this.subscribeOnPositionChange();
    };
    NbBasePicker.prototype.openDatepicker = function () {
        this.container = this.ref.attach(new NbComponentPortal(NbDatepickerContainerComponent, null, null, this.cfr));
        this.instantiatePicker();
        this.subscribeOnValueChange();
        this.writeQueue();
        this.patchWithInputs();
    };
    NbBasePicker.prototype.createPositionStrategy = function () {
        return this.positionBuilder
            .connectedTo(this.hostRef)
            .position(NbPosition.BOTTOM)
            .adjustment(NbAdjustment.COUNTERCLOCKWISE);
    };
    NbBasePicker.prototype.subscribeOnPositionChange = function () {
        var _this = this;
        this.positionStrategy.positionChange
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (position) { return patch(_this.container, { position: position }); });
    };
    NbBasePicker.prototype.createTriggerStrategy = function () {
        var _this = this;
        return new NbTriggerStrategyBuilder()
            .document(this.document)
            .trigger(NbTrigger.FOCUS)
            .host(this.hostRef.nativeElement)
            .container(function () { return _this.container; })
            .build();
    };
    NbBasePicker.prototype.subscribeOnTriggers = function () {
        var _this = this;
        var triggerStrategy = this.createTriggerStrategy();
        triggerStrategy.show$.pipe(takeWhile(function () { return _this.alive; })).subscribe(function () { return _this.show(); });
        triggerStrategy.hide$.pipe(takeWhile(function () { return _this.alive; })).subscribe(function () {
            _this.blur$.next();
            _this.hide();
        });
    };
    NbBasePicker.prototype.instantiatePicker = function () {
        this.pickerRef = this.container.instance.attach(new NbComponentPortal(this.pickerClass, null, null, this.cfr));
    };
    /**
     * Subscribes on picker value changes and emit data through this.onChange$ subject.
     * */
    NbBasePicker.prototype.subscribeOnValueChange = function () {
        var _this = this;
        this.pickerValueChange.subscribe(function (date) {
            _this.onChange$.next(date);
        });
    };
    NbBasePicker.prototype.patchWithInputs = function () {
        this.picker.boundingMonth = this.boundingMonth;
        this.picker.startView = this.startView;
        this.picker.min = this.min;
        this.picker.max = this.max;
        this.picker.filter = this.filter;
        this.picker._cellComponent = this.dayCellComponent;
        this.picker.monthCellComponent = this.monthCellComponent;
        this.picker._yearCellComponent = this.yearCellComponent;
        this.picker.size = this.size;
        this.picker.visibleDate = this.visibleDate;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbBasePicker.prototype, "format", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbBasePicker.prototype, "boundingMonth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbBasePicker.prototype, "startView", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbBasePicker.prototype, "min", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbBasePicker.prototype, "max", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], NbBasePicker.prototype, "filter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Type)
    ], NbBasePicker.prototype, "dayCellComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Type)
    ], NbBasePicker.prototype, "monthCellComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Type)
    ], NbBasePicker.prototype, "yearCellComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbBasePicker.prototype, "size", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbBasePicker.prototype, "visibleDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbBasePicker.prototype, "hideOnSelect", void 0);
    NbBasePicker = __decorate([
        __param(0, Inject(NB_DOCUMENT)),
        __metadata("design:paramtypes", [Object, NbPositionBuilderService,
            NbOverlayService,
            ComponentFactoryResolver,
            NbDateService])
    ], NbBasePicker);
    return NbBasePicker;
}(NbDatepicker));
export { NbBasePicker };
/**
 * The DatePicker components itself.
 * Provides a proxy to `NbCalendar` options as well as custom picker options.
 */
var NbDatepickerComponent = /** @class */ (function (_super) {
    __extends(NbDatepickerComponent, _super);
    function NbDatepickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pickerClass = NbCalendarComponent;
        return _this;
    }
    Object.defineProperty(NbDatepickerComponent.prototype, "date", {
        /**
         * Date which will be rendered as selected.
         * */
        set: function (date) {
            this.value = date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbDatepickerComponent.prototype, "dateChange", {
        /**
         * Emits date when selected.
         * */
        get: function () {
            return this.valueChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbDatepickerComponent.prototype, "value", {
        get: function () {
            return this.picker.date;
        },
        set: function (date) {
            if (!this.picker) {
                this.queue = date;
                return;
            }
            if (date) {
                this.picker.visibleDate = date;
                this.picker.date = date;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbDatepickerComponent.prototype, "pickerValueChange", {
        get: function () {
            return this.picker.dateChange;
        },
        enumerable: true,
        configurable: true
    });
    NbDatepickerComponent.prototype.writeQueue = function () {
        this.value = this.queue;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NbDatepickerComponent.prototype, "date", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter),
        __metadata("design:paramtypes", [])
    ], NbDatepickerComponent.prototype, "dateChange", null);
    NbDatepickerComponent = __decorate([
        Component({
            selector: 'nb-datepicker',
            template: '',
        })
    ], NbDatepickerComponent);
    return NbDatepickerComponent;
}(NbBasePicker));
export { NbDatepickerComponent };
/**
 * The RangeDatePicker components itself.
 * Provides a proxy to `NbCalendarRange` options as well as custom picker options.
 */
var NbRangepickerComponent = /** @class */ (function (_super) {
    __extends(NbRangepickerComponent, _super);
    function NbRangepickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pickerClass = NbCalendarRangeComponent;
        return _this;
    }
    Object.defineProperty(NbRangepickerComponent.prototype, "range", {
        /**
         * Range which will be rendered as selected.
         * */
        set: function (range) {
            this.value = range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRangepickerComponent.prototype, "rangeChange", {
        /**
         * Emits range when start selected and emits again when end selected.
         * */
        get: function () {
            return this.valueChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRangepickerComponent.prototype, "value", {
        get: function () {
            return this.picker.range;
        },
        set: function (range) {
            if (!this.picker) {
                this.queue = range;
                return;
            }
            if (range) {
                this.picker.visibleDate = range && range.start;
                this.picker.range = range;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRangepickerComponent.prototype, "pickerValueChange", {
        get: function () {
            return this.picker.rangeChange;
        },
        enumerable: true,
        configurable: true
    });
    NbRangepickerComponent.prototype.shouldHide = function () {
        return _super.prototype.shouldHide.call(this) && !!(this.value.start && this.value.end);
    };
    NbRangepickerComponent.prototype.writeQueue = function () {
        this.value = this.queue;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NbRangepickerComponent.prototype, "range", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter),
        __metadata("design:paramtypes", [])
    ], NbRangepickerComponent.prototype, "rangeChange", null);
    NbRangepickerComponent = __decorate([
        Component({
            selector: 'nb-rangepicker',
            template: '',
        })
    ], NbRangepickerComponent);
    return NbRangepickerComponent;
}(NbBasePicker));
export { NbRangepickerComponent };
//# sourceMappingURL=datepicker.component.js.map