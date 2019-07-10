var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { NbFocusTrapFactoryService } from './focus-trap';
var NbA11yModule = /** @class */ (function () {
    function NbA11yModule() {
    }
    NbA11yModule_1 = NbA11yModule;
    NbA11yModule.forRoot = function () {
        return {
            ngModule: NbA11yModule_1,
            providers: [NbFocusTrapFactoryService],
        };
    };
    var NbA11yModule_1;
    NbA11yModule = NbA11yModule_1 = __decorate([
        NgModule({})
    ], NbA11yModule);
    return NbA11yModule;
}());
export { NbA11yModule };
//# sourceMappingURL=a11y.module.js.map