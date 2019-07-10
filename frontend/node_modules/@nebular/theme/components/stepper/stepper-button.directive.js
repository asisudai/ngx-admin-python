var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NbStepperComponent } from './stepper.component';
import { Directive, HostBinding, HostListener, Input } from '@angular/core';
var NbStepperNextDirective = /** @class */ (function () {
    function NbStepperNextDirective(stepper) {
        this.stepper = stepper;
        this.type = 'submit';
    }
    NbStepperNextDirective.prototype.onClick = function () {
        this.stepper.next();
    };
    __decorate([
        Input(), HostBinding('attr.type'),
        __metadata("design:type", String)
    ], NbStepperNextDirective.prototype, "type", void 0);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NbStepperNextDirective.prototype, "onClick", null);
    NbStepperNextDirective = __decorate([
        Directive({
            selector: 'button[nbStepperNext]',
        }),
        __metadata("design:paramtypes", [NbStepperComponent])
    ], NbStepperNextDirective);
    return NbStepperNextDirective;
}());
export { NbStepperNextDirective };
var NbStepperPreviousDirective = /** @class */ (function () {
    function NbStepperPreviousDirective(stepper) {
        this.stepper = stepper;
        this.type = 'button';
    }
    NbStepperPreviousDirective.prototype.onClick = function () {
        this.stepper.previous();
    };
    __decorate([
        Input(), HostBinding('attr.type'),
        __metadata("design:type", String)
    ], NbStepperPreviousDirective.prototype, "type", void 0);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NbStepperPreviousDirective.prototype, "onClick", null);
    NbStepperPreviousDirective = __decorate([
        Directive({
            selector: 'button[nbStepperPrevious]',
        }),
        __metadata("design:paramtypes", [NbStepperComponent])
    ], NbStepperPreviousDirective);
    return NbStepperPreviousDirective;
}());
export { NbStepperPreviousDirective };
//# sourceMappingURL=stepper-button.directive.js.map