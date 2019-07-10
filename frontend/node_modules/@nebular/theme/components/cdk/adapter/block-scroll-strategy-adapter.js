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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable, NgZone } from '@angular/core';
import { BlockScrollStrategy, ScrollDispatcher, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { NbLayoutScrollService } from '../../../services/scroll.service';
import { NB_DOCUMENT } from '../../../theme.options';
import { NbViewportRulerAdapter } from './viewport-ruler-adapter';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/scroll.service";
import * as i2 from "@angular/cdk/scrolling";
import * as i3 from "./viewport-ruler-adapter";
import * as i4 from "../../../theme.options";
/**
 * Overrides default block scroll strategy because default strategy blocks scrolling on the body only.
 * But Nebular has its own scrollable container - nb-layout. So, we need to block scrolling in it to.
 * */
var NbBlockScrollStrategyAdapter = /** @class */ (function (_super) {
    __extends(NbBlockScrollStrategyAdapter, _super);
    function NbBlockScrollStrategyAdapter(document, viewportRuler, scrollService) {
        var _this = _super.call(this, viewportRuler, document) || this;
        _this.scrollService = scrollService;
        return _this;
    }
    NbBlockScrollStrategyAdapter.prototype.enable = function () {
        _super.prototype.enable.call(this);
        this.scrollService.scrollable(false);
    };
    NbBlockScrollStrategyAdapter.prototype.disable = function () {
        _super.prototype.disable.call(this);
        this.scrollService.scrollable(true);
    };
    NbBlockScrollStrategyAdapter = __decorate([
        Injectable(),
        __param(0, Inject(NB_DOCUMENT)),
        __metadata("design:paramtypes", [Object, NbViewportRulerAdapter,
            NbLayoutScrollService])
    ], NbBlockScrollStrategyAdapter);
    return NbBlockScrollStrategyAdapter;
}(BlockScrollStrategy));
export { NbBlockScrollStrategyAdapter };
var NbScrollStrategyOptions = /** @class */ (function (_super) {
    __extends(NbScrollStrategyOptions, _super);
    function NbScrollStrategyOptions(scrollService, scrollDispatcher, viewportRuler, ngZone, document) {
        var _this = _super.call(this, scrollDispatcher, viewportRuler, ngZone, document) || this;
        _this.scrollService = scrollService;
        _this.scrollDispatcher = scrollDispatcher;
        _this.viewportRuler = viewportRuler;
        _this.ngZone = ngZone;
        _this.document = document;
        _this.block = function () { return new NbBlockScrollStrategyAdapter(_this.document, _this.viewportRuler, _this.scrollService); };
        return _this;
    }
    NbScrollStrategyOptions.ngInjectableDef = i0.defineInjectable({ factory: function NbScrollStrategyOptions_Factory() { return new NbScrollStrategyOptions(i0.inject(i1.NbLayoutScrollService), i0.inject(i2.ScrollDispatcher), i0.inject(i3.NbViewportRulerAdapter), i0.inject(i0.NgZone), i0.inject(i4.NB_DOCUMENT)); }, token: NbScrollStrategyOptions, providedIn: "root" });
    NbScrollStrategyOptions = __decorate([
        __param(4, Inject(NB_DOCUMENT)),
        __metadata("design:paramtypes", [NbLayoutScrollService,
            ScrollDispatcher,
            NbViewportRulerAdapter,
            NgZone, Object])
    ], NbScrollStrategyOptions);
    return NbScrollStrategyOptions;
}(ScrollStrategyOptions));
export { NbScrollStrategyOptions };
//# sourceMappingURL=block-scroll-strategy-adapter.js.map