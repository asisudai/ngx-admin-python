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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
var NbSharedModule = /** @class */ (function () {
    function NbSharedModule() {
    }
    NbSharedModule = __decorate([
        NgModule({
            exports: [
                CommonModule,
                // TODO: probably we don't need FormsModule in SharedModule
                FormsModule,
                RouterModule,
            ],
        })
    ], NbSharedModule);
    return NbSharedModule;
}());
export { NbSharedModule };
//# sourceMappingURL=shared.module.js.map