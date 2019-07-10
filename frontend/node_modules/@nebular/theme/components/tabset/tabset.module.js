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
import { NbTabsetComponent, NbTabComponent } from './tabset.component';
import { NbBadgeModule } from '../badge/badge.module';
var NB_TABSET_COMPONENTS = [
    NbTabsetComponent,
    NbTabComponent,
];
var NbTabsetModule = /** @class */ (function () {
    function NbTabsetModule() {
    }
    NbTabsetModule = __decorate([
        NgModule({
            imports: [
                NbSharedModule,
                NbBadgeModule,
            ],
            declarations: NB_TABSET_COMPONENTS.slice(),
            exports: NB_TABSET_COMPONENTS.slice(),
        })
    ], NbTabsetModule);
    return NbTabsetModule;
}());
export { NbTabsetModule };
//# sourceMappingURL=tabset.module.js.map