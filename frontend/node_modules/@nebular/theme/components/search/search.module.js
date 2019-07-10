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
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbSearchComponent, NbSearchFieldComponent } from './search.component';
import { NbSearchService } from './search.service';
var NbSearchModule = /** @class */ (function () {
    function NbSearchModule() {
    }
    NbSearchModule = __decorate([
        NgModule({
            imports: [
                NbSharedModule,
                NbOverlayModule,
            ],
            declarations: [
                NbSearchComponent,
                NbSearchFieldComponent,
            ],
            exports: [
                NbSearchComponent,
                NbSearchFieldComponent,
            ],
            providers: [
                NbSearchService,
            ],
            entryComponents: [
                NbSearchFieldComponent,
            ],
        })
    ], NbSearchModule);
    return NbSearchModule;
}());
export { NbSearchModule };
//# sourceMappingURL=search.module.js.map