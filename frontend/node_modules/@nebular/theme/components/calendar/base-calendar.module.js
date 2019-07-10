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
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbCalendarKitModule } from '../calendar-kit';
import { NbCardModule } from '../card/card.module';
import { NbBaseCalendarComponent } from './base-calendar.component';
var NbBaseCalendarModule = /** @class */ (function () {
    function NbBaseCalendarModule() {
    }
    NbBaseCalendarModule = __decorate([
        NgModule({
            imports: [NbCalendarKitModule, NbSharedModule, NbCardModule],
            exports: [NbBaseCalendarComponent],
            declarations: [NbBaseCalendarComponent],
        })
    ], NbBaseCalendarModule);
    return NbBaseCalendarModule;
}());
export { NbBaseCalendarModule };
//# sourceMappingURL=base-calendar.module.js.map