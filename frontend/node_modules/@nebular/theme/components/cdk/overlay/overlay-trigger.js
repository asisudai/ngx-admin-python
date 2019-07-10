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
import { fromEvent as observableFromEvent, merge as observableMerge } from 'rxjs';
import { debounceTime, delay, filter, repeat, share, switchMap, takeUntil, takeWhile, map } from 'rxjs/operators';
export var NbTrigger;
(function (NbTrigger) {
    NbTrigger["CLICK"] = "click";
    NbTrigger["HOVER"] = "hover";
    NbTrigger["HINT"] = "hint";
    NbTrigger["FOCUS"] = "focus";
})(NbTrigger || (NbTrigger = {}));
/**
 * Provides entity with two event stream: show and hide.
 * Each stream provides different events depends on implementation.
 * We have three main trigger strategies: click, hint and hover.
 * */
/**
 * TODO maybe we have to use renderer.listen instead of observableFromEvent?
 * Renderer provides capability use it in service worker, ssr and so on.
 * */
var NbTriggerStrategy = /** @class */ (function () {
    function NbTriggerStrategy(document, host, container) {
        this.document = document;
        this.host = host;
        this.container = container;
    }
    NbTriggerStrategy.prototype.isNotOnHostOrContainer = function (event) {
        return !this.isOnHost(event) && !this.isOnContainer(event);
    };
    NbTriggerStrategy.prototype.isOnHostOrContainer = function (event) {
        return this.isOnHost(event) || this.isOnContainer(event);
    };
    NbTriggerStrategy.prototype.isOnHost = function (_a) {
        var target = _a.target;
        return this.host.contains(target);
    };
    NbTriggerStrategy.prototype.isOnContainer = function (_a) {
        var target = _a.target;
        return this.container() && this.container().location.nativeElement.contains(target);
    };
    NbTriggerStrategy.prototype.isElementInBody = function (element) {
        return this.document.body.contains(element);
    };
    NbTriggerStrategy.prototype.isHostInBody = function () {
        return this.isElementInBody(this.host);
    };
    return NbTriggerStrategy;
}());
export { NbTriggerStrategy };
/**
 * Creates show and hide event streams.
 * Fires toggle event when the click was performed on the host element.
 * Fires close event when the click was performed on the document but
 * not on the host or container.
 * */
var NbClickTriggerStrategy = /** @class */ (function (_super) {
    __extends(NbClickTriggerStrategy, _super);
    function NbClickTriggerStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // since we should track click for both SHOW and HIDE event we firstly need to track the click and the state
        // of the container and then later on decide should we hide it or show
        // if we track the click & state separately this will case a behavior when the container is getting shown
        // and then hidden right away
        _this.click$ = observableFromEvent(_this.document, 'click')
            .pipe(takeWhile(function () { return _this.isHostInBody(); }), map(function (event) { return [!_this.container() && _this.isOnHost(event), event]; }), share());
        _this.show$ = _this.click$
            .pipe(takeWhile(function () { return _this.isHostInBody(); }), filter(function (_a) {
            var shouldShow = _a[0];
            return shouldShow;
        }), map(function (_a) {
            var event = _a[1];
            return event;
        }));
        _this.hide$ = _this.click$
            .pipe(takeWhile(function () { return _this.isHostInBody(); }), filter(function (_a) {
            var shouldShow = _a[0], event = _a[1];
            return !shouldShow && !_this.isOnContainer(event);
        }), map(function (_a) {
            var event = _a[1];
            return event;
        }));
        return _this;
    }
    return NbClickTriggerStrategy;
}(NbTriggerStrategy));
export { NbClickTriggerStrategy };
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element and stops out of the host and popover container.
 * */
var NbHoverTriggerStrategy = /** @class */ (function (_super) {
    __extends(NbHoverTriggerStrategy, _super);
    function NbHoverTriggerStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.show$ = observableFromEvent(_this.host, 'mouseenter')
            .pipe(takeWhile(function () { return _this.isHostInBody(); }), filter(function () { return !_this.container(); }), delay(100), takeUntil(observableFromEvent(_this.host, 'mouseleave')), repeat());
        _this.hide$ = observableFromEvent(_this.host, 'mouseleave')
            .pipe(takeWhile(function () { return _this.isHostInBody(); }), switchMap(function () { return observableFromEvent(_this.document, 'mousemove')
            .pipe(takeWhile(function () { return _this.isHostInBody(); }), debounceTime(100), takeWhile(function () { return !!_this.container(); }), filter(function (event) { return _this.isNotOnHostOrContainer(event); })); }));
        return _this;
    }
    return NbHoverTriggerStrategy;
}(NbTriggerStrategy));
export { NbHoverTriggerStrategy };
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element.
 * */
var NbHintTriggerStrategy = /** @class */ (function (_super) {
    __extends(NbHintTriggerStrategy, _super);
    function NbHintTriggerStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.show$ = observableFromEvent(_this.host, 'mouseenter')
            .pipe(takeWhile(function () { return _this.isHostInBody(); }), delay(100), takeUntil(observableFromEvent(_this.host, 'mouseleave')), 
        // this `delay & takeUntil & repeat` operators combination is a synonym for `conditional debounce`
        // meaning that if one event occurs in some time after the initial one we won't react to it
        repeat());
        _this.hide$ = observableFromEvent(_this.host, 'mouseleave');
        return _this;
    }
    return NbHintTriggerStrategy;
}(NbTriggerStrategy));
export { NbHintTriggerStrategy };
/**
 * Creates show and hide event streams.
 * Fires open event when a focus is on the host element and stay over at least 100 milliseconds.
 * Fires close event when the focus leaves the host element.
 * */
var NbFocusTriggerStrategy = /** @class */ (function (_super) {
    __extends(NbFocusTriggerStrategy, _super);
    function NbFocusTriggerStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.focusOut$ = observableFromEvent(_this.host, 'focusout')
            .pipe(takeWhile(function () { return _this.isHostInBody(); }), switchMap(function () { return observableFromEvent(_this.document, 'focusin')
            .pipe(takeWhile(function () { return !!_this.container(); }), filter(function (event) { return _this.isNotOnHostOrContainer(event); })); }));
        _this.clickIn$ = observableFromEvent(_this.host, 'click')
            .pipe(takeWhile(function () { return _this.isHostInBody(); }), filter(function () { return !_this.container(); }));
        _this.clickOut$ = observableFromEvent(_this.document, 'click')
            .pipe(takeWhile(function () { return _this.isHostInBody(); }), filter(function () { return !!_this.container(); }), filter(function (event) { return _this.isNotOnHostOrContainer(event); }));
        _this.tabKeyPress$ = observableFromEvent(_this.document, 'keydown')
            .pipe(takeWhile(function () { return _this.isHostInBody(); }), filter(function (event) { return event.keyCode === 9; }), filter(function () { return !!_this.container(); }));
        _this.show$ = observableMerge(observableFromEvent(_this.host, 'focusin'), _this.clickIn$)
            .pipe(takeWhile(function () { return _this.isHostInBody(); }), filter(function () { return !_this.container(); }), debounceTime(100), takeUntil(observableFromEvent(_this.host, 'focusout')), repeat());
        _this.hide$ = observableMerge(_this.focusOut$, _this.tabKeyPress$, _this.clickOut$)
            .pipe(takeWhile(function () { return _this.isHostInBody(); }));
        return _this;
    }
    return NbFocusTriggerStrategy;
}(NbTriggerStrategy));
export { NbFocusTriggerStrategy };
var NbTriggerStrategyBuilder = /** @class */ (function () {
    function NbTriggerStrategyBuilder() {
    }
    NbTriggerStrategyBuilder.prototype.document = function (document) {
        this._document = document;
        return this;
    };
    NbTriggerStrategyBuilder.prototype.trigger = function (trigger) {
        this._trigger = trigger;
        return this;
    };
    NbTriggerStrategyBuilder.prototype.host = function (host) {
        this._host = host;
        return this;
    };
    NbTriggerStrategyBuilder.prototype.container = function (container) {
        this._container = container;
        return this;
    };
    NbTriggerStrategyBuilder.prototype.build = function () {
        switch (this._trigger) {
            case NbTrigger.CLICK:
                return new NbClickTriggerStrategy(this._document, this._host, this._container);
            case NbTrigger.HINT:
                return new NbHintTriggerStrategy(this._document, this._host, this._container);
            case NbTrigger.HOVER:
                return new NbHoverTriggerStrategy(this._document, this._host, this._container);
            case NbTrigger.FOCUS:
                return new NbFocusTriggerStrategy(this._document, this._host, this._container);
            default:
                throw new Error('Trigger have to be provided');
        }
    };
    return NbTriggerStrategyBuilder;
}());
export { NbTriggerStrategyBuilder };
//# sourceMappingURL=overlay-trigger.js.map