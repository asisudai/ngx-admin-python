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
import { NbOverlayModule } from '../cdk';
import { NbContextMenuDirective } from './context-menu.directive';
import { NbContextMenuComponent } from './context-menu.component';
import { NbMenuModule } from '../menu/menu.module';
var NbContextMenuModule = /** @class */ (function () {
    function NbContextMenuModule() {
    }
    NbContextMenuModule = __decorate([
        NgModule({
            imports: [CommonModule, NbOverlayModule, NbMenuModule],
            exports: [NbContextMenuDirective],
            declarations: [NbContextMenuDirective, NbContextMenuComponent],
            entryComponents: [NbContextMenuComponent],
        })
    ], NbContextMenuModule);
    return NbContextMenuModule;
}());
export { NbContextMenuModule };
//# sourceMappingURL=context-menu.module.js.map