var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../../shared/shared.module';
import { NbA11yModule } from '../a11y/a11y.module';
import { NbCdkMappingModule } from './mapping';
import { NbPositionBuilderService } from './overlay-position';
import { NbOverlayContainerComponent } from './overlay-container';
import { NbOverlayService } from './overlay';
import { NbCdkAdapterModule } from '../adapter/adapter.module';
import { NbPositionHelper } from './position-helper';
var NbOverlayModule = /** @class */ (function () {
    function NbOverlayModule() {
    }
    NbOverlayModule_1 = NbOverlayModule;
    NbOverlayModule.forRoot = function () {
        return {
            ngModule: NbOverlayModule_1,
            providers: [
                NbPositionBuilderService,
                NbOverlayService,
                NbPositionHelper
            ].concat(NbCdkMappingModule.forRoot().providers, NbCdkAdapterModule.forRoot().providers, NbA11yModule.forRoot().providers),
        };
    };
    var NbOverlayModule_1;
    NbOverlayModule = NbOverlayModule_1 = __decorate([
        NgModule({
            imports: [
                NbCdkMappingModule,
                NbSharedModule,
            ],
            declarations: [NbOverlayContainerComponent],
            exports: [
                NbCdkMappingModule,
                NbCdkAdapterModule,
                NbOverlayContainerComponent,
            ],
        })
    ], NbOverlayModule);
    return NbOverlayModule;
}());
export { NbOverlayModule };
//# sourceMappingURL=overlay.module.js.map