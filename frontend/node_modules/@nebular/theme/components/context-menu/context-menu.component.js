/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { NbPositionedContainer } from '../cdk';
/**
 * Context menu component used as content within NbContextMenuDirective.
 *
 * @styles
 *
 * context-menu-fg
 * context-menu-active-fg
 * context-menu-active-bg
 * */
var NbContextMenuComponent = /** @class */ (function (_super) {
    __extends(NbContextMenuComponent, _super);
    function NbContextMenuComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.items = [];
        return _this;
    }
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], NbContextMenuComponent.prototype, "items", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbContextMenuComponent.prototype, "tag", void 0);
    NbContextMenuComponent = __decorate([
        Component({
            selector: 'nb-context-menu',
            styles: [":host .arrow{position:absolute;width:0;height:0}:host /deep/ nb-menu{display:inline;font-size:0.875rem;line-height:1.5rem}:host /deep/ nb-menu ul.menu-items{margin:0;padding:0.5rem 0}:host /deep/ nb-menu ul.menu-items .menu-item{border:none;white-space:nowrap}:host /deep/ nb-menu ul.menu-items .menu-item:first-child{border:none}:host /deep/ nb-menu ul.menu-items .menu-item a{cursor:pointer;border-radius:0;padding:0}:host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon{font-size:1.5rem;width:auto}:host /deep/ nb-menu ul.menu-items .menu-item a .menu-title{padding:0.375rem 3rem}[dir=rtl] :host /deep/ nb-menu ul.menu-items .menu-item a .menu-title{text-align:right}[dir=ltr] :host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon ~ .menu-title{padding-left:0}[dir=rtl] :host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon ~ .menu-title{padding-right:0}[dir=ltr] :host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon:first-child{padding-left:1rem}[dir=rtl] :host /deep/ nb-menu ul.menu-items .menu-item a .menu-icon:first-child{padding-right:1rem} "],
            template: "\n    <span class=\"arrow\"></span>\n    <nb-menu class=\"context-menu\" [items]=\"items\" [tag]=\"tag\"></nb-menu>\n  ",
        })
    ], NbContextMenuComponent);
    return NbContextMenuComponent;
}(NbPositionedContainer));
export { NbContextMenuComponent };
//# sourceMappingURL=context-menu.component.js.map