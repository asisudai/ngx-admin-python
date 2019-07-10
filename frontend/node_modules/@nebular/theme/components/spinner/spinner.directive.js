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
import { ComponentFactoryResolver, Directive, ElementRef, Input, Renderer2, ViewContainerRef, HostBinding, } from '@angular/core';
import { NbSpinnerComponent } from './spinner.component';
/**
 * Styled spinner directive
 *
 * @stacked-example(Spinner Showcase, spinner/spinner-card.component)
 *
 *
 * ```ts
 * <nb-card [nbSpinner]="loading" nbSpinnerStatus="danger">
 *   <nb-card-body>Card Content</nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbSpinnerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbSpinnerModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Could be colored using `status` property
 *
 * @stacked-example(Spinner Colors, spinner/spinner-colors.component)
 *
 * Available in different sizes with `size` property:
 *
 * @stacked-example(Spinner Sizes, spinner/spinner-sizes.component)
 *
 * It is also possible to place it into the button:
 * @stacked-example(Buttons with spinner, spinner/spinner-button.component)
 *
 * Or tabs:
 * @stacked-example(Spinner in tabs, spinner/spinner-tabs.component)
 */
var NbSpinnerDirective = /** @class */ (function () {
    function NbSpinnerDirective(directiveView, componentFactoryResolver, renderer, directiveElement) {
        this.directiveView = directiveView;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
        this.directiveElement = directiveElement;
        this.isSpinnerExist = false;
        this.shouldShow = false;
    }
    Object.defineProperty(NbSpinnerDirective.prototype, "nbSpinner", {
        /**
         * Directive value - show or hide spinner
         * @param {boolean} val
         */
        set: function (val) {
            if (this.componentFactory) {
                if (val) {
                    this.show();
                }
                else {
                    this.hide();
                }
            }
            else {
                this.shouldShow = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    NbSpinnerDirective.prototype.ngOnInit = function () {
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(NbSpinnerComponent);
        if (this.shouldShow) {
            this.show();
        }
    };
    NbSpinnerDirective.prototype.hide = function () {
        if (this.isSpinnerExist) {
            this.directiveView.remove();
            this.isSpinnerExist = false;
        }
    };
    NbSpinnerDirective.prototype.show = function () {
        if (!this.isSpinnerExist) {
            this.spinner = this.directiveView.createComponent(this.componentFactory);
            this.setInstanceInputs(this.spinner.instance);
            this.spinner.changeDetectorRef.detectChanges();
            this.renderer.appendChild(this.directiveElement.nativeElement, this.spinner.location.nativeElement);
            this.isSpinnerExist = true;
        }
    };
    NbSpinnerDirective.prototype.setInstanceInputs = function (instance) {
        typeof this.spinnerMessage !== 'undefined' && (instance.message = this.spinnerMessage);
        typeof this.spinnerStatus !== 'undefined' && (instance.status = this.spinnerStatus);
        typeof this.spinnerSize !== 'undefined' && (instance.size = this.spinnerSize);
    };
    __decorate([
        HostBinding('class.nb-spinner-container'),
        __metadata("design:type", Object)
    ], NbSpinnerDirective.prototype, "isSpinnerExist", void 0);
    __decorate([
        Input('nbSpinnerMessage'),
        __metadata("design:type", String)
    ], NbSpinnerDirective.prototype, "spinnerMessage", void 0);
    __decorate([
        Input('nbSpinnerStatus'),
        __metadata("design:type", String)
    ], NbSpinnerDirective.prototype, "spinnerStatus", void 0);
    __decorate([
        Input('nbSpinnerSize'),
        __metadata("design:type", String)
    ], NbSpinnerDirective.prototype, "spinnerSize", void 0);
    __decorate([
        Input('nbSpinner'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbSpinnerDirective.prototype, "nbSpinner", null);
    NbSpinnerDirective = __decorate([
        Directive({ selector: '[nbSpinner]' }),
        __metadata("design:paramtypes", [ViewContainerRef,
            ComponentFactoryResolver,
            Renderer2,
            ElementRef])
    ], NbSpinnerDirective);
    return NbSpinnerDirective;
}());
export { NbSpinnerDirective };
//# sourceMappingURL=spinner.directive.js.map