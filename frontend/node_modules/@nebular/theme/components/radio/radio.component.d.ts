import { ChangeDetectorRef, EventEmitter } from '@angular/core';
/**
 * The `NbRadioComponent` provides the same functionality as native `<input type="radio">`
 * with Nebular styles and animations.
 *
 * @stacked-example(Showcase, radio/radio-showcase.component)
 *
 * ### Installation
 *
 * Import `NbRadioModule` to your feature module.
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbRadioModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * ### Usage
 *
 * Radio buttons should be wrapped in `nb-radio-group` to provide form bindings.
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio>Option 1</nb-radio>
 *   <nb-radio>Option 2</nb-radio>
 *   <nb-radio>Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * You can disable some radios in the group using a `disabled` attribute.
 *
 * @stacked-example(Disabled, radio/radio-disabled.component)
 *
 *
 * @styles
 *
 * radio-bg
 * radio-fg
 * radio-size
 * radio-border-size
 * radio-border-color
 * radio-checkmark
 * radio-checked-bg
 * radio-checked-size
 * radio-checked-border-size
 * radio-checked-border-color
 * radio-checked-checkmark
 * radio-disabled-bg
 * radio-disabled-size
 * radio-disabled-border-size
 * radio-disabled-border-color
 * radio-disabled-checkmark
 * */
export declare class NbRadioComponent {
    protected cd: ChangeDetectorRef;
    name: string;
    checked: boolean;
    value: any;
    setDisabled: boolean;
    valueChange: EventEmitter<any>;
    blur: EventEmitter<void>;
    disabled: boolean;
    constructor(cd: ChangeDetectorRef);
    markForCheck(): void;
    onChange(event: Event): void;
    onClick(event: Event): void;
}
