var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
/**
 * Simple helper service to return Layout dimensions
 * Depending of current Layout scroll mode (default or `withScroll` when scroll is moved to an element
 * inside of the layout) corresponding dimensions will be returns  - of `documentElement` in first case and
 * `.scrollable-container` in the second.
 */
var NbLayoutRulerService = /** @class */ (function () {
    function NbLayoutRulerService() {
        this.contentDimensionsReq$ = new Subject();
    }
    /**
     * Content dimensions
     * @returns {Observable<NbLayoutDimensions>}
     */
    NbLayoutRulerService.prototype.getDimensions = function () {
        var _this = this;
        return Observable.create(function (observer) {
            var listener = new Subject();
            listener.subscribe(observer);
            _this.contentDimensionsReq$.next({ listener: listener });
            return function () { return listener.complete(); };
        });
    };
    /**
     * @private
     * @returns {Subject<any>}
     */
    NbLayoutRulerService.prototype.onGetDimensions = function () {
        return this.contentDimensionsReq$;
    };
    NbLayoutRulerService = __decorate([
        Injectable()
    ], NbLayoutRulerService);
    return NbLayoutRulerService;
}());
export { NbLayoutRulerService };
//# sourceMappingURL=ruler.service.js.map