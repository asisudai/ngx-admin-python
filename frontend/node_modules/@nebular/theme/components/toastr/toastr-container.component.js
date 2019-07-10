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
import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { NbToastComponent } from './toast.component';
import { NbLayoutDirectionService } from '../../services/direction.service';
import { NbPositionHelper } from '../cdk';
import { takeWhile } from 'rxjs/operators';
var voidState = style({
    transform: 'translateX({{ direction }}110%)',
    height: 0,
    marginLeft: '0',
    marginRight: '0',
    marginTop: '0',
    marginBottom: '0',
});
var defaultOptions = { params: { direction: '' } };
var NbToastrContainerComponent = /** @class */ (function () {
    function NbToastrContainerComponent(layoutDirection, positionHelper) {
        this.layoutDirection = layoutDirection;
        this.positionHelper = positionHelper;
        this.content = [];
        this.alive = true;
    }
    NbToastrContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutDirection.onDirectionChange()
            .pipe(takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.onDirectionChange(); });
    };
    NbToastrContainerComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbToastrContainerComponent.prototype.onDirectionChange = function () {
        var direction = this.positionHelper.isRightPosition(this.position) ? '' : '-';
        this.fadeIn = { value: '', params: { direction: direction } };
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], NbToastrContainerComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbToastrContainerComponent.prototype, "context", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbToastrContainerComponent.prototype, "position", void 0);
    __decorate([
        ViewChildren(NbToastComponent),
        __metadata("design:type", QueryList)
    ], NbToastrContainerComponent.prototype, "toasts", void 0);
    NbToastrContainerComponent = __decorate([
        Component({
            selector: 'nb-toastr-container',
            template: "\n    <nb-toast [@fadeIn]=\"fadeIn\" *ngFor=\"let toast of content\" [toast]=\"toast\"></nb-toast>",
            animations: [
                trigger('fadeIn', [
                    transition(':enter', [voidState, animate(100)], defaultOptions),
                    transition(':leave', [animate(100, voidState)], defaultOptions),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [NbLayoutDirectionService,
            NbPositionHelper])
    ], NbToastrContainerComponent);
    return NbToastrContainerComponent;
}());
export { NbToastrContainerComponent };
//# sourceMappingURL=toastr-container.component.js.map