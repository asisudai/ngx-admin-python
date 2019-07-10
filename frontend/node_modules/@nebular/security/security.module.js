var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NB_SECURITY_OPTIONS_TOKEN } from './security.options';
import { NbAclService } from './services/acl.service';
import { NbAccessChecker } from './services/access-checker.service';
import { NbIsGrantedDirective } from './directives/is-granted.directive';
var NbSecurityModule = /** @class */ (function () {
    function NbSecurityModule() {
    }
    NbSecurityModule_1 = NbSecurityModule;
    NbSecurityModule.forRoot = function (nbSecurityOptions) {
        return {
            ngModule: NbSecurityModule_1,
            providers: [
                { provide: NB_SECURITY_OPTIONS_TOKEN, useValue: nbSecurityOptions },
                NbAclService,
                NbAccessChecker,
            ],
            exports: [
                NbIsGrantedDirective,
            ],
        };
    };
    var NbSecurityModule_1;
    NbSecurityModule = NbSecurityModule_1 = __decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            declarations: [
                NbIsGrantedDirective,
            ],
            exports: [
                NbIsGrantedDirective,
            ],
        })
    ], NbSecurityModule);
    return NbSecurityModule;
}());
export { NbSecurityModule };
//# sourceMappingURL=security.module.js.map