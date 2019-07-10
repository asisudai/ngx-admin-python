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
import { NbCardComponent, NbCardBodyComponent, NbCardFooterComponent, NbCardHeaderComponent, } from './card.component';
import { NbRevealCardComponent } from './reveal-card/reveal-card.component';
import { NbFlipCardComponent } from './flip-card/flip-card.component';
import { NbCardFrontComponent, NbCardBackComponent } from './shared/shared.component';
var NB_CARD_COMPONENTS = [
    NbCardComponent,
    NbCardBodyComponent,
    NbCardFooterComponent,
    NbCardHeaderComponent,
    NbRevealCardComponent,
    NbFlipCardComponent,
    NbCardFrontComponent,
    NbCardBackComponent,
];
var NbCardModule = /** @class */ (function () {
    function NbCardModule() {
    }
    NbCardModule = __decorate([
        NgModule({
            imports: [
                NbSharedModule,
            ],
            declarations: NB_CARD_COMPONENTS.slice(),
            exports: NB_CARD_COMPONENTS.slice(),
        })
    ], NbCardModule);
    return NbCardModule;
}());
export { NbCardModule };
//# sourceMappingURL=card.module.js.map