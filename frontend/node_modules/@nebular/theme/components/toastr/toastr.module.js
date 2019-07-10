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
import { NbOverlayModule } from '../cdk';
import { NbSharedModule } from '../shared/shared.module';
import { NbToastrContainerRegistry, NbToastrService } from './toastr.service';
import { NbToastComponent } from './toast.component';
import { NbToastrContainerComponent } from './toastr-container.component';
import { NB_TOASTR_CONFIG } from './toastr-config';
var NbToastrModule = /** @class */ (function () {
    function NbToastrModule() {
    }
    NbToastrModule_1 = NbToastrModule;
    NbToastrModule.forRoot = function (toastrConfig) {
        if (toastrConfig === void 0) { toastrConfig = {}; }
        return {
            ngModule: NbToastrModule_1,
            providers: [
                NbToastrService,
                NbToastrContainerRegistry,
                { provide: NB_TOASTR_CONFIG, useValue: toastrConfig },
            ],
        };
    };
    var NbToastrModule_1;
    NbToastrModule = NbToastrModule_1 = __decorate([
        NgModule({
            imports: [NbSharedModule, NbOverlayModule],
            declarations: [NbToastrContainerComponent, NbToastComponent],
            entryComponents: [NbToastrContainerComponent, NbToastComponent],
        })
    ], NbToastrModule);
    return NbToastrModule;
}());
export { NbToastrModule };
//# sourceMappingURL=toastr.module.js.map