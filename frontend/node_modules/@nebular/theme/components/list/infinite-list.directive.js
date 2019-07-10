var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, HostListener, ElementRef, EventEmitter, Output, ContentChildren, QueryList, } from '@angular/core';
import { forkJoin, of as observableOf, interval, timer } from 'rxjs';
import { takeWhile, filter, switchMap, map, takeUntil, take } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import { NbLayoutScrollService } from '../../services/scroll.service';
import { NbLayoutRulerService } from '../../services/ruler.service';
import { NbListItemComponent } from './list.component';
var NbScrollableContainerDimentions = /** @class */ (function () {
    function NbScrollableContainerDimentions() {
    }
    return NbScrollableContainerDimentions;
}());
export { NbScrollableContainerDimentions };
/**
 * Infinite List Directive
 *
 * ```html
 *  <nb-list nbInfiniteList [threshold]="500" (bottomThreshold)="loadNext()">
 *    <nb-list-item *ngFor="let item of items"></nb-list-item>
 *  </nb-list>
 * ```
 *
 * @stacked-example(Simple infinite list, infinite-list/infinite-list-showcase.component)
 *
 * Directive will notify when list scrolled up or down to given a threshold.
 * By default it listen to scroll of list on which applied, but also can be set to listen to window scroll.
 *
 * @stacked-example(Scroll modes, infinite-list/infinite-list-scroll-modes.component)
 *
 * To improve UX of infinite lists, it's better to keep current page in url,
 * so user able to return to the last viewed page or to share a link to this page.
 * `nbListPageTracker` directive will help you to know, what page user currently viewing.
 * Just put it on a list, set page size and it will calculate page that currently in viewport.
 * You can [open the example](example/infinite-list/infinite-news-list.component)
 * in a new tab to check out this feature.
 *
 * @stacked-example(Infinite list with pager, infinite-list/infinite-news-list.component)
 *
 * @stacked-example(Infinite list with placeholders at the top, infinite-list/infinite-list-placeholders.component)
 *
 */
var NbInfiniteListDirective = /** @class */ (function () {
    function NbInfiniteListDirective(elementRef, scrollService, dimensionsService) {
        this.elementRef = elementRef;
        this.scrollService = scrollService;
        this.dimensionsService = dimensionsService;
        this.alive = true;
        this.windowScroll = false;
        /**
         * Emits when distance between list bottom and current scroll position is less than threshold.
         */
        this.bottomThreshold = new EventEmitter(true);
        /**
         * Emits when distance between list top and current scroll position is less than threshold.
         */
        this.topThreshold = new EventEmitter(true);
    }
    Object.defineProperty(NbInfiniteListDirective.prototype, "elementScroll", {
        get: function () {
            return !this.windowScroll;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInfiniteListDirective.prototype, "listenWindowScroll", {
        /**
         * By default component observes list scroll position.
         * If set to `true`, component will observe position of page scroll instead.
         */
        set: function (value) {
            this.windowScroll = convertToBoolProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    NbInfiniteListDirective.prototype.onElementScroll = function () {
        if (this.elementScroll) {
            this.checkPosition(this.elementRef.nativeElement);
        }
    };
    NbInfiniteListDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.scrollService.onScroll()
            .pipe(takeWhile(function () { return _this.alive; }), filter(function () { return _this.windowScroll; }), switchMap(function () { return _this.getContainerDimensions(); }))
            .subscribe(function (dimentions) { return _this.checkPosition(dimentions); });
        this.listItems.changes
            .pipe(takeWhile(function () { return _this.alive; }), 
        // For some reason, changes are emitted before list item removed from dom,
        // so dimensions will be incorrect.
        // Check every 50ms for a second if dom and query are in sync.
        // Once they synchronized, we can get proper dimensions.
        switchMap(function () { return interval(50).pipe(takeUntil(timer(1000)), filter(function () { return _this.inSyncWithDom(); }), take(1)); }), switchMap(function () { return _this.getContainerDimensions(); }))
            .subscribe(function (dimentions) { return _this.checkPosition(dimentions); });
        this.getContainerDimensions().subscribe(function (dimentions) { return _this.checkPosition(dimentions); });
    };
    NbInfiniteListDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbInfiniteListDirective.prototype.checkPosition = function (_a) {
        var scrollHeight = _a.scrollHeight, scrollTop = _a.scrollTop, clientHeight = _a.clientHeight;
        var initialCheck = this.lastScrollPosition == null;
        var manualCheck = this.lastScrollPosition === scrollTop;
        var scrollUp = scrollTop < this.lastScrollPosition;
        var scrollDown = scrollTop > this.lastScrollPosition;
        var distanceToBottom = scrollHeight - scrollTop - clientHeight;
        if ((initialCheck || manualCheck || scrollDown) && distanceToBottom <= this.threshold) {
            this.bottomThreshold.emit();
        }
        if ((initialCheck || scrollUp) && scrollTop <= this.threshold) {
            this.topThreshold.emit();
        }
        this.lastScrollPosition = scrollTop;
    };
    NbInfiniteListDirective.prototype.getContainerDimensions = function () {
        if (this.elementScroll) {
            var _a = this.elementRef.nativeElement, scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
            return observableOf({ scrollTop: scrollTop, scrollHeight: scrollHeight, clientHeight: clientHeight });
        }
        return forkJoin(this.scrollService.getPosition(), this.dimensionsService.getDimensions())
            .pipe(map(function (_a) {
            var scrollPosition = _a[0], dimensions = _a[1];
            return ({
                scrollTop: scrollPosition.y,
                scrollHeight: dimensions.scrollHeight,
                clientHeight: dimensions.clientHeight,
            });
        }));
    };
    NbInfiniteListDirective.prototype.inSyncWithDom = function () {
        return this.elementRef.nativeElement.children.length === this.listItems.length;
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], NbInfiniteListDirective.prototype, "threshold", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NbInfiniteListDirective.prototype, "listenWindowScroll", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NbInfiniteListDirective.prototype, "bottomThreshold", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NbInfiniteListDirective.prototype, "topThreshold", void 0);
    __decorate([
        HostListener('scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NbInfiniteListDirective.prototype, "onElementScroll", null);
    __decorate([
        ContentChildren(NbListItemComponent),
        __metadata("design:type", QueryList)
    ], NbInfiniteListDirective.prototype, "listItems", void 0);
    NbInfiniteListDirective = __decorate([
        Directive({
            selector: '[nbInfiniteList]',
        }),
        __metadata("design:paramtypes", [ElementRef,
            NbLayoutScrollService,
            NbLayoutRulerService])
    ], NbInfiniteListDirective);
    return NbInfiniteListDirective;
}());
export { NbInfiniteListDirective };
//# sourceMappingURL=infinite-list.directive.js.map