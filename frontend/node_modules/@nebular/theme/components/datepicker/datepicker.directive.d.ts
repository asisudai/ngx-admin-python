import { ElementRef, InjectionToken, OnDestroy } from '@angular/core';
import { ControlValueAccessor, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { Type } from '@angular/core/src/type';
import { Observable } from 'rxjs';
import { NbDateService } from '../calendar-kit';
/**
 * The `NbDatepickerAdapter` instances provide way how to parse, format and validate
 * different date types.
 * */
export declare abstract class NbDatepickerAdapter<D> {
    /**
     * Picker component class.
     * */
    abstract picker: Type<any>;
    /**
     * Parse date string according to the format.
     * */
    abstract parse(value: string, format: string): D;
    /**
     * Format date according to the format.
     * */
    abstract format(value: D, format: string): string;
    /**
     * Validates date string according to the passed format.
     * */
    abstract isValid(value: string, format: string): boolean;
}
/**
 * Validators config that will be used by form control to perform proper validation.
 * */
export interface NbPickerValidatorConfig<D> {
    /**
     * Minimum date available in picker.
     * */
    min: D;
    /**
     * Maximum date available in picker.
     * */
    max: D;
    /**
     * Predicate that determines is value available for picking.
     * */
    filter: (D: any) => boolean;
}
/**
 * Datepicker is an control that can pick any values anyway.
 * It has to be bound to the datepicker directive through nbDatepicker input.
 * */
export declare abstract class NbDatepicker<T> {
    /**
     * HTML input element date format.
     * */
    abstract format: string;
    abstract value: T;
    abstract readonly valueChange: Observable<T>;
    /**
     * Attaches datepicker to the native input element.
     * */
    abstract attach(hostRef: ElementRef): any;
    /**
     * Returns validator configuration based on the input properties.
     * */
    abstract getValidatorConfig(): NbPickerValidatorConfig<T>;
    abstract show(): any;
    abstract hide(): any;
    abstract shouldHide(): boolean;
    abstract readonly isShown: boolean;
    abstract readonly blur: Observable<void>;
}
export declare const NB_DATE_ADAPTER: InjectionToken<NbDatepickerAdapter<any>>;
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
export declare class NbDatepickerDirective<D> implements OnDestroy, ControlValueAccessor, Validator {
    protected document: any;
    protected datepickerAdapters: NbDatepickerAdapter<D>[];
    protected hostRef: ElementRef;
    protected dateService: NbDateService<D>;
    /**
     * Provides datepicker component.
     * */
    setPicker: NbDatepicker<D>;
    /**
     * Datepicker adapter.
     * */
    protected datepickerAdapter: NbDatepickerAdapter<D>;
    /**
     * Datepicker instance.
     * */
    protected picker: NbDatepicker<D>;
    protected alive: boolean;
    protected onChange: (D: any) => void;
    protected onTouched: () => void;
    /**
     * Form control validators will be called in validators context, so, we need to bind them.
     * */
    protected validator: ValidatorFn;
    constructor(document: any, datepickerAdapters: NbDatepickerAdapter<D>[], hostRef: ElementRef, dateService: NbDateService<D>);
    /**
     * Returns html input element.
     * */
    readonly input: HTMLInputElement;
    /**
     * Returns host input value.
     * */
    readonly inputValue: string;
    ngOnDestroy(): void;
    /**
     * Writes value in picker and html input element.
     * */
    writeValue(value: D): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    /**
     * Form control validation based on picker validator config.
     * */
    validate(): ValidationErrors | null;
    /**
     * Hides picker, focuses the input
     */
    protected hidePicker(): void;
    /**
     * Validates that we can parse value correctly.
     * */
    protected parseValidator(): ValidationErrors | null;
    /**
     * Validates passed value is greater than min.
     * */
    protected minValidator(): ValidationErrors | null;
    /**
     * Validates passed value is smaller than max.
     * */
    protected maxValidator(): ValidationErrors | null;
    /**
     * Validates passed value satisfy the filter.
     * */
    protected filterValidator(): ValidationErrors | null;
    /**
     * Chooses datepicker adapter based on passed picker component.
     * */
    protected chooseDatepickerAdapter(): void;
    /**
     * Attaches picker to the host input element and subscribes on value changes.
     * */
    protected setupPicker(): void;
    protected writePicker(value: D): void;
    protected writeInput(value: D): void;
    /**
     * Validates if no datepicker adapter provided.
     * */
    protected noDatepickerAdapterProvided(): boolean;
    protected subscribeOnInputChange(): void;
    /**
     * Parses input value and write if it isn't null.
     * */
    protected handleInputChange(value: string): void;
    protected parseInputValue(value: any): D | null;
}
