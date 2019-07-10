import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ComponentRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { NbAdjustableConnectedPositionStrategy, NbOverlayRef, NbOverlayService, NbPortalDirective, NbPosition, NbPositionBuilderService, NbScrollStrategy, NbTriggerStrategy } from '../cdk';
import { NbOptionComponent } from './option.component';
export declare class NbSelectLabelComponent {
}
/**
 * The `NbSelectComponent` provides a capability to select one of the passed items.
 *
 * @stacked-example(Showcase, select/select-showcase.component)
 *
 * ### Installation
 *
 * Import `NbSelectModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbSelectModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to use it as the multi-select control you have to mark it as `multiple`.
 * In this case, `nb-select` will work only with arrays - accept arrays and propagate arrays.
 *
 * @stacked-example(Multiple, select/select-multiple.component)
 *
 * Items without values will clean selection.
 *
 * @stacked-example(Clean selection, select/select-clean.component)
 *
 * Select may be bounded using `selected` input:
 *
 * ```html
 * <nb-select [(selected)]="selected"></nb-selected>
 * ```
 *
 * Or you can bind control with form controls or ngModel:
 *
 * @stacked-example(Select form binding, select/select-form.component)
 *
 * Options in the select may be grouped using `nb-option-group` component.
 *
 * @stacked-example(Grouping, select/select-groups.component)
 *
 * Select may have a placeholder that will be shown when nothing selected:
 *
 * @stacked-example(Placeholder, select/select-placeholder.component)
 *
 * You can disable select, options and whole groups.
 *
 * @stacked-example(Disabled select, select/select-disabled.component)
 *
 * Also, the custom label may be provided in select.
 * This custom label will be used for instead placeholder when something selected.
 *
 * @stacked-example(Custom label, select/select-label.component)
 *
 * Default `nb-select` size is `medium` and status color is `primary`.
 * Select is available in multiple colors using `status` property:
 *
 * @stacked-example(Select statuses, select/select-status.component)
 *
 * There are four select sizes:
 *
 * @stacked-example(Select sizes, select/select-sizes.component)
 *
 * And two additional style types - `outline`:
 *
 * @stacked-example(Outline select, select/select-outline.component)
 *
 * and `hero`:
 *
 * @stacked-example(Select colors, select/select-hero.component)
 *
 * Select is available in different shapes, that could be combined with the other properties:
 *
 * @stacked-example(Select shapes, select/select-shapes.component)
 *
 *
 * @styles
 *
 * select-border-width:
 * select-max-height:
 * select-bg:
 * select-checkbox-color:
 * select-checkmark-color:
 * select-option-disabled-bg:
 * select-option-disabled-opacity:
 * select-option-padding:
 * */
export declare class NbSelectComponent<T> implements OnInit, AfterViewInit, AfterContentInit, OnDestroy, ControlValueAccessor {
    protected document: any;
    protected overlay: NbOverlayService;
    protected hostRef: ElementRef<HTMLElement>;
    protected positionBuilder: NbPositionBuilderService;
    protected cd: ChangeDetectorRef;
    /**
     * Select size, available sizes:
     * `xxsmall`, `xsmall`, `small`, `medium`, `large`
     */
    size: string;
    /**
     * Select status (adds specific styles):
     * `primary`, `info`, `success`, `warning`, `danger`
     */
    status: string;
    /**
     * Select shapes: `rectangle`, `round`, `semi-round`
     */
    shape: string;
    /**
     * Adds `hero` styles
     */
    hero: boolean;
    /**
     * Disables the select
     */
    disabled: boolean;
    /**
     * If set element will fill its container
     */
    fullWidth: boolean;
    /**
     * Adds `outline` styles
     */
    outline: boolean;
    /**
     * Renders select placeholder if nothing selected.
     * */
    placeholder: string;
    /**
     * Will be emitted when selected value changes.
     * */
    selectedChange: EventEmitter<T | T[]>;
    /**
     * Accepts selected item or array of selected items.
     * */
    setSelected: T | T[];
    /**
     * Gives capability just write `multiple` over the element.
     * */
    setMultiple: boolean;
    /**
     * List of `NbOptionComponent`'s components passed as content.
     * TODO maybe it would be better provide wrapper
     * */
    options: QueryList<NbOptionComponent<T>>;
    /**
     * Custom select label, will be rendered instead of default enumeration with coma.
     * */
    customLabel: any;
    /**
     * NbCard with options content.
     * */
    portal: NbPortalDirective;
    button: ElementRef<HTMLButtonElement>;
    multiple: boolean;
    /**
     * List of selected options.
     * */
    selectionModel: NbOptionComponent<T>[];
    positionStrategy: NbAdjustableConnectedPositionStrategy;
    /**
     * Current overlay position because of we have to toggle overlayPosition
     * in [ngClass] direction and this directive can use only string.
     */
    overlayPosition: NbPosition;
    /**
     * Stream of events that will fire when one of the options fire selectionChange event.
     * */
    protected selectionChange$: Subject<NbOptionComponent<T>>;
    readonly selectionChange: Observable<NbOptionComponent<T>>;
    protected ref: NbOverlayRef;
    protected triggerStrategy: NbTriggerStrategy;
    protected alive: boolean;
    /**
     * If a user assigns value before content nb-options's rendered the value will be putted in this variable.
     * And then applied after content rendered.
     * Only the last value will be applied.
     * */
    protected queue: T | T[];
    /**
     * Function passed through control value accessor to propagate changes.
     * */
    protected onChange: Function;
    protected onTouched: Function;
    constructor(document: any, overlay: NbOverlayService, hostRef: ElementRef<HTMLElement>, positionBuilder: NbPositionBuilderService, cd: ChangeDetectorRef);
    /**
     * Determines is select opened.
     * */
    readonly isOpened: boolean;
    /**
     * Determines is select hidden.
     * */
    readonly isHidden: boolean;
    /**
     * Returns width of the select button.
     * */
    readonly hostWidth: number;
    /**
     * Content rendered in the label.
     * */
    readonly selectionView: any;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: T | T[]): void;
    /**
     * Selects option or clear all selected options if value is null.
     * */
    protected handleSelect(option: NbOptionComponent<T>): void;
    /**
     * Deselect all selected options.
     * */
    protected reset(): void;
    /**
     * Determines how to select option as multiple or single.
     * */
    protected selectOption(option: NbOptionComponent<T>): void;
    /**
     * Select single option.
     * */
    protected handleSingleSelect(option: NbOptionComponent<T>): void;
    /**
     * Select for multiple options.
     * */
    protected handleMultipleSelect(option: NbOptionComponent<T>): void;
    protected createOverlay(): void;
    protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy;
    protected createScrollStrategy(): NbScrollStrategy;
    protected createTriggerStrategy(): NbTriggerStrategy;
    protected subscribeOnTriggers(): void;
    protected subscribeOnPositionChange(): void;
    protected subscribeOnSelectionChange(): void;
    protected getContainer(): ComponentRef<any>;
    /**
     * Propagate selected value.
     * */
    protected emitSelected(selected: T | T[]): void;
    /**
     * Set selected value in model.
     * */
    protected setSelection(value: T | T[]): void;
    protected cleanSelection(): void;
    /**
     * Selects value.
     * */
    protected selectValue(value: T): void;
    /**
     * Sets touched if focus moved outside of button and overlay,
     * ignoring the case when focus moved to options overlay.
     */
    trySetTouched(): void;
    protected isClickedWithinComponent($event: Event): boolean;
    protected subscribeOnOptionsSelectionChange(): void;
}
