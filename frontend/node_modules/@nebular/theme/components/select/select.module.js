var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { NbOverlayModule } from '../cdk';
import { NbSharedModule } from '../shared/shared.module';
import { NbInputModule } from '../input/input.module';
import { NbCardModule } from '../card/card.module';
import { NbCheckboxModule } from '../checkbox/checkbox.module';
import { NbButtonModule } from '../button/button.module';
import { NbSelectComponent, NbSelectLabelComponent } from './select.component';
import { NbOptionComponent } from './option.component';
import { NbOptionGroupComponent } from './option-group.component';
var NB_SELECT_COMPONENTS = [
    NbSelectComponent,
    NbOptionComponent,
    NbOptionGroupComponent,
    NbSelectLabelComponent,
];
var NbSelectModule = /** @class */ (function () {
    function NbSelectModule() {
    }
    NbSelectModule = __decorate([
        NgModule({
            imports: [NbSharedModule, NbOverlayModule, NbButtonModule, NbInputModule, NbCardModule, NbCheckboxModule],
            exports: NB_SELECT_COMPONENTS.slice(),
            declarations: NB_SELECT_COMPONENTS.slice(),
        })
    ], NbSelectModule);
    return NbSelectModule;
}());
export { NbSelectModule };
//# sourceMappingURL=select.module.js.map