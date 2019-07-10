var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbOverlayModule } from '../cdk/overlay';
import { NbCardModule } from '../card/card.module';
import { NbWindowService } from './window.service';
import { NbWindowsContainerComponent } from './windows-container.component';
import { NbWindowComponent } from './window.component';
import { NB_WINDOW_CONFIG } from './window.options';
var NbWindowModule = /** @class */ (function () {
    function NbWindowModule() {
    }
    NbWindowModule_1 = NbWindowModule;
    NbWindowModule.forRoot = function (defaultConfig) {
        return {
            ngModule: NbWindowModule_1,
            providers: [
                NbWindowService,
                { provide: NB_WINDOW_CONFIG, useValue: defaultConfig },
            ],
        };
    };
    NbWindowModule.forChild = function (defaultConfig) {
        return {
            ngModule: NbWindowModule_1,
            providers: [
                NbWindowService,
                { provide: NB_WINDOW_CONFIG, useValue: defaultConfig },
            ],
        };
    };
    var NbWindowModule_1;
    NbWindowModule = NbWindowModule_1 = __decorate([
        NgModule({
            imports: [CommonModule, NbOverlayModule, NbCardModule],
            declarations: [
                NbWindowsContainerComponent,
                NbWindowComponent,
            ],
            entryComponents: [NbWindowsContainerComponent, NbWindowComponent],
        })
    ], NbWindowModule);
    return NbWindowModule;
}());
export { NbWindowModule };
//# sourceMappingURL=window.module.js.map