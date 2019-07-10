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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, forwardRef, Inject, Input, Output, QueryList, ViewChild, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { take, takeWhile } from 'rxjs/operators';
import { merge, Subject } from 'rxjs';
import { NbAdjustment, NbOverlayService, NbPortalDirective, NbPosition, NbPositionBuilderService, NbTrigger, NbTriggerStrategyBuilder, } from '../cdk';
import { NbOptionComponent } from './option.component';
import { NbButtonComponent } from '../button/button.component';
import { NB_DOCUMENT } from '../../theme.options';
import { convertToBoolProperty } from '../helpers';
var NbSelectLabelComponent = /** @class */ (function () {
    function NbSelectLabelComponent() {
    }
    NbSelectLabelComponent = __decorate([
        Component({
            selector: 'nb-select-label',
            template: '<ng-content></ng-content>',
        })
    ], NbSelectLabelComponent);
    return NbSelectLabelComponent;
}());
export { NbSelectLabelComponent };
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
var NbSelectComponent = /** @class */ (function () {
    function NbSelectComponent(document, overlay, hostRef, positionBuilder, cd) {
        this.document = document;
        this.overlay = overlay;
        this.hostRef = hostRef;
        this.positionBuilder = positionBuilder;
        this.cd = cd;
        /**
         * Select status (adds specific styles):
         * `primary`, `info`, `success`, `warning`, `danger`
         */
        this.status = 'primary';
        /**
         * Renders select placeholder if nothing selected.
         * */
        this.placeholder = '';
        /**
         * Will be emitted when selected value changes.
         * */
        this.selectedChange = new EventEmitter();
        this.multiple = false;
        /**
         * List of selected options.
         * */
        this.selectionModel = [];
        /**
         * Current overlay position because of we have to toggle overlayPosition
         * in [ngClass] direction and this directive can use only string.
         */
        this.overlayPosition = '';
        /**
         * Stream of events that will fire when one of the options fire selectionChange event.
         * */
        this.selectionChange$ = new Subject();
        this.selectionChange = this.selectionChange$.asObservable();
        this.alive = true;
        /**
         * Function passed through control value accessor to propagate changes.
         * */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    NbSelectComponent_1 = NbSelectComponent;
    Object.defineProperty(NbSelectComponent.prototype, "setSelected", {
        /**
         * Accepts selected item or array of selected items.
         * */
        set: function (value) {
            this.writeValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSelectComponent.prototype, "setMultiple", {
        /**
         * Gives capability just write `multiple` over the element.
         * */
        set: function (multiple) {
            this.multiple = convertToBoolProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSelectComponent.prototype, "isOpened", {
        /**
         * Determines is select opened.
         * */
        get: function () {
            return this.ref && this.ref.hasAttached();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSelectComponent.prototype, "isHidden", {
        /**
         * Determines is select hidden.
         * */
        get: function () {
            return !this.isOpened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSelectComponent.prototype, "hostWidth", {
        /**
         * Returns width of the select button.
         * */
        get: function () {
            return this.hostRef.nativeElement.getBoundingClientRect().width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSelectComponent.prototype, "selectionView", {
        /**
         * Content rendered in the label.
         * */
        get: function () {
            if (this.selectionModel.length > 1) {
                return this.selectionModel.map(function (option) { return option.content; }).join(', ');
            }
            return this.selectionModel[0].content;
        },
        enumerable: true,
        configurable: true
    });
    NbSelectComponent.prototype.ngOnInit = function () {
        this.createOverlay();
    };
    NbSelectComponent.prototype.ngAfterViewInit = function () {
        this.triggerStrategy = this.createTriggerStrategy();
        this.subscribeOnTriggers();
        this.subscribeOnPositionChange();
        this.subscribeOnSelectionChange();
    };
    NbSelectComponent.prototype.ngAfterContentInit = function () {
        if (this.queue) {
            this.writeValue(this.queue);
            this.cd.detectChanges();
        }
    };
    NbSelectComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.ref.dispose();
    };
    NbSelectComponent.prototype.show = function () {
        if (this.isHidden) {
            this.ref.attach(this.portal);
            this.cd.markForCheck();
        }
    };
    NbSelectComponent.prototype.hide = function () {
        if (this.isOpened) {
            this.ref.detach();
            this.cd.markForCheck();
        }
    };
    NbSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbSelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cd.detectChanges();
    };
    NbSelectComponent.prototype.writeValue = function (value) {
        if (!value) {
            return;
        }
        if (this.options) {
            this.setSelection(value);
        }
        else {
            this.queue = value;
        }
    };
    /**
     * Selects option or clear all selected options if value is null.
     * */
    NbSelectComponent.prototype.handleSelect = function (option) {
        if (option.value) {
            this.selectOption(option);
        }
        else {
            this.reset();
        }
        this.cd.detectChanges();
    };
    /**
     * Deselect all selected options.
     * */
    NbSelectComponent.prototype.reset = function () {
        this.selectionModel.forEach(function (option) { return option.deselect(); });
        this.selectionModel = [];
        this.hide();
        this.button.nativeElement.focus();
        this.emitSelected(null);
    };
    /**
     * Determines how to select option as multiple or single.
     * */
    NbSelectComponent.prototype.selectOption = function (option) {
        if (this.multiple) {
            this.handleMultipleSelect(option);
        }
        else {
            this.handleSingleSelect(option);
        }
    };
    /**
     * Select single option.
     * */
    NbSelectComponent.prototype.handleSingleSelect = function (option) {
        var selected = this.selectionModel.pop();
        if (selected && selected !== option) {
            selected.deselect();
        }
        this.selectionModel = [option];
        option.select();
        this.hide();
        this.button.nativeElement.focus();
        this.emitSelected(option.value);
    };
    /**
     * Select for multiple options.
     * */
    NbSelectComponent.prototype.handleMultipleSelect = function (option) {
        if (option.selected) {
            this.selectionModel = this.selectionModel.filter(function (s) { return s.value !== option.value; });
            option.deselect();
        }
        else {
            this.selectionModel.push(option);
            option.select();
        }
        this.emitSelected(this.selectionModel.map(function (opt) { return opt.value; }));
    };
    NbSelectComponent.prototype.createOverlay = function () {
        var scrollStrategy = this.createScrollStrategy();
        this.positionStrategy = this.createPositionStrategy();
        this.ref = this.overlay.create({ positionStrategy: this.positionStrategy, scrollStrategy: scrollStrategy });
    };
    NbSelectComponent.prototype.createPositionStrategy = function () {
        return this.positionBuilder
            .connectedTo(this.hostRef)
            .position(NbPosition.BOTTOM)
            .offset(0)
            .adjustment(NbAdjustment.VERTICAL);
    };
    NbSelectComponent.prototype.createScrollStrategy = function () {
        return this.overlay.scrollStrategies.block();
    };
    NbSelectComponent.prototype.createTriggerStrategy = function () {
        var _this = this;
        return new NbTriggerStrategyBuilder()
            .document(this.document)
            .trigger(NbTrigger.CLICK)
            .host(this.hostRef.nativeElement)
            .container(function () { return _this.getContainer(); })
            .build();
    };
    NbSelectComponent.prototype.subscribeOnTriggers = function () {
        var _this = this;
        this.triggerStrategy.show$
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.show(); });
        this.triggerStrategy.hide$
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function ($event) {
            _this.hide();
            if (!_this.isClickedWithinComponent($event)) {
                _this.onTouched();
            }
        });
    };
    NbSelectComponent.prototype.subscribeOnPositionChange = function () {
        var _this = this;
        this.positionStrategy.positionChange
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (position) { return _this.overlayPosition = position; });
        this.positionStrategy.positionChange
            .pipe(take(1))
            .subscribe(function () { return _this.cd.detectChanges(); });
    };
    NbSelectComponent.prototype.subscribeOnSelectionChange = function () {
        var _this = this;
        this.subscribeOnOptionsSelectionChange();
        /**
         * If the user changes provided options list in the runtime we have to handle this
         * and resubscribe on options selection changes event.
         * Otherwise, the user will not be able to select new options.
         * */
        this.options.changes
            .subscribe(function () { return _this.subscribeOnOptionsSelectionChange(); });
        this.selectionChange
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (option) { return _this.handleSelect(option); });
    };
    NbSelectComponent.prototype.getContainer = function () {
        return this.ref && this.ref.hasAttached() && {
            location: {
                nativeElement: this.ref.overlayElement,
            },
        };
    };
    /**
     * Propagate selected value.
     * */
    NbSelectComponent.prototype.emitSelected = function (selected) {
        this.onChange(selected);
        this.selectedChange.emit(selected);
    };
    /**
     * Set selected value in model.
     * */
    NbSelectComponent.prototype.setSelection = function (value) {
        var _this = this;
        var isArray = Array.isArray(value);
        if (this.multiple && !isArray) {
            throw new Error('Can\'t assign single value if select is marked as multiple');
        }
        if (!this.multiple && isArray) {
            throw new Error('Can\'t assign array if select is not marked as multiple');
        }
        this.cleanSelection();
        if (isArray) {
            value.forEach(function (option) { return _this.selectValue(option); });
        }
        else {
            this.selectValue(value);
        }
        this.cd.markForCheck();
        this.cd.detectChanges();
    };
    NbSelectComponent.prototype.cleanSelection = function () {
        this.selectionModel.forEach(function (option) { return option.deselect(); });
        this.selectionModel = [];
    };
    /**
     * Selects value.
     * */
    NbSelectComponent.prototype.selectValue = function (value) {
        var corresponding = this.options.find(function (option) { return option.value === value; });
        if (corresponding) {
            corresponding.select();
            this.selectionModel.push(corresponding);
        }
    };
    /**
     * Sets touched if focus moved outside of button and overlay,
     * ignoring the case when focus moved to options overlay.
     */
    NbSelectComponent.prototype.trySetTouched = function () {
        if (this.isHidden) {
            this.onTouched();
        }
    };
    NbSelectComponent.prototype.isClickedWithinComponent = function ($event) {
        return this.hostRef.nativeElement === $event.target || this.hostRef.nativeElement.contains($event.target);
    };
    NbSelectComponent.prototype.subscribeOnOptionsSelectionChange = function () {
        var _this = this;
        merge.apply(void 0, this.options.map(function (it) { return it.selectionChange; })).pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (change) { return _this.selectionChange$.next(change); });
    };
    var NbSelectComponent_1;
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbSelectComponent.prototype, "size", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbSelectComponent.prototype, "status", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbSelectComponent.prototype, "shape", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbSelectComponent.prototype, "hero", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbSelectComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbSelectComponent.prototype, "fullWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbSelectComponent.prototype, "outline", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbSelectComponent.prototype, "placeholder", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], NbSelectComponent.prototype, "selectedChange", void 0);
    __decorate([
        Input('selected'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NbSelectComponent.prototype, "setSelected", null);
    __decorate([
        Input('multiple'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbSelectComponent.prototype, "setMultiple", null);
    __decorate([
        ContentChildren(NbOptionComponent, { descendants: true }),
        __metadata("design:type", QueryList)
    ], NbSelectComponent.prototype, "options", void 0);
    __decorate([
        ContentChild(NbSelectLabelComponent),
        __metadata("design:type", Object)
    ], NbSelectComponent.prototype, "customLabel", void 0);
    __decorate([
        ViewChild(NbPortalDirective),
        __metadata("design:type", NbPortalDirective)
    ], NbSelectComponent.prototype, "portal", void 0);
    __decorate([
        ViewChild(NbButtonComponent, { read: ElementRef }),
        __metadata("design:type", ElementRef)
    ], NbSelectComponent.prototype, "button", void 0);
    NbSelectComponent = NbSelectComponent_1 = __decorate([
        Component({
            selector: 'nb-select',
            template: "<button nbButton [size]=\"size\" [status]=\"status\" [shape]=\"shape\" [hero]=\"hero\" [disabled]=\"disabled\" [fullWidth]=\"fullWidth\" [outline]=\"outline\" [class.opened]=\"isOpened\" [ngClass]=\"overlayPosition\" (blur)=\"trySetTouched()\" type=\"button\"> <ng-container *ngIf=\"selectionModel?.length\"> <ng-container *ngIf=\"customLabel\"> <ng-content select=\"nb-select-label\"></ng-content> </ng-container> <ng-container *ngIf=\"!customLabel\">{{ selectionView }}</ng-container> </ng-container> <ng-container *ngIf=\"!selectionModel?.length\">{{ placeholder }}</ng-container> </button> <nb-card *nbPortal class=\"select\" [ngClass]=\"[status, overlayPosition]\" [style.width.px]=\"hostWidth\"> <nb-card-body> <ng-content select=\"nb-option, nb-option-group\"></ng-content> </nb-card-body> </nb-card> ",
            styles: ["/*! * @license * Copyright Akveo. All Rights Reserved. * Licensed under the MIT License. See License.txt in the project root for license information. */:host{display:block}:host button{position:relative;width:100%;text-align:start;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border:none}:host button::after{top:50%;right:0.75rem;position:absolute;display:inline-block;width:0;height:0;margin-left:0.255em;vertical-align:0.255em;content:'';border-top:0.3em solid;border-right:0.3em solid transparent;border-bottom:0;border-left:0.3em solid transparent} "],
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return NbSelectComponent_1; }),
                    multi: true,
                },
            ],
        }),
        __param(0, Inject(NB_DOCUMENT)),
        __metadata("design:paramtypes", [Object, NbOverlayService,
            ElementRef,
            NbPositionBuilderService,
            ChangeDetectorRef])
    ], NbSelectComponent);
    return NbSelectComponent;
}());
export { NbSelectComponent };
//# sourceMappingURL=select.component.js.map