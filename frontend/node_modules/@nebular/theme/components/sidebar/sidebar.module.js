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
import { NbSidebarComponent, NbSidebarFooterComponent, NbSidebarHeaderComponent, } from './sidebar.component';
import { NbSidebarService } from './sidebar.service';
var NB_SIDEBAR_COMPONENTS = [
    NbSidebarComponent,
    NbSidebarFooterComponent,
    NbSidebarHeaderComponent,
];
var NB_SIDEBAR_PROVIDERS = [
    NbSidebarService,
];
var NbSidebarModule = /** @class */ (function () {
    function NbSidebarModule() {
    }
    NbSidebarModule_1 = NbSidebarModule;
    NbSidebarModule.forRoot = function () {
        return {
            ngModule: NbSidebarModule_1,
            providers: NB_SIDEBAR_PROVIDERS.slice(),
        };
    };
    var NbSidebarModule_1;
    NbSidebarModule = NbSidebarModule_1 = __decorate([
        NgModule({
            imports: [
                NbSharedModule,
            ],
            declarations: NB_SIDEBAR_COMPONENTS.slice(),
            exports: NB_SIDEBAR_COMPONENTS.slice(),
        })
    ], NbSidebarModule);
    return NbSidebarModule;
}());
export { NbSidebarModule };
//# sourceMappingURL=sidebar.module.js.map