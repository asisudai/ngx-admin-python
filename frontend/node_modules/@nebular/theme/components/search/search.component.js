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
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild, ChangeDetectorRef, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { of as observableOf } from 'rxjs';
import { filter, delay, takeWhile } from 'rxjs/operators';
import { NbSearchService } from './search.service';
import { NbThemeService } from '../../services/theme.service';
import { NbOverlayService, NbPortalDirective } from '../cdk';
/**
 * search-field-component is used under the hood by nb-search component
 * can't be used itself
 */
var NbSearchFieldComponent = /** @class */ (function () {
    function NbSearchFieldComponent() {
        this.show = false;
        this.close = new EventEmitter();
        this.search = new EventEmitter();
    }
    NbSearchFieldComponent_1 = NbSearchFieldComponent;
    Object.defineProperty(NbSearchFieldComponent.prototype, "showClass", {
        get: function () {
            return this.show;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalZoomin", {
        get: function () {
            return this.type === NbSearchFieldComponent_1.TYPE_MODAL_ZOOMIN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "rotateLayout", {
        get: function () {
            return this.type === NbSearchFieldComponent_1.TYPE_ROTATE_LAYOUT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalMove", {
        get: function () {
            return this.type === NbSearchFieldComponent_1.TYPE_MODAL_MOVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "curtain", {
        get: function () {
            return this.type === NbSearchFieldComponent_1.TYPE_CURTAIN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "columnCurtain", {
        get: function () {
            return this.type === NbSearchFieldComponent_1.TYPE_COLUMN_CURTAIN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalDrop", {
        get: function () {
            return this.type === NbSearchFieldComponent_1.TYPE_MODAL_DROP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSearchFieldComponent.prototype, "modalHalf", {
        get: function () {
            return this.type === NbSearchFieldComponent_1.TYPE_MODAL_HALF;
        },
        enumerable: true,
        configurable: true
    });
    NbSearchFieldComponent.prototype.ngOnChanges = function (_a) {
        var show = _a.show;
        var becameHidden = !show.isFirstChange() && show.currentValue === false;
        if (becameHidden && this.inputElement) {
            this.inputElement.nativeElement.value = '';
        }
        this.focusInput();
    };
    NbSearchFieldComponent.prototype.ngAfterViewInit = function () {
        this.focusInput();
    };
    NbSearchFieldComponent.prototype.emitClose = function () {
        this.close.emit();
    };
    NbSearchFieldComponent.prototype.submitSearch = function (term) {
        if (term) {
            this.search.emit(term);
        }
    };
    NbSearchFieldComponent.prototype.focusInput = function () {
        if (this.show && this.inputElement) {
            this.inputElement.nativeElement.focus();
        }
    };
    var NbSearchFieldComponent_1;
    NbSearchFieldComponent.TYPE_MODAL_ZOOMIN = 'modal-zoomin';
    NbSearchFieldComponent.TYPE_ROTATE_LAYOUT = 'rotate-layout';
    NbSearchFieldComponent.TYPE_MODAL_MOVE = 'modal-move';
    NbSearchFieldComponent.TYPE_CURTAIN = 'curtain';
    NbSearchFieldComponent.TYPE_COLUMN_CURTAIN = 'column-curtain';
    NbSearchFieldComponent.TYPE_MODAL_DROP = 'modal-drop';
    NbSearchFieldComponent.TYPE_MODAL_HALF = 'modal-half';
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbSearchFieldComponent.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbSearchFieldComponent.prototype, "placeholder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbSearchFieldComponent.prototype, "hint", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbSearchFieldComponent.prototype, "show", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NbSearchFieldComponent.prototype, "close", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NbSearchFieldComponent.prototype, "search", void 0);
    __decorate([
        ViewChild('searchInput'),
        __metadata("design:type", ElementRef)
    ], NbSearchFieldComponent.prototype, "inputElement", void 0);
    __decorate([
        HostBinding('class.show'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "showClass", null);
    __decorate([
        HostBinding('class.modal-zoomin'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "modalZoomin", null);
    __decorate([
        HostBinding('class.rotate-layout'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "rotateLayout", null);
    __decorate([
        HostBinding('class.modal-move'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "modalMove", null);
    __decorate([
        HostBinding('class.curtain'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "curtain", null);
    __decorate([
        HostBinding('class.column-curtain'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "columnCurtain", null);
    __decorate([
        HostBinding('class.modal-drop'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "modalDrop", null);
    __decorate([
        HostBinding('class.modal-half'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbSearchFieldComponent.prototype, "modalHalf", null);
    NbSearchFieldComponent = NbSearchFieldComponent_1 = __decorate([
        Component({
            selector: 'nb-search-field',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [":host button{margin:0;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none}:host input{border-top:0;border-right:0;border-left:0;background:transparent;border-radius:0;line-height:1;display:inline-block;box-sizing:border-box;padding:0.05rem 0;-webkit-appearance:none}:host input:focus{outline:none}:host input::placeholder{opacity:0.3}:host span{font-size:90%;font-weight:bold;display:block;width:75%;margin:0 auto;padding:0.85rem 0;text-align:right}:host.modal-zoomin{display:block}:host.modal-zoomin .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity 0.5s}:host.modal-zoomin .search::before,:host.modal-zoomin .search::after{content:'';position:absolute;width:calc(100% + 15px);height:calc(100% + 15px);pointer-events:none}:host.modal-zoomin .search::before{top:0;left:0;border-right-width:0;border-bottom-width:0;transform:translate3d(-15px, -15px, 0)}:host.modal-zoomin .search::after{right:0;bottom:0;border-top-width:0;border-left-width:0;transform:translate3d(15px, 15px, 0)}:host.modal-zoomin .search button{position:absolute;top:3rem;font-size:2.5rem}[dir=ltr] :host.modal-zoomin .search button{right:3rem}[dir=rtl] :host.modal-zoomin .search button{left:3rem}:host.modal-zoomin .search input{font-size:10vw;width:75%}:host.modal-zoomin .search button{opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-zoomin .search form{opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-zoomin.show .search{pointer-events:auto;opacity:1}:host.modal-zoomin.show .search::before,:host.modal-zoomin.show .search::after{transform:translate3d(0, 0, 0);transition:transform 0.5s}:host.modal-zoomin.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-zoomin.show .search form{opacity:1;transform:scale3d(1, 1, 1)}@media screen and (max-width: 40rem){:host.modal-zoomin form{margin:5rem 0 1rem}:host.modal-zoomin span{text-align:left}} ",
"/deep/ nb-layout.rotate-layout{position:fixed;overflow:hidden;width:100%}/deep/ nb-layout.rotate-layout .scrollable-container{position:relative;z-index:10001;transition:transform 0.5s cubic-bezier(0.2, 1, 0.3, 1)}/deep/ nb-layout.rotate-layout.with-search .scrollable-container{transition:transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);transform-origin:50vw 50vh;transform:perspective(1000px) translate3d(0, 50vh, 0) rotate3d(1, 0, 0, 30deg);pointer-events:none}:host.rotate-layout{position:absolute;display:block;width:100vw;height:100vh;pointer-events:none;opacity:0;transition-property:opacity;transition-delay:0.4s}:host.rotate-layout .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:50vh;pointer-events:none;opacity:0;transition:opacity 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.rotate-layout .search button{position:absolute;top:3rem;font-size:2.5rem;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}[dir=ltr] :host.rotate-layout .search button{right:3rem}[dir=rtl] :host.rotate-layout .search button{left:3rem}:host.rotate-layout .search form{margin:5rem 0;opacity:0;transform:scale3d(0.7, 0.7, 1);transition:opacity 0.5s, transform 0.5s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.rotate-layout .search input{font-size:7vw;width:75%}:host.rotate-layout.show{opacity:1;transition-delay:0s}:host.rotate-layout.show .search{pointer-events:auto;opacity:1}:host.rotate-layout.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.rotate-layout.show .search form{opacity:1;transform:scale3d(1, 1, 1)} ",
"/deep/ nb-layout.modal-move .layout{transition:transform 0.5s}/deep/ nb-layout.modal-move.with-search .layout{transform:scale3d(0.8, 0.8, 1);pointer-events:none}:host.modal-move .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity 0.5s}:host.modal-move .search button{position:absolute;top:3rem;font-size:2.5rem;opacity:0;transition:opacity 0.5s}[dir=ltr] :host.modal-move .search button{right:3rem}[dir=rtl] :host.modal-move .search button{left:3rem}:host.modal-move .search form{margin:5rem 0;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.modal-move .search input{font-size:10vw;width:75%;transform:scale3d(0, 1, 1);transform-origin:0 50%;transition:transform 0.3s}:host.modal-move.show .search{pointer-events:auto;opacity:1}:host.modal-move.show .search button{opacity:1}:host.modal-move.show .search form{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-move.show .search input{transform:scale3d(1, 1, 1);transition-duration:0.5s}@media screen and (max-width: 40rem){:host.modal-move span{text-align:left}} ",
":host.curtain .search{position:fixed;z-index:1050;top:0;left:100%;overflow:hidden;height:100vh;width:100%;padding:3rem;pointer-events:none;transition:transform 0.3s;transition-delay:0.4s;transition-timing-function:ease-out}:host.curtain .search::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;transition:transform 0.3s;transition-timing-function:ease-out}:host.curtain .search button{font-size:2.5rem;position:absolute;top:3rem;transition:opacity 0.1s;transition-delay:0.3s}[dir=ltr] :host.curtain .search button{right:3rem}[dir=rtl] :host.curtain .search button{left:3rem}:host.curtain .search form{width:50%;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.5s, transform 0.5s}:host.curtain .search input{width:100%;font-size:6vw}:host.curtain.show .search{width:100%;pointer-events:auto;transform:translate3d(-100%, 0, 0);transition-delay:0s}:host.curtain.show .search::after{transform:translate3d(100%, 0, 0);transition-delay:0.4s}:host.curtain.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.curtain.show .search form{opacity:1;transform:scale3d(1, 1, 1)}@media screen and (max-width: 40em){:host.curtain span{width:90%}:host.curtain input{font-size:2em;width:90%}}/deep/ nb-layout.curtain .scrollable-container{position:relative;z-index:0} ",
"/deep/ nb-layout.column-curtain.with-search .layout{pointer-events:none}:host.column-curtain{display:block;position:fixed;z-index:1050;top:0;left:50%;overflow:hidden;width:50%;height:100vh;pointer-events:none}:host.column-curtain::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;transform:scale3d(0, 1, 1);transform-origin:0 50%;transition:transform 0.3s;transition-timing-function:cubic-bezier(0.86, 0, 0.07, 1)}:host.column-curtain .search{position:relative;padding:2.5rem 1.5rem 0;background:transparent}:host.column-curtain .search button{position:absolute;top:2rem;font-size:2.5rem;opacity:0;transition:opacity 0.5s}[dir=ltr] :host.column-curtain .search button{right:2rem}[dir=rtl] :host.column-curtain .search button{left:2rem}:host.column-curtain .search form{width:85%;transform:translate3d(-150%, 0, 0);transition:transform 0.3s}:host.column-curtain .search input{font-size:2.5rem;width:100%}:host.column-curtain .search span{font-size:85%}:host.column-curtain.show{pointer-events:auto}:host.column-curtain.show::before{transform:scale3d(1, 1, 1)}:host.column-curtain.show .search form{transform:translate3d(0, 0, 0);transition-delay:0.15s;transition-timing-function:cubic-bezier(0.86, 0, 0.07, 1)}:host.column-curtain.show .search button{opacity:1;z-index:100}@media screen and (max-width: 40rem){:host.column-curtain span{width:90%}:host.column-curtain input{font-size:2rem;width:90%}} ",
"/deep/ nb-layout.modal-drop .layout{position:relative;transition:transform 0.4s, opacity 0.4s;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}/deep/ nb-layout.modal-drop.with-search .layout{opacity:0;transform:scale3d(0.9, 0.9, 1);pointer-events:none}:host.modal-drop .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-drop .search::before{content:'';position:absolute;top:0;right:0;width:100%;height:100%;opacity:0;transition:opacity 0.4s}:host.modal-drop .search button{font-size:2.5rem;position:absolute;top:3rem;display:block;opacity:0;transition:opacity 0.4s}[dir=ltr] :host.modal-drop .search button{right:3rem}[dir=rtl] :host.modal-drop .search button{left:3rem}:host.modal-drop .search form{position:relative;margin:5rem 0 2rem}:host.modal-drop .search input{font-size:6vw;width:60%;padding:0.25rem;text-align:center;opacity:0;transition:opacity 0.4s}:host.modal-drop .search span{position:relative;z-index:9;display:block;width:60%;padding:0.85rem 0;opacity:0;transform:translate3d(0, -50px, 0);transition:opacity 0.4s, transform 0.4s}:host.modal-drop .search .form-content{position:relative;z-index:10;overflow:hidden;transform:translate3d(0, -50px, 0);transition:transform 0.4s}:host.modal-drop .search .form-content::after{content:'';position:absolute;top:0;left:20%;width:60%;height:105%;opacity:0;transform-origin:50% 0}:host.modal-drop.show .search{pointer-events:auto}:host.modal-drop.show .search::before{opacity:1}:host.modal-drop.show .search button{opacity:1}:host.modal-drop.show .search .form-content{transform:translate3d(0, 0, 0);transition:none}:host.modal-drop.show .search .form-content::after{animation:scaleUpDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards}:host.modal-drop.show .search input{opacity:1;transition:opacity 0s 0.4s}:host.modal-drop.show .search span{opacity:1;transform:translate3d(0, 0, 0);transition-delay:0.4s;transition-timing-function:ease-out}@keyframes scaleUpDown{0%{opacity:1;transform:scale3d(1, 0, 1)}50%{transform:scale3d(1, 1, 1);transform-origin:50% 0;transition-timing-function:ease-out}50.1%{transform-origin:50% 100%;transition-timing-function:ease-out}100%{opacity:1;transform:scale3d(1, 0, 1);transform-origin:50% 100%;transition-timing-function:ease-out}}@media screen and (max-width: 40rem){:host.modal-drop form{margin:2rem 0}:host.modal-drop input{width:100%;left:0}} ",
"/deep/ nb-layout.modal-half .layout{transition:transform 0.6s, opacity 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}/deep/ nb-layout.modal-half.with-search .layout{transform:scale3d(0.8, 0.8, 1);pointer-events:none}:host.modal-half .search{text-align:center;position:fixed;z-index:1050;top:0;left:0;overflow:hidden;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-half .search::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;opacity:0;transition:opacity 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}:host.modal-half .search button{font-size:2.5rem;position:absolute;top:3rem;display:block;z-index:100;opacity:0;transform:scale3d(0.8, 0.8, 1);transition:opacity 0.6s, transform 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1)}[dir=ltr] :host.modal-half .search button{right:3rem}[dir=rtl] :host.modal-half .search button{left:3rem}:host.modal-half .search .form-wrapper{position:absolute;display:flex;justify-content:center;align-items:center;width:100%;height:50%;transition:transform 0.6s;transition-timing-function:cubic-bezier(0.2, 1, 0.3, 1);transform:translate3d(0, -100%, 0)}:host.modal-half .search form{width:75%;margin:0 auto}:host.modal-half .search input{font-size:7vw;width:100%}:host.modal-half.show .search{pointer-events:auto}:host.modal-half.show .search::before{opacity:1}:host.modal-half.show .search button{opacity:1;transform:scale3d(1, 1, 1)}:host.modal-half.show .search .form-wrapper{transform:translate3d(0, 0, 0)} "],
            template: "\n    <div class=\"search\" (keyup.esc)=\"emitClose()\">\n      <button (click)=\"emitClose()\">\n        <i class=\"nb-close-circled\"></i>\n      </button>\n      <div class=\"form-wrapper\">\n        <form class=\"form\" (keyup.enter)=\"submitSearch(searchInput.value)\">\n          <div class=\"form-content\">\n            <input class=\"search-input\"\n                   #searchInput\n                   autocomplete=\"off\"\n                   [attr.placeholder]=\"placeholder\"\n                   tabindex=\"-1\"\n                   (blur)=\"focusInput()\"/>\n          </div>\n          <span class=\"info\">{{ hint }}</span>\n        </form>\n      </div>\n    </div>\n  ",
        })
    ], NbSearchFieldComponent);
    return NbSearchFieldComponent;
}());
export { NbSearchFieldComponent };
/**
 * Beautiful full-page search control.
 *
 * @stacked-example(Showcase, search/search-showcase.component)
 *
 * Basic setup:
 *
 * ```ts
 *  <nb-search type="rotate-layout"></nb-search>
 * ```
 * ### Installation
 *
 * Import `NbSearchModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbSearchModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Several animation types are available:
 * modal-zoomin, rotate-layout, modal-move, curtain, column-curtain, modal-drop, modal-half
 *
 * It is also possible to handle search event using `NbSearchService`:
 *
 * @stacked-example(Search Event, search/search-event.component)
 *
 * @styles
 *
 * search-btn-open-fg:
 * search-btn-close-fg:
 * search-bg:
 * search-bg-secondary:
 * search-text:
 * search-info:
 * search-dash:
 * search-placeholder:
 */
var NbSearchComponent = /** @class */ (function () {
    function NbSearchComponent(searchService, themeService, router, overlayService, changeDetector) {
        this.searchService = searchService;
        this.themeService = themeService;
        this.router = router;
        this.overlayService = overlayService;
        this.changeDetector = changeDetector;
        this.alive = true;
        this.showSearchField = false;
        /**
         * Search input placeholder
         * @type {string}
         */
        this.placeholder = 'Search...';
        /**
         * Hint showing under the input field to improve user experience
         *
         * @type {string}
         */
        this.hint = 'Hit enter to search';
    }
    NbSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(takeWhile(function () { return _this.alive; }), filter(function (event) { return event instanceof NavigationEnd; }))
            .subscribe(function () { return _this.hideSearch(); });
        this.searchService.onSearchActivate()
            .pipe(takeWhile(function () { return _this.alive; }), filter(function (data) { return !_this.tag || data.tag === _this.tag; }))
            .subscribe(function () { return _this.openSearch(); });
        this.searchService.onSearchDeactivate()
            .pipe(takeWhile(function () { return _this.alive; }), filter(function (data) { return !_this.tag || data.tag === _this.tag; }))
            .subscribe(function () { return _this.hideSearch(); });
    };
    NbSearchComponent.prototype.ngOnDestroy = function () {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.removeLayoutClasses();
            this.overlayRef.detach();
        }
        this.alive = false;
    };
    NbSearchComponent.prototype.openSearch = function () {
        var _this = this;
        if (!this.overlayRef) {
            this.overlayRef = this.overlayService.create();
            this.overlayRef.attach(this.searchFieldPortal);
        }
        this.themeService.appendLayoutClass(this.type);
        observableOf(null).pipe(delay(0)).subscribe(function () {
            _this.themeService.appendLayoutClass('with-search');
            _this.showSearchField = true;
            _this.changeDetector.detectChanges();
        });
    };
    NbSearchComponent.prototype.hideSearch = function () {
        this.removeLayoutClasses();
        this.showSearchField = false;
        this.changeDetector.detectChanges();
        this.searchButton.nativeElement.focus();
    };
    NbSearchComponent.prototype.search = function (term) {
        this.searchService.submitSearch(term, this.tag);
        this.hideSearch();
    };
    NbSearchComponent.prototype.removeLayoutClasses = function () {
        var _this = this;
        this.themeService.removeLayoutClass('with-search');
        observableOf(null).pipe(delay(500)).subscribe(function () {
            _this.themeService.removeLayoutClass(_this.type);
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbSearchComponent.prototype, "tag", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbSearchComponent.prototype, "placeholder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbSearchComponent.prototype, "hint", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbSearchComponent.prototype, "type", void 0);
    __decorate([
        ViewChild(NbPortalDirective),
        __metadata("design:type", NbPortalDirective)
    ], NbSearchComponent.prototype, "searchFieldPortal", void 0);
    __decorate([
        ViewChild('searchButton'),
        __metadata("design:type", ElementRef)
    ], NbSearchComponent.prototype, "searchButton", void 0);
    NbSearchComponent = __decorate([
        Component({
            selector: 'nb-search',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [":host button{font-size:2rem;margin:0 auto;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none}/deep/ nb-layout.with-search .scrollable-container{position:relative;z-index:0} "],
            template: "\n    <button #searchButton class=\"start-search\" (click)=\"openSearch()\">\n      <i class=\"nb-search\"></i>\n    </button>\n    <nb-search-field\n      *nbPortal\n      [show]=\"showSearchField\"\n      [type]=\"type\"\n      [placeholder]=\"placeholder\"\n      [hint]=\"hint\"\n      (search)=\"search($event)\"\n      (close)=\"hideSearch()\">\n    </nb-search-field>\n  ",
        }),
        __metadata("design:paramtypes", [NbSearchService,
            NbThemeService,
            Router,
            NbOverlayService,
            ChangeDetectorRef])
    ], NbSearchComponent);
    return NbSearchComponent;
}());
export { NbSearchComponent };
//# sourceMappingURL=search.component.js.map