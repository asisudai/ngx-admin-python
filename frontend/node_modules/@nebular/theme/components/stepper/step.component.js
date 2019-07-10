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
import { Component, forwardRef, Inject, Input, TemplateRef, ViewChild, } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NbStepperComponent } from './stepper.component';
import { convertToBoolProperty } from '../helpers';
/**
 * Component intended to be used within  the `<nb-stepper>` component.
 * Container for a step
 */
var NbStepComponent = /** @class */ (function () {
    function NbStepComponent(stepper) {
        this.stepper = stepper;
        this.completedValue = false;
        this.interacted = false;
    }
    Object.defineProperty(NbStepComponent.prototype, "isLabelTemplate", {
        /**
         * Check that label is a TemplateRef.
         *
         * @return boolean
         * */
        get: function () {
            return this.label instanceof TemplateRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbStepComponent.prototype, "completed", {
        /**
         * Whether step is marked as completed.
         *
         * @type {boolean}
         */
        get: function () {
            return this.completedValue || this.isCompleted;
        },
        set: function (value) {
            this.completedValue = convertToBoolProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbStepComponent.prototype, "isCompleted", {
        get: function () {
            return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Mark step as selected
     * */
    NbStepComponent.prototype.select = function () {
        this.stepper.selected = this;
    };
    /**
     * Reset step and stepControl state
     * */
    NbStepComponent.prototype.reset = function () {
        this.interacted = false;
        if (this.stepControl) {
            this.stepControl.reset();
        }
    };
    __decorate([
        ViewChild(TemplateRef),
        __metadata("design:type", TemplateRef)
    ], NbStepComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", AbstractControl)
    ], NbStepComponent.prototype, "stepControl", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbStepComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NbStepComponent.prototype, "hidden", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbStepComponent.prototype, "completed", null);
    NbStepComponent = __decorate([
        Component({
            selector: 'nb-step',
            template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
        }),
        __param(0, Inject(forwardRef(function () { return NbStepperComponent; }))),
        __metadata("design:paramtypes", [NbStepperComponent])
    ], NbStepComponent);
    return NbStepComponent;
}());
export { NbStepComponent };
//# sourceMappingURL=step.component.js.map