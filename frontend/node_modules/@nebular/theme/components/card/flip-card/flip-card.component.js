var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding } from '@angular/core';
/**
 *
 * Flip card example:
 * @stacked-example(Showcase, flip-card/flip-card-showcase.component)
 *
 * As a content Flip card accepts two instances of `nb-card` - for front and back sides.
 *
 * Basic flip card configuration:
 *
 * ```html
 * <nb-flip-card>
 *   <nb-card-front>
 *     <nb-card>
 *       <nb-card-body>
 *         Front
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-front>
 *   <nb-card-back>
 *     <nb-card>
 *       <nb-card-body>
 *         Back
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-back>
 * </nb-flip-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Flip Card with header and footer:
 * @stacked-example(With Header & Footer, flip-card/flip-card-full.component.ts)
 *
 * Colored flip-cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, flip-card/flip-card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, flip-card/flip-card-accents.component)
 *
 * @additional-example(Multiple Sizes, flip-card/flip-card-sizes.component)
 *
 */
var NbFlipCardComponent = /** @class */ (function () {
    function NbFlipCardComponent() {
        /**
         * Flip state
         * @type boolean
         */
        this.flipped = false;
        /**
         * Show/hide toggle button to be able to control toggle from your code
         * @type {boolean}
         */
        this.showToggleButton = true;
    }
    NbFlipCardComponent.prototype.toggle = function () {
        this.flipped = !this.flipped;
    };
    __decorate([
        Input(),
        HostBinding('class.flipped'),
        __metadata("design:type", Boolean)
    ], NbFlipCardComponent.prototype, "flipped", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbFlipCardComponent.prototype, "showToggleButton", void 0);
    NbFlipCardComponent = __decorate([
        Component({
            selector: 'nb-flip-card',
            styles: [":host{display:block;perspective:1200px;position:relative}:host-context(.flipped) .flipcard-body{transform:rotateY(-180deg)}:host-context(.flipped) .flipcard-body .front-container{opacity:0;transition:opacity 0s 0.25s;backface-visibility:hidden}:host-context(.flipped) .flipcard-body .front-container .flip-button{opacity:0;z-index:-1}:host-context(.flipped) .flipcard-body .back-container{backface-visibility:visible}.flipcard-body{display:flex;transition:transform 0.5s;transform-style:preserve-3d}.flipcard-body .front-container,.flipcard-body .back-container{flex:1}.flipcard-body .front-container .flip-button,.flipcard-body .back-container .flip-button{cursor:pointer;position:absolute;right:0;bottom:0;opacity:1;transition:opacity 0s 0.15s}.flipcard-body .front-container{backface-visibility:visible;transition:opacity 0s 0.2s}.flipcard-body .back-container{backface-visibility:hidden;transform:rotateY(180deg)} "],
            template: "\n    <div class=\"flipcard-body\">\n      <div class=\"front-container\">\n        <ng-content select=\"nb-card-front\"></ng-content>\n        <a *ngIf=\"showToggleButton\" class=\"flip-button\" (click)=\"toggle()\">\n          <i class=\"nb-arrow-dropleft\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n      <div class=\"back-container\">\n        <ng-content select=\"nb-card-back\"></ng-content>\n        <a *ngIf=\"showToggleButton\" class=\"flip-button\" (click)=\"toggle()\">\n          <i class=\"nb-arrow-dropleft\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n    </div>\n  ",
        })
    ], NbFlipCardComponent);
    return NbFlipCardComponent;
}());
export { NbFlipCardComponent };
//# sourceMappingURL=flip-card.component.js.map