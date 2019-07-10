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
import { map, delay } from 'rxjs/operators';
import { Component, Input, Output, EventEmitter, ContentChildren, QueryList, HostBinding, ChangeDetectorRef, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { convertToBoolProperty } from '../helpers';
/**
 * Specific tab container.
 *
 * ```ts
 * <nb-tab tabTitle="Users"
 *   badgeText="99+"
 *   badgeStatus="danger">
 *   <p>List of <strong>users</strong>.</p>
 * </nb-tab>
 ```
 */
var NbTabComponent = /** @class */ (function () {
    function NbTabComponent() {
        this.activeValue = false;
        this.responsiveValue = false;
        this.init = false;
    }
    Object.defineProperty(NbTabComponent.prototype, "responsive", {
        get: function () {
            return this.responsiveValue;
        },
        /**
         * Show only icons when width is smaller than `tabs-icon-only-max-width`
         * @type {boolean}
         */
        set: function (val) {
            this.responsiveValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbTabComponent.prototype, "active", {
        /**
         * Specifies active tab
         * @returns {boolean}
         */
        get: function () {
            return this.activeValue;
        },
        set: function (val) {
            this.activeValue = convertToBoolProperty(val);
            if (this.activeValue) {
                this.init = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbTabComponent.prototype, "lazyLoad", {
        /**
         * Lazy load content before tab selection
         * TODO: rename, as lazy is by default, and this is more `instant load`
         * @param {boolean} val
         */
        set: function (val) {
            this.init = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbTabComponent.prototype, "tabTitle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbTabComponent.prototype, "tabIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbTabComponent.prototype, "responsive", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbTabComponent.prototype, "route", void 0);
    __decorate([
        HostBinding('class.content-active'),
        __metadata("design:type", Boolean)
    ], NbTabComponent.prototype, "activeValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbTabComponent.prototype, "active", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbTabComponent.prototype, "lazyLoad", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbTabComponent.prototype, "badgeText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbTabComponent.prototype, "badgeStatus", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbTabComponent.prototype, "badgePosition", void 0);
    NbTabComponent = __decorate([
        Component({
            selector: 'nb-tab',
            template: "\n    <ng-container *ngIf=\"init\">\n      <ng-content></ng-content>\n    </ng-container>\n  ",
        })
    ], NbTabComponent);
    return NbTabComponent;
}());
export { NbTabComponent };
// TODO: Combine tabset with route-tabset, so that we can:
// - have similar interface
// - easy to migrate from one to another
// - can mix them both (route/content tab)
/**
 *
 * Dynamic tabset component.
 * @stacked-example(Showcase, tabset/tabset-showcase.component)
 *
 * Basic tabset example
 *
 * ```html
 * <nb-tabset>
 *  <nb-tab tabTitle="Simple Tab #1">
 *    Tab content 1
 *  </nb-tab>
 *  <nb-tab tabTitle="Simple Tab #2">
 *    Tab content 2
 *  </nb-tab>
 * </nb-tabset>
 * ```
 *
 * ### Installation
 *
 * Import `NbTabsetModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbTabsetModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * It is also possible to set a badge to a particular tab:
 * @stacked-example(Tab With Badge, tabset/tabset-badge.component)
 *
 * and we can set it to full a width of a parent component
 * @stacked-example(Full Width, tabset/tabset-width.component)
 *
 * `tabIcon` should be used to add an icon to the tab. Icon can also be combined with title.
 * `responsive` tab property if set allows you to hide the title on smaller screens
 * (`tabs-icon-only-max-width` property) for better responsive behaviour. You can open the following example and make
 * your screen smaller - titles will be hidden in the last tabset in the list:
 *
 * @stacked-example(Icon, tabset/tabset-icon.component)
 *
 * @styles
 *
 * tabs-font-family:
 * tabs-font-size:
 * tabs-content-font-family:
 * tabs-content-font-size:
 * tabs-active-bg:
 * tabs-active-font-weight:
 * tabs-padding:
 * tabs-content-padding:
 * tabs-header-bg:
 * tabs-separator:
 * tabs-fg:
 * tabs-fg-text:
 * tabs-fg-heading:
 * tabs-bg:
 * tabs-selected:
 * tabs-icon-only-max-width
 *
 */
var NbTabsetComponent = /** @class */ (function () {
    function NbTabsetComponent(route, changeDetectorRef) {
        this.route = route;
        this.changeDetectorRef = changeDetectorRef;
        this.fullWidthValue = false;
        /**
         * Emits when tab is selected
         * @type EventEmitter<any>
         */
        this.changeTab = new EventEmitter();
    }
    Object.defineProperty(NbTabsetComponent.prototype, "fullWidth", {
        /**
         * Take full width of a parent
         * @param {boolean} val
         */
        set: function (val) {
            this.fullWidthValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    // TODO: refactoring this component, avoid change detection loop
    NbTabsetComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.route.params
            .pipe(map(function (params) {
            return _this.tabs.find(function (tab) { return _this.routeParam ? tab.route === params[_this.routeParam] : tab.active; });
        }), delay(0))
            .subscribe(function (activeTab) {
            _this.selectTab(activeTab || _this.tabs.first);
            _this.changeDetectorRef.markForCheck();
        });
    };
    // TODO: navigate to routeParam
    NbTabsetComponent.prototype.selectTab = function (selectedTab) {
        this.tabs.forEach(function (tab) { return tab.active = tab === selectedTab; });
        this.changeTab.emit(selectedTab);
    };
    __decorate([
        ContentChildren(NbTabComponent),
        __metadata("design:type", QueryList)
    ], NbTabsetComponent.prototype, "tabs", void 0);
    __decorate([
        HostBinding('class.full-width'),
        __metadata("design:type", Boolean)
    ], NbTabsetComponent.prototype, "fullWidthValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbTabsetComponent.prototype, "fullWidth", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbTabsetComponent.prototype, "routeParam", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NbTabsetComponent.prototype, "changeTab", void 0);
    NbTabsetComponent = __decorate([
        Component({
            selector: 'nb-tabset',
            styles: [":host{display:block}:host.full-width .tabset{justify-content:space-around}:host /deep/ nb-tab{flex:1;-ms-flex:1 1 auto;overflow:auto;display:none}:host /deep/ nb-tab.content-active{display:block}:host .tabset{display:flex;flex-direction:row;list-style-type:none;margin:0}:host .tabset .tab{cursor:pointer;margin-bottom:-1px;text-align:center;position:relative}:host .tabset .tab.active a::before{display:block}:host .tabset .tab a{display:flex;position:relative;text-decoration:none}:host .tabset .tab a::before{display:none;position:absolute;content:'';width:100%;height:6px;border-radius:3px;bottom:-2px;left:0}:host .tabset .tab a i{font-size:1.5rem;vertical-align:middle}[dir=ltr] :host .tabset .tab a i+span{margin-left:.5rem}[dir=rtl] :host .tabset .tab a i+span{margin-right:.5rem} "],
            template: "\n    <ul class=\"tabset\">\n      <li *ngFor=\"let tab of tabs\"\n          (click)=\"selectTab(tab)\"\n          [class.responsive]=\"tab.responsive\"\n          [class.active]=\"tab.active\"\n          class=\"tab\">\n        <a href (click)=\"$event.preventDefault()\">\n          <i *ngIf=\"tab.tabIcon\" [class]=\"tab.tabIcon\"></i>\n          <span *ngIf=\"tab.tabTitle\">{{ tab.tabTitle }}</span>\n        </a>\n        <nb-badge *ngIf=\"tab.badgeText\"\n          [text]=\"tab.badgeText\"\n          [status]=\"tab.badgeStatus\"\n          [position]=\"tab.badgePosition\">\n        </nb-badge>\n      </li>\n    </ul>\n    <ng-content select=\"nb-tab\"></ng-content>\n  ",
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            ChangeDetectorRef])
    ], NbTabsetComponent);
    return NbTabsetComponent;
}());
export { NbTabsetComponent };
//# sourceMappingURL=tabset.component.js.map