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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
var NbCalendarNavigationComponent = /** @class */ (function () {
    function NbCalendarNavigationComponent() {
        this.changeMode = new EventEmitter(true);
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NbCalendarNavigationComponent.prototype, "date", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NbCalendarNavigationComponent.prototype, "changeMode", void 0);
    NbCalendarNavigationComponent = __decorate([
        Component({
            selector: 'nb-calendar-navigation',
            styles: ["\n    :host {\n      display: flex;\n      justify-content: center;\n    }\n\n    :host button {\n      height: 3.125rem;\n    }\n  "],
            template: "\n    <button nbButton (click)=\"changeMode.emit()\">\n      {{ date | date: 'MMM yyyy' }}\n    </button>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
    ], NbCalendarNavigationComponent);
    return NbCalendarNavigationComponent;
}());
export { NbCalendarNavigationComponent };
//# sourceMappingURL=calendar-navigation.component.js.map