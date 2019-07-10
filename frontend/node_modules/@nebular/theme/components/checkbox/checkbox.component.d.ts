/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
/**
 * Styled checkbox component
 *
 * @stacked-example(Showcase, checkbox/checkbox-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCheckboxComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbCheckboxModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Can have one of the following statuses: danger, success or warning
 *
 * @stacked-example(Colored Checkboxes, checkbox/checkbox-status.component)
 *
 * @additional-example(Disabled Checkbox, checkbox/checkbox-disabled.component)
 *
 * @styles
 *
 * checkbox-bg:
 * checkbox-size:
 * checkbox-border-size:
 * checkbox-border-color:
 * checkbox-checkmark:
 * checkbox-checked-bg:
 * checkbox-checked-size:
 * checkbox-checked-border-size:
 * checkbox-checked-border-color:
 * checkbox-checked-checkmark:
 * checkbox-disabled-bg:
 * checkbox-disabled-size:
 * checkbox-disabled-border-size:
 * checkbox-disabled-border-color:
 * checkbox-disabled-checkmark:
 */
export declare class NbCheckboxComponent implements ControlValueAccessor {
    private changeDetector;
    status: string;
    /**
     * Checkbox value
     * @type {boolean}
     * @private
     */
    _value: boolean;
    disabled: boolean;
    setDisabled: boolean;
    /**
     * Checkbox status (success, warning, danger)
     * @param {string} val
     */
    setStatus: string;
    readonly success: boolean;
    readonly warning: boolean;
    readonly danger: boolean;
    onChange: any;
    onTouched: any;
    value: boolean;
    constructor(changeDetector: ChangeDetectorRef);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(val: any): void;
    setDisabledState(val: boolean): void;
    setTouched(): void;
}
