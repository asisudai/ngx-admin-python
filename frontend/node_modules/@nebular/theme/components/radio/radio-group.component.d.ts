import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnDestroy, QueryList, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NbRadioComponent } from './radio.component';
/**
 * The `NbRadioGroupComponent` is the wrapper for `nb-radio` button.
 * It provides form bindings:
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio>Option 1</nb-radio>
 *   <nb-radio>Option 2</nb-radio>
 *   <nb-radio>Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Also, you can use `value` and `valueChange` for binding without forms.
 *
 * ```html
 * <nb-radio-group [(value)]="selectedOption">
 *   <nb-radio>Option 1</nb-radio>
 *   <nb-radio>Option 2</nb-radio>
 *   <nb-radio>Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Radio items name has to be provided through `name` input property of the radio group.
 *
 * ```html
 * <nb-radio-group name="my-radio-group">
 *   ...
 * </nb-radio-group>
 * ```
 *
 * Also, you can disable the whole group using `disabled` attribute.
 *
 * ```html
 * <nb-radio-group disabled>
 *   ...
 * </nb-radio-group>
 * ```
 * */
export declare class NbRadioGroupComponent implements AfterContentInit, OnDestroy, ControlValueAccessor {
    protected cd: ChangeDetectorRef;
    protected hostElement: ElementRef<HTMLElement>;
    protected platformId: any;
    protected document: any;
    radios: QueryList<NbRadioComponent>;
    setValue: any;
    setName: string;
    setDisabled: boolean;
    valueChange: EventEmitter<any>;
    protected disabled: boolean;
    protected value: any;
    protected name: string;
    protected alive: boolean;
    protected onChange: (value: any) => void;
    protected onTouched: () => void;
    constructor(cd: ChangeDetectorRef, hostElement: ElementRef<HTMLElement>, platformId: any, document: any);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: any): void;
    protected updateNames(): void;
    protected updateValues(): void;
    protected updateDisabled(): void;
    protected subscribeOnRadiosValueChange(): void;
    protected propagateValue(value: any): void;
    protected markRadiosForCheck(): void;
    protected subscribeOnRadiosBlur(): void;
}
