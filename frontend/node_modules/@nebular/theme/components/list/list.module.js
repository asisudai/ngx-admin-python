var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { NbListComponent, NbListItemComponent } from './list.component';
import { NbListPageTrackerDirective } from './list-page-tracker.directive';
import { NbInfiniteListDirective } from './infinite-list.directive';
var components = [
    NbListComponent,
    NbListItemComponent,
    NbListPageTrackerDirective,
    NbInfiniteListDirective,
];
var NbListModule = /** @class */ (function () {
    function NbListModule() {
    }
    NbListModule = __decorate([
        NgModule({
            declarations: components,
            exports: components,
        })
    ], NbListModule);
    return NbListModule;
}());
export { NbListModule };
//# sourceMappingURL=list.module.js.map