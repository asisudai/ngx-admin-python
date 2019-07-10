var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbLayoutComponent, NbLayoutColumnComponent, NbLayoutFooterComponent, NbLayoutHeaderComponent, } from './layout.component';
import { NbRestoreScrollTopHelper } from './restore-scroll-top.service';
var NB_LAYOUT_COMPONENTS = [
    NbLayoutComponent,
    NbLayoutColumnComponent,
    NbLayoutFooterComponent,
    NbLayoutHeaderComponent,
];
var NbLayoutModule = /** @class */ (function () {
    function NbLayoutModule() {
    }
    NbLayoutModule = __decorate([
        NgModule({
            imports: [
                NbSharedModule,
            ],
            declarations: NB_LAYOUT_COMPONENTS.slice(),
            providers: [
                NbRestoreScrollTopHelper,
            ],
            exports: NB_LAYOUT_COMPONENTS.slice(),
        })
    ], NbLayoutModule);
    return NbLayoutModule;
}());
export { NbLayoutModule };
//# sourceMappingURL=layout.module.js.map