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
import { NbButtonComponent } from './button.component';
var NB_BUTTON_COMPONENTS = [
    NbButtonComponent,
];
var NbButtonModule = /** @class */ (function () {
    function NbButtonModule() {
    }
    NbButtonModule = __decorate([
        NgModule({
            imports: [
                NbSharedModule,
            ],
            declarations: NB_BUTTON_COMPONENTS.slice(),
            exports: NB_BUTTON_COMPONENTS.slice(),
        })
    ], NbButtonModule);
    return NbButtonModule;
}());
export { NbButtonModule };
//# sourceMappingURL=button.module.js.map