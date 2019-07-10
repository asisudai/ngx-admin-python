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
import { Injectable, NgZone } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/overlay';
import { map } from 'rxjs/operators';
import { NbPlatform } from '../overlay/mapping';
import { NbLayoutRulerService } from '../../../services/ruler.service';
import { NbLayoutScrollService } from '../../../services/scroll.service';
var NbViewportRulerAdapter = /** @class */ (function (_super) {
    __extends(NbViewportRulerAdapter, _super);
    function NbViewportRulerAdapter(platform, ngZone, ruler, scroll) {
        var _this = _super.call(this, platform, ngZone) || this;
        _this.ruler = ruler;
        _this.scroll = scroll;
        return _this;
    }
    NbViewportRulerAdapter.prototype.getViewportSize = function () {
        var res;
        /*
        * getDimensions call is really synchronous operation.
        * And we have to conform with the interface of the original service.
        * */
        this.ruler.getDimensions()
            .pipe(map(function (dimensions) { return ({ width: dimensions.clientWidth, height: dimensions.clientHeight }); }))
            .subscribe(function (rect) { return res = rect; });
        return res;
    };
    NbViewportRulerAdapter.prototype.getViewportScrollPosition = function () {
        var res;
        /*
        * getPosition call is really synchronous operation.
        * And we have to conform with the interface of the original service.
        * */
        this.scroll.getPosition()
            .pipe(map(function (position) { return ({ top: position.y, left: position.x }); }))
            .subscribe(function (position) { return res = position; });
        return res;
    };
    NbViewportRulerAdapter = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NbPlatform, NgZone,
            NbLayoutRulerService,
            NbLayoutScrollService])
    ], NbViewportRulerAdapter);
    return NbViewportRulerAdapter;
}(ViewportRuler));
export { NbViewportRulerAdapter };
//# sourceMappingURL=viewport-ruler-adapter.js.map