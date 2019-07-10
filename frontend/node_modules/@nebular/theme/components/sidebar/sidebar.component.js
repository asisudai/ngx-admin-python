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
import { Component, HostBinding, Input, ElementRef } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import { NbThemeService } from '../../services/theme.service';
import { NbSidebarService } from './sidebar.service';
/**
 * Sidebar header container.
 *
 * Placeholder which contains a sidebar header content,
 * placed at the very top of the sidebar outside of the scroll area.
 */
var NbSidebarHeaderComponent = /** @class */ (function () {
    function NbSidebarHeaderComponent() {
    }
    NbSidebarHeaderComponent = __decorate([
        Component({
            selector: 'nb-sidebar-header',
            template: "\n    <ng-content></ng-content>\n  ",
        })
    ], NbSidebarHeaderComponent);
    return NbSidebarHeaderComponent;
}());
export { NbSidebarHeaderComponent };
/**
 * Sidebar footer container.
 *
 * Placeholder which contains a sidebar footer content,
 * placed at the very bottom of the sidebar outside of the scroll area.
 */
var NbSidebarFooterComponent = /** @class */ (function () {
    function NbSidebarFooterComponent() {
    }
    NbSidebarFooterComponent = __decorate([
        Component({
            selector: 'nb-sidebar-footer',
            template: "\n    <ng-content></ng-content>\n  ",
        })
    ], NbSidebarFooterComponent);
    return NbSidebarFooterComponent;
}());
export { NbSidebarFooterComponent };
/**
 * Layout sidebar component.
 *
 * @stacked-example(Showcase, sidebar/sidebar-showcase.component)
 *
 * ### Installation
 *
 * Import `NbSidebarModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbSidebarModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * and `NbSidebarModule` to your feature module where the component should be shown:
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbSidebarModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Sidebar can be placed on the left or the right side of the layout,
 * or on start/end position of layout (depends on document direction, left to right or right to left)
 * It can be fixed (shown above the content) or can push the layout when opened.
 *
 * There are three states - `expanded`, `collapsed`, `compacted`.
 * By default sidebar content is fixed and saves its position while the page is being scrolled.
 *
 * Compacted sidebar example:
 * @stacked-example(Compacted Sidebar, sidebar/sidebar-compacted.component)
 *
 * Sidebar also supports a `responsive` behavior, listening to window size change and changing its size respectably.
 *
 * In a pair with header it is possible to setup a configuration when header is placed on a side of the sidebar
 * and not on top of it. To achieve this simply put a `subheader` property to the header like this:
 * ```html
 * <nb-layout-header subheader></nb-layout-header>
 * ```
 * @stacked-example(Subheader, layout/layout-sidebar-subheader.component)
 * Note that in such configuration sidebar shadow is removed and header cannot be make `fixed`.
 *
 * @additional-example(Right Sidebar, sidebar/sidebar-right.component)
 * @additional-example(Fixed Sidebar, sidebar/sidebar-fixed.component)
 *
 * @styles
 *
 * sidebar-font-size: Sidebar content font size
 * sidebar-line-height: Sidebar content line height
 * sidebar-fg: Foreground color
 * sidebar-bg: Background color
 * sidebar-height: Content height
 * sidebar-width: Expanded width
 * sidebar-width-compact: Compacted width
 * sidebar-padding: Sidebar content padding
 * sidebar-header-height: Sidebar header height
 * sidebar-footer-height: Sidebar footer height
 * sidebar-shadow: Sidebar container shadow
 *
 */
var NbSidebarComponent = /** @class */ (function () {
    function NbSidebarComponent(sidebarService, themeService, element) {
        this.sidebarService = sidebarService;
        this.themeService = themeService;
        this.element = element;
        this.responsiveValue = false;
        this.alive = true;
        this.containerFixedValue = true;
        this.fixedValue = false;
        this.rightValue = false;
        this.leftValue = true;
        this.startValue = false;
        this.endValue = false;
        // TODO: get width by the key and define only max width for the tablets and mobiles
        /**
         * Controls on which screen sizes sidebar should be switched to compacted state.
         * Works only when responsive mode is on.
         * Default values are `['xs', 'is', 'sm', 'md', 'lg']`.
         *
         * @type string[]
         */
        this.compactedBreakpoints = ['xs', 'is', 'sm', 'md', 'lg'];
        /**
         * Controls on which screen sizes sidebar should be switched to collapsed state.
         * Works only when responsive mode is on.
         * Default values are `['xs', 'is']`.
         *
         * @type string[]
         */
        this.collapsedBreakpoints = ['xs', 'is'];
        this.responsiveState = NbSidebarComponent_1.RESPONSIVE_STATE_PC;
    }
    NbSidebarComponent_1 = NbSidebarComponent;
    Object.defineProperty(NbSidebarComponent.prototype, "expanded", {
        // TODO: rename stateValue to state (take a look to the card component)
        get: function () {
            return this.stateValue === NbSidebarComponent_1.STATE_EXPANDED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "collapsed", {
        get: function () {
            return this.stateValue === NbSidebarComponent_1.STATE_COLLAPSED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "compacted", {
        get: function () {
            return this.stateValue === NbSidebarComponent_1.STATE_COMPACTED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "right", {
        /**
         * Places sidebar on the right side
         * @type {boolean}
         */
        set: function (val) {
            this.rightValue = convertToBoolProperty(val);
            this.leftValue = !this.rightValue;
            this.startValue = false;
            this.endValue = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "left", {
        /**
         * Places sidebar on the left side
         * @type {boolean}
         */
        set: function (val) {
            this.leftValue = convertToBoolProperty(val);
            this.rightValue = !this.leftValue;
            this.startValue = false;
            this.endValue = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "start", {
        /**
         * Places sidebar on the start edge of layout
         * @type {boolean}
         */
        set: function (val) {
            this.startValue = convertToBoolProperty(val);
            this.endValue = !this.startValue;
            this.leftValue = false;
            this.rightValue = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "end", {
        /**
         * Places sidebar on the end edge of layout
         * @type {boolean}
         */
        set: function (val) {
            this.endValue = convertToBoolProperty(val);
            this.startValue = !this.endValue;
            this.leftValue = false;
            this.rightValue = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "fixed", {
        /**
         * Makes sidebar fixed (shown above the layout content)
         * @type {boolean}
         */
        set: function (val) {
            this.fixedValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "containerFixed", {
        /**
         * Makes sidebar container fixed
         * @type {boolean}
         */
        set: function (val) {
            this.containerFixedValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "state", {
        /**
         * Initial sidebar state, `expanded`|`collapsed`|`compacted`
         * @type {string}
         */
        set: function (val) {
            this.stateValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSidebarComponent.prototype, "responsive", {
        /**
         * Makes sidebar listen to media query events and change its behaviour
         * @type {boolean}
         */
        set: function (val) {
            this.responsiveValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbSidebarComponent.prototype.toggleResponsive = function (enabled) {
        if (enabled) {
            this.mediaQuerySubscription = this.onMediaQueryChanges();
        }
        else if (this.mediaQuerySubscription) {
            this.mediaQuerySubscription.unsubscribe();
        }
    };
    NbSidebarComponent.prototype.ngOnChanges = function (changes) {
        if (changes.responsive) {
            this.toggleResponsive(this.responsiveValue);
        }
    };
    NbSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidebarService.onToggle()
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            if (!_this.tag || _this.tag === data.tag) {
                _this.toggle(data.compact);
            }
        });
        this.sidebarService.onExpand()
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            if (!_this.tag || _this.tag === data.tag) {
                _this.expand();
            }
        });
        this.sidebarService.onCollapse()
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            if (!_this.tag || _this.tag === data.tag) {
                _this.collapse();
            }
        });
    };
    NbSidebarComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
        if (this.mediaQuerySubscription) {
            this.mediaQuerySubscription.unsubscribe();
        }
    };
    // TODO: this is more of a workaround, should be a better way to make components communicate to each other
    NbSidebarComponent.prototype.onClick = function (event) {
        var menu = this.element.nativeElement.querySelector('nb-menu');
        if (menu && menu.contains(event.target)) {
            var link = event.target;
            var linkChildren = ['span', 'i'];
            // if we clicked on span - get the link
            if (linkChildren.includes(link.tagName.toLowerCase()) && link.parentNode) {
                link = event.target.parentNode;
            }
            // we only expand if an item has children
            if (link && link.nextElementSibling && link.nextElementSibling.classList.contains('menu-items')) {
                this.expand();
            }
        }
    };
    /**
     * Collapses the sidebar
     */
    NbSidebarComponent.prototype.collapse = function () {
        this.state = NbSidebarComponent_1.STATE_COLLAPSED;
    };
    /**
     * Expands the sidebar
     */
    NbSidebarComponent.prototype.expand = function () {
        this.state = NbSidebarComponent_1.STATE_EXPANDED;
    };
    /**
     * Compacts the sidebar (minimizes)
     */
    NbSidebarComponent.prototype.compact = function () {
        this.state = NbSidebarComponent_1.STATE_COMPACTED;
    };
    /**
     * Toggles sidebar state (expanded|collapsed|compacted)
     * @param {boolean} compact If true, then sidebar state will be changed between expanded & compacted,
     * otherwise - between expanded & collapsed. False by default.
     *
     * Toggle sidebar state
     *
     * ```ts
     * this.sidebar.toggle(true);
     * ```
     */
    NbSidebarComponent.prototype.toggle = function (compact) {
        if (compact === void 0) { compact = false; }
        if (this.responsiveEnabled()) {
            if (this.responsiveState === NbSidebarComponent_1.RESPONSIVE_STATE_MOBILE) {
                compact = false;
            }
        }
        var closedStates = [NbSidebarComponent_1.STATE_COMPACTED, NbSidebarComponent_1.STATE_COLLAPSED];
        if (compact) {
            this.state = closedStates.includes(this.stateValue) ?
                NbSidebarComponent_1.STATE_EXPANDED : NbSidebarComponent_1.STATE_COMPACTED;
        }
        else {
            this.state = closedStates.includes(this.stateValue) ?
                NbSidebarComponent_1.STATE_EXPANDED : NbSidebarComponent_1.STATE_COLLAPSED;
        }
    };
    NbSidebarComponent.prototype.onMediaQueryChanges = function () {
        var _this = this;
        return this.themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var prev = _a[0], current = _a[1];
            var isCollapsed = _this.collapsedBreakpoints.includes(current.name);
            var isCompacted = _this.compactedBreakpoints.includes(current.name);
            if (isCompacted) {
                _this.fixed = _this.containerFixedValue;
                _this.compact();
                _this.responsiveState = NbSidebarComponent_1.RESPONSIVE_STATE_TABLET;
            }
            if (isCollapsed) {
                _this.fixed = true;
                _this.collapse();
                _this.responsiveState = NbSidebarComponent_1.RESPONSIVE_STATE_MOBILE;
            }
            if (!isCollapsed && !isCompacted && prev.width < current.width) {
                _this.expand();
                _this.fixed = false;
                _this.responsiveState = NbSidebarComponent_1.RESPONSIVE_STATE_PC;
            }
        });
    };
    NbSidebarComponent.prototype.responsiveEnabled = function () {
        return this.responsiveValue;
    };
    var NbSidebarComponent_1;
    NbSidebarComponent.STATE_EXPANDED = 'expanded';
    NbSidebarComponent.STATE_COLLAPSED = 'collapsed';
    NbSidebarComponent.STATE_COMPACTED = 'compacted';
    NbSidebarComponent.RESPONSIVE_STATE_MOBILE = 'mobile';
    NbSidebarComponent.RESPONSIVE_STATE_TABLET = 'tablet';
    NbSidebarComponent.RESPONSIVE_STATE_PC = 'pc';
    __decorate([
        HostBinding('class.fixed'),
        __metadata("design:type", Boolean)
    ], NbSidebarComponent.prototype, "fixedValue", void 0);
    __decorate([
        HostBinding('class.right'),
        __metadata("design:type", Boolean)
    ], NbSidebarComponent.prototype, "rightValue", void 0);
    __decorate([
        HostBinding('class.left'),
        __metadata("design:type", Boolean)
    ], NbSidebarComponent.prototype, "leftValue", void 0);
    __decorate([
        HostBinding('class.start'),
        __metadata("design:type", Boolean)
    ], NbSidebarComponent.prototype, "startValue", void 0);
    __decorate([
        HostBinding('class.end'),
        __metadata("design:type", Boolean)
    ], NbSidebarComponent.prototype, "endValue", void 0);
    __decorate([
        HostBinding('class.expanded'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSidebarComponent.prototype, "expanded", null);
    __decorate([
        HostBinding('class.collapsed'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSidebarComponent.prototype, "collapsed", null);
    __decorate([
        HostBinding('class.compacted'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSidebarComponent.prototype, "compacted", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbSidebarComponent.prototype, "right", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbSidebarComponent.prototype, "left", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbSidebarComponent.prototype, "start", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbSidebarComponent.prototype, "end", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbSidebarComponent.prototype, "fixed", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbSidebarComponent.prototype, "containerFixed", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NbSidebarComponent.prototype, "state", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbSidebarComponent.prototype, "responsive", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbSidebarComponent.prototype, "tag", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], NbSidebarComponent.prototype, "compactedBreakpoints", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], NbSidebarComponent.prototype, "collapsedBreakpoints", void 0);
    NbSidebarComponent = NbSidebarComponent_1 = __decorate([
        Component({
            selector: 'nb-sidebar',
            styles: [":host{display:flex;flex-direction:column;overflow:hidden;z-index:auto;order:0}:host .scrollable{overflow-y:auto;overflow-x:hidden;flex:1}:host .main-container{transform:translate3d(0, 0, 0);display:flex;flex-direction:column}:host .main-container-fixed{position:fixed}:host.right{margin-right:0;margin-left:auto}[dir=ltr] :host.right{order:4}[dir=rtl] :host.right{order:0}:host.end{order:4}[dir=ltr] :host.end{margin-right:0;margin-left:auto}[dir=rtl] :host.end{margin-left:0;margin-right:auto}:host.fixed{position:fixed;height:100%;z-index:999;top:0;bottom:0;left:0}:host.fixed.right{right:0}[dir=ltr] :host.fixed.start{left:0}[dir=rtl] :host.fixed.start{right:0}[dir=ltr] :host.fixed.end{right:0}[dir=rtl] :host.fixed.end{left:0}:host /deep/ nb-sidebar-footer{margin-top:auto;display:block}:host /deep/ nb-sidebar-header{display:block} "],
            template: "\n    <div class=\"main-container\"\n         [class.main-container-fixed]=\"containerFixedValue\">\n      <ng-content select=\"nb-sidebar-header\"></ng-content>\n      <div class=\"scrollable\" (click)=\"onClick($event)\">\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"nb-sidebar-footer\"></ng-content>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [NbSidebarService,
            NbThemeService,
            ElementRef])
    ], NbSidebarComponent);
    return NbSidebarComponent;
}());
export { NbSidebarComponent };
//# sourceMappingURL=sidebar.component.js.map