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
import { Component, ContentChildren, HostBinding, Input, QueryList, } from '@angular/core';
import { NbStepComponent } from './step.component';
export var NbStepperOrientation;
(function (NbStepperOrientation) {
    NbStepperOrientation["VERTICAL"] = "vertical";
    NbStepperOrientation["HORIZONTAL"] = "horizontal";
})(NbStepperOrientation || (NbStepperOrientation = {}));
/**
 * Stepper component
 *
 * @stacked-example(Showcase, stepper/stepper-showcase.component)
 *
 * ### Installation
 *
 * Import `NbStepperModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbStepperModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If step label is string you can pass it as `label` attribute. Otherwise ng-template should be used:
 * ```html
 * // ...
 * <nb-stepper orientation="horizontal">
 *   <nb-step label="step number one">
 *       // ... step content here
 *   <nb-step>
 *   <nb-step label="stepLabel">
 *       <ng-template #stepLabel>
 *           <div>
 *               step number two
 *           </div>
 *       </ng-template>
 *       // ... step content here
 *   <nb-step>
 * </nb-stepper>
 * ```
 * Specify `[stepControl]="form"` and user can navigates only if submit previous step's form.
 * ```html
 * // ...
 * <nb-stepper  orientation="horizontal">
 *   <nb-step label="step number one" [stepControl]="form">
 *     <form [formGroup]="form">
 *       // ...
 *     </form>
 *   <nb-step>
 *    // ...
 * </nb-stepper>
 * ```
 *
 * @stacked-example(Validation, stepper/stepper-validation.component)
 *
 * Stepper component has two layout options - `vertical` & `horizontal`
 * @stacked-example(Vertical, stepper/stepper-vertical.component)
 *
 * @styles
 *
 * stepper-index-size:
 * stepper-label-font-size:
 * stepper-label-font-weight:
 * stepper-accent-color:
 * stepper-completed-fg:
 * stepper-fg:
 * stepper-completed-icon-size:
 * stepper-completed-icon-weight:
 */
var NbStepperComponent = /** @class */ (function () {
    function NbStepperComponent() {
        /**
         * Stepper orientation - `horizontal`|`vertical`
         * @type {string}
         */
        this.orientation = NbStepperOrientation.HORIZONTAL;
        this.index = 0;
    }
    Object.defineProperty(NbStepperComponent.prototype, "vertical", {
        get: function () {
            return this.orientation === NbStepperOrientation.VERTICAL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbStepperComponent.prototype, "horizontal", {
        get: function () {
            return this.orientation === NbStepperOrientation.HORIZONTAL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbStepperComponent.prototype, "selectedIndex", {
        /**
         * Selected step index
         *
         * @type {boolean}
         */
        get: function () {
            return this.index;
        },
        set: function (index) {
            if (this.steps) {
                if (this.index !== index && this.isStepValid(index)) {
                    this.index = index;
                }
            }
            else {
                this.index = index;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbStepperComponent.prototype, "selected", {
        /**
         * Selected step component
         *
         * @type {boolean}
         */
        get: function () {
            return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
        },
        set: function (step) {
            this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Navigate to next step
     * */
    NbStepperComponent.prototype.next = function () {
        this.selectedIndex = Math.min(this.index + 1, this.steps.length - 1);
    };
    /**
     * Navigate to previous step
     * */
    NbStepperComponent.prototype.previous = function () {
        this.selectedIndex = Math.max(this.index - 1, 0);
    };
    /**
     * Reset stepper and stepControls to initial state
     * */
    NbStepperComponent.prototype.reset = function () {
        this.selectedIndex = 0;
        this.steps.forEach(function (step) { return step.reset(); });
    };
    NbStepperComponent.prototype.isStepSelected = function (step) {
        return this.index === this.steps.toArray().indexOf(step);
    };
    NbStepperComponent.prototype.isStepValid = function (index) {
        var steps = this.steps.toArray();
        steps[this.index].interacted = true;
        if (index >= this.index && index > 0) {
            var currentStep = steps[this.index];
            return currentStep.completed;
        }
        return true;
    };
    __decorate([
        ContentChildren(NbStepComponent),
        __metadata("design:type", QueryList)
    ], NbStepperComponent.prototype, "steps", void 0);
    __decorate([
        HostBinding('class.vertical'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbStepperComponent.prototype, "vertical", null);
    __decorate([
        HostBinding('class.horizontal'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbStepperComponent.prototype, "horizontal", null);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], NbStepperComponent.prototype, "selectedIndex", null);
    __decorate([
        Input(),
        __metadata("design:type", NbStepComponent),
        __metadata("design:paramtypes", [NbStepComponent])
    ], NbStepperComponent.prototype, "selected", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbStepperComponent.prototype, "orientation", void 0);
    NbStepperComponent = __decorate([
        Component({
            selector: 'nb-stepper',
            styles: [":host.horizontal .header .step{flex-direction:column}:host.horizontal .header .connector{height:2px}:host.vertical{display:flex;height:100%}:host.vertical .header{flex-direction:column}:host.vertical .header .label{margin:0 10px}:host.vertical .header .connector{width:2px}.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px}.header .connector{flex:auto}.header .step{display:flex;align-items:center;cursor:pointer}.header .label-index{margin-bottom:10px;display:flex;justify-content:center;align-items:center}.header .label{width:max-content} "],
            template: "<ng-template><ng-content select=\"nb-step\"></ng-content></ng-template> <div class=\"header\"> <ng-container *ngFor=\"let step of steps; let index = index; let first = first\"> <div *ngIf=\"!first && !step.hidden\" [class.connector-past]=\"index < selectedIndex\" class=\"connector\"></div> <div *ngIf=\"!step.hidden\" class=\"step\" [class.selected]=\"isStepSelected(step)\" [class.completed]=\"!isStepSelected(step) && step.completed\" (click)=\"step.select()\"> <div class=\"label-index\"> <span *ngIf=\"!step.completed || isStepSelected(step)\">{{ index + 1 }}</span> <i *ngIf=\"!isStepSelected(step) && step.completed\" class=\"icon nb-checkmark\"></i> </div> <div class=\"label\"> <ng-container *ngIf=\"step.isLabelTemplate\"> <ng-container *ngTemplateOutlet=\"step.label\"></ng-container> </ng-container> <span *ngIf=\"!step.isLabelTemplate\">{{ step.label }}</span> </div> </div> </ng-container> </div> <div class=\"step-content\"> <ng-container [ngTemplateOutlet]=\"selected?.content\"></ng-container> </div> ",
        })
    ], NbStepperComponent);
    return NbStepperComponent;
}());
export { NbStepperComponent };
//# sourceMappingURL=stepper.component.js.map