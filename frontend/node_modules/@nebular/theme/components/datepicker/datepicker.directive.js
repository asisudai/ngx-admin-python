/*
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Directive, ElementRef, forwardRef, Inject, InjectionToken, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators, } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { map, takeWhile, filter, take } from 'rxjs/operators';
import { NB_DOCUMENT } from '../../theme.options';
import { NbDateService } from '../calendar-kit';
/**
 * The `NbDatepickerAdapter` instances provide way how to parse, format and validate
 * different date types.
 * */
var NbDatepickerAdapter = /** @class */ (function () {
    function NbDatepickerAdapter() {
    }
    return NbDatepickerAdapter;
}());
export { NbDatepickerAdapter };
/**
 * Datepicker is an control that can pick any values anyway.
 * It has to be bound to the datepicker directive through nbDatepicker input.
 * */
var NbDatepicker = /** @class */ (function () {
    function NbDatepicker() {
    }
    return NbDatepicker;
}());
export { NbDatepicker };
export var NB_DATE_ADAPTER = new InjectionToken('Datepicker Adapter');
/**
 * The `NbDatepickerDirective` is form control that gives you ability to select dates and ranges. The datepicker
 * is shown when input receives a `focus` event.
 *
 * ```html
 * <input [nbDatepicker]="datepicker">
 * <nb-datepicker #datepicker></nb-datepicker>
 * ```
 *
 * @stacked-example(Showcase, datepicker/datepicker-showcase.component)
 *
 * ### Installation
 *
 * Import `NbDatepickerModule.forRoot()` to your root module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbDatepickerModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * And `NbDatepickerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbDatepickerModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to use range selection, you have to use `NbRangepickerComponent` instead:
 *
 * ```html
 * <input [nbDatepicker]="rangepicker">
 * <nb-rangepicker #rangepicker></nb-rangepicker>
 * ```
 *
 * Both range and date pickers support all parameters as calendar, so, check `NbCalendarComponent` for additional
 * info.
 *
 * @stacked-example(Range showcase, datepicker/rangepicker-showcase.component)
 *
 * Datepicker is the form control so it can be bound with angular forms through ngModel and form controls.
 *
 * @stacked-example(Forms, datepicker/datepicker-forms.component)
 *
 * `NbDatepickerDirective` may be validated using `min` and `max` dates passed to the datepicker.
 * And `filter` predicate that receives date object and has to return a boolean value.
 *
 * @stacked-example(Validation, datepicker/datepicker-validation.component)
 *
 * The `NbDatepickerComponent` supports date formatting:
 *
 * ```html
 * <input [nbDatepicker]="datepicker">
 * <nb-datepicker #datepicker format="MM\dd\yyyy"></nb-datepicker>
 * ```
 *
 * ## Formatting Issue
 *
 * By default, datepicker uses angulars `LOCALE_ID` token for localization and `DatePipe` for dates formatting.
 * And native `Date.parse(...)` for dates parsing. But native `Date.parse` function doesn't support formats.
 * To provide custom formatting you have to use one of the following packages:
 *
 * - `@nebular/moment` - provides moment date adapter that uses moment for date objects. This means datepicker than
 * will operate only moment date objects. If you want to use it you have to install it: `npm i @nebular/moment`, and
 * import `NbMomentDateModule` from this package.
 *
 * - `@nebular/date-fns` - adapter for popular date-fns library. This way is preferred if you need only date formatting.
 * Because date-fns is treeshakable, tiny and operates native date objects. If you want to use it you have to
 * install it: `npm i @nebular/date-fns`, and import `NbDateFnsDateModule` from this package.
 *
 * @styles
 *
 * datepicker-fg
 * datepicker-bg
 * datepicker-border
 * datepicker-border-radius
 * datepicker-shadow
 * datepicker-arrow-size
 * */
var NbDatepickerDirective = /** @class */ (function () {
    function NbDatepickerDirective(document, datepickerAdapters, hostRef, dateService) {
        var _this = this;
        this.document = document;
        this.datepickerAdapters = datepickerAdapters;
        this.hostRef = hostRef;
        this.dateService = dateService;
        this.alive = true;
        this.onChange = function () { };
        this.onTouched = function () { };
        /**
         * Form control validators will be called in validators context, so, we need to bind them.
         * */
        this.validator = Validators.compose([
            this.parseValidator,
            this.minValidator,
            this.maxValidator,
            this.filterValidator,
        ].map(function (fn) { return fn.bind(_this); }));
        this.subscribeOnInputChange();
    }
    NbDatepickerDirective_1 = NbDatepickerDirective;
    Object.defineProperty(NbDatepickerDirective.prototype, "setPicker", {
        /**
         * Provides datepicker component.
         * */
        set: function (picker) {
            this.picker = picker;
            this.setupPicker();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbDatepickerDirective.prototype, "input", {
        /**
         * Returns html input element.
         * */
        get: function () {
            return this.hostRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbDatepickerDirective.prototype, "inputValue", {
        /**
         * Returns host input value.
         * */
        get: function () {
            return this.input.value;
        },
        enumerable: true,
        configurable: true
    });
    NbDatepickerDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    /**
     * Writes value in picker and html input element.
     * */
    NbDatepickerDirective.prototype.writeValue = function (value) {
        this.writePicker(value);
        this.writeInput(value);
    };
    NbDatepickerDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbDatepickerDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbDatepickerDirective.prototype.setDisabledState = function (isDisabled) {
        this.input.disabled = isDisabled;
    };
    /**
     * Form control validation based on picker validator config.
     * */
    NbDatepickerDirective.prototype.validate = function () {
        return this.validator(null);
    };
    /**
     * Hides picker, focuses the input
     */
    NbDatepickerDirective.prototype.hidePicker = function () {
        this.input.focus();
        this.picker.hide();
    };
    /**
     * Validates that we can parse value correctly.
     * */
    NbDatepickerDirective.prototype.parseValidator = function () {
        var isValid = this.datepickerAdapter.isValid(this.inputValue, this.picker.format);
        return isValid ? null : { nbDatepickerParse: { value: this.inputValue } };
    };
    /**
     * Validates passed value is greater than min.
     * */
    NbDatepickerDirective.prototype.minValidator = function () {
        var config = this.picker.getValidatorConfig();
        var date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return (!config.min || !date || this.dateService.compareDates(config.min, date) <= 0) ?
            null : { nbDatepickerMin: { min: config.min, actual: date } };
    };
    /**
     * Validates passed value is smaller than max.
     * */
    NbDatepickerDirective.prototype.maxValidator = function () {
        var config = this.picker.getValidatorConfig();
        var date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return (!config.max || !date || this.dateService.compareDates(config.max, date) >= 0) ?
            null : { nbDatepickerMax: { max: config.max, actual: date } };
    };
    /**
     * Validates passed value satisfy the filter.
     * */
    NbDatepickerDirective.prototype.filterValidator = function () {
        var config = this.picker.getValidatorConfig();
        var date = this.datepickerAdapter.parse(this.inputValue, this.picker.format);
        return (!config.filter || !date || config.filter(date)) ?
            null : { nbDatepickerFilter: true };
    };
    /**
     * Chooses datepicker adapter based on passed picker component.
     * */
    NbDatepickerDirective.prototype.chooseDatepickerAdapter = function () {
        var _this = this;
        this.datepickerAdapter = this.datepickerAdapters.find(function (_a) {
            var picker = _a.picker;
            return _this.picker instanceof picker;
        });
        if (this.noDatepickerAdapterProvided()) {
            throw new Error('No datepickerAdapter provided for picker');
        }
    };
    /**
     * Attaches picker to the host input element and subscribes on value changes.
     * */
    NbDatepickerDirective.prototype.setupPicker = function () {
        var _this = this;
        this.chooseDatepickerAdapter();
        this.picker.attach(this.hostRef);
        if (this.hostRef.nativeElement.value) {
            this.picker.value = this.datepickerAdapter.parse(this.hostRef.nativeElement.value, this.picker.format);
        }
        this.picker.valueChange
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (value) {
            _this.writePicker(value);
            _this.writeInput(value);
            _this.onChange(value);
            if (_this.picker.shouldHide()) {
                _this.hidePicker();
            }
        });
        merge(this.picker.blur, fromEvent(this.input, 'blur').pipe(filter(function () { return !_this.picker.isShown && _this.document.activeElement !== _this.input; }))).pipe(takeWhile(function () { return _this.alive; }), take(1)).subscribe(function () { return _this.onTouched(); });
    };
    NbDatepickerDirective.prototype.writePicker = function (value) {
        this.picker.value = value;
    };
    NbDatepickerDirective.prototype.writeInput = function (value) {
        var stringRepresentation = this.datepickerAdapter.format(value, this.picker.format);
        this.hostRef.nativeElement.value = stringRepresentation;
    };
    /**
     * Validates if no datepicker adapter provided.
     * */
    NbDatepickerDirective.prototype.noDatepickerAdapterProvided = function () {
        return !this.datepickerAdapter || !(this.datepickerAdapter instanceof NbDatepickerAdapter);
    };
    NbDatepickerDirective.prototype.subscribeOnInputChange = function () {
        var _this = this;
        fromEvent(this.input, 'input')
            .pipe(map(function () { return _this.inputValue; }), takeWhile(function () { return _this.alive; }))
            .subscribe(function (value) { return _this.handleInputChange(value); });
    };
    /**
     * Parses input value and write if it isn't null.
     * */
    NbDatepickerDirective.prototype.handleInputChange = function (value) {
        var date = this.parseInputValue(value);
        this.onChange(date);
        this.writePicker(date);
    };
    NbDatepickerDirective.prototype.parseInputValue = function (value) {
        if (this.datepickerAdapter.isValid(value, this.picker.format)) {
            return this.datepickerAdapter.parse(value, this.picker.format);
        }
        return null;
    };
    var NbDatepickerDirective_1;
    __decorate([
        Input('nbDatepicker'),
        __metadata("design:type", NbDatepicker),
        __metadata("design:paramtypes", [NbDatepicker])
    ], NbDatepickerDirective.prototype, "setPicker", null);
    NbDatepickerDirective = NbDatepickerDirective_1 = __decorate([
        Directive({
            selector: 'input[nbDatepicker]',
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return NbDatepickerDirective_1; }),
                    multi: true,
                },
                {
                    provide: NG_VALIDATORS,
                    useExisting: forwardRef(function () { return NbDatepickerDirective_1; }),
                    multi: true,
                },
            ],
        }),
        __param(0, Inject(NB_DOCUMENT)),
        __param(1, Inject(NB_DATE_ADAPTER)),
        __metadata("design:paramtypes", [Object, Array, ElementRef,
            NbDateService])
    ], NbDatepickerDirective);
    return NbDatepickerDirective;
}());
export { NbDatepickerDirective };
//# sourceMappingURL=datepicker.directive.js.map