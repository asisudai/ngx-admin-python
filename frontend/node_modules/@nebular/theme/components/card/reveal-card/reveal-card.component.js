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
 * Reveal card example:
 * @stacked-example(My example, reveal-card/reveal-card-showcase.component)
 *
 * As a content Reveal card accepts two instances of `nb-card` - for front and back sides.
 *
 * Basic reveal card configuration:
 *
 * ```html
 * <nb-reveal-card>
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
 * </nb-reveal-card>
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
 * Reveal Card with header and footer:
 * @stacked-example(With Header & Footer, reveal-card/reveal-card-full.component)
 *
 * Colored reveal-cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, reveal-card/reveal-card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, reveal-card/reveal-card-accents.component)
 *
 * @additional-example(Multiple Sizes, reveal-card/reveal-card-sizes.component)
 */
var NbRevealCardComponent = /** @class */ (function () {
    function NbRevealCardComponent() {
        /**
         * Reveal state
         * @type boolean
         */
        this.revealed = false;
        /**
         * Show/hide toggle button to be able to control toggle from your code
         * @type {boolean}
         */
        this.showToggleButton = true;
    }
    NbRevealCardComponent.prototype.toggle = function () {
        this.revealed = !this.revealed;
    };
    __decorate([
        Input(),
        HostBinding('class.revealed'),
        __metadata("design:type", Boolean)
    ], NbRevealCardComponent.prototype, "revealed", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbRevealCardComponent.prototype, "showToggleButton", void 0);
    NbRevealCardComponent = __decorate([
        Component({
            selector: 'nb-reveal-card',
            styles: [":host{display:block;position:relative;overflow:hidden}:host.revealed .second-card-container{top:0;transition:none}:host.revealed .second-card-container /deep/ nb-card-back{top:0}:host.revealed .reveal-button{transform:none}:host /deep/ nb-card-front{display:block;height:100%}:host .second-card-container{position:absolute;top:100%;right:0;left:0;overflow:hidden;transition:top 0s 0.5s}:host .second-card-container /deep/ nb-card-back{position:absolute;left:0;top:100%;width:100%;transition:top 0.5s}:host .reveal-button{cursor:pointer;position:absolute;right:0;bottom:0;transform:rotate(180deg);transition:transform 0.3s} "],
            template: "\n    <ng-content select=\"nb-card-front\"></ng-content>\n    <div class=\"second-card-container\">\n      <ng-content select=\"nb-card-back\"></ng-content>\n    </div>\n    <a *ngIf=\"showToggleButton\" class=\"reveal-button\" (click)=\"toggle()\">\n      <i class=\"nb-arrow-dropdown\" aria-hidden=\"true\"></i>\n    </a>\n  ",
        })
    ], NbRevealCardComponent);
    return NbRevealCardComponent;
}());
export { NbRevealCardComponent };
//# sourceMappingURL=reveal-card.component.js.map