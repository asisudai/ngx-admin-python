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
import { FocusTrap, FocusTrapFactory, InteractivityChecker } from '@angular/cdk/a11y';
import { NB_DOCUMENT } from '../../../theme.options';
/**
 * Overrides angular cdk focus trap to keep restore functionality inside trap.
 * */
var NbFocusTrap = /** @class */ (function (_super) {
    __extends(NbFocusTrap, _super);
    function NbFocusTrap(element, checker, ngZone, document, deferAnchors) {
        var _this = _super.call(this, element, checker, ngZone, document, deferAnchors) || this;
        _this.element = element;
        _this.checker = checker;
        _this.ngZone = ngZone;
        _this.document = document;
        _this.savePreviouslyFocusedElement();
        return _this;
    }
    NbFocusTrap.prototype.restoreFocus = function () {
        this.previouslyFocusedElement.focus();
        this.destroy();
    };
    NbFocusTrap.prototype.blurPreviouslyFocusedElement = function () {
        this.previouslyFocusedElement.blur();
    };
    NbFocusTrap.prototype.savePreviouslyFocusedElement = function () {
        this.previouslyFocusedElement = this.document.activeElement;
    };
    return NbFocusTrap;
}(FocusTrap));
export { NbFocusTrap };
var NbFocusTrapFactoryService = /** @class */ (function (_super) {
    __extends(NbFocusTrapFactoryService, _super);
    function NbFocusTrapFactoryService(checker, ngZone, document) {
        var _this = _super.call(this, checker, ngZone, document) || this;
        _this.checker = checker;
        _this.ngZone = ngZone;
        _this.document = document;
        return _this;
    }
    NbFocusTrapFactoryService.prototype.create = function (element, deferCaptureElements) {
        return new NbFocusTrap(element, this.checker, this.ngZone, this.document, deferCaptureElements);
    };
    NbFocusTrapFactoryService = __decorate([
        Injectable(),
        __param(2, Inject(NB_DOCUMENT)),
        __metadata("design:paramtypes", [InteractivityChecker,
            NgZone, Object])
    ], NbFocusTrapFactoryService);
    return NbFocusTrapFactoryService;
}(FocusTrapFactory));
export { NbFocusTrapFactoryService };
//# sourceMappingURL=focus-trap.js.map