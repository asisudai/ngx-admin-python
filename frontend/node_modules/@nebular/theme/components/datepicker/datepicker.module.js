/*
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
import { DatePipe } from '@angular/common';
import { NB_DATE_ADAPTER, NbDatepickerDirective } from './datepicker.directive';
import { NbOverlayModule } from '../cdk';
import { NbCalendarModule } from '../calendar/calendar.module';
import { NbCalendarComponent } from '../calendar/calendar.component';
import { NbDatepickerContainerComponent } from './datepicker-container.component';
import { NbDatepickerComponent, NbRangepickerComponent } from './datepicker.component';
import { NbCalendarRangeComponent } from '../calendar/calendar-range.component';
import { NbCalendarRangeModule } from '../calendar/calendar-range.module';
import { NbDateAdapterService, NbRangeAdapterService } from './datepicker-adapter';
var NbDatepickerModule = /** @class */ (function () {
    function NbDatepickerModule() {
    }
    NbDatepickerModule_1 = NbDatepickerModule;
    NbDatepickerModule.forRoot = function () {
        return {
            ngModule: NbDatepickerModule_1,
            providers: [
                DatePipe,
                {
                    provide: NB_DATE_ADAPTER,
                    multi: true,
                    useClass: NbDateAdapterService,
                },
                {
                    provide: NB_DATE_ADAPTER,
                    multi: true,
                    useClass: NbRangeAdapterService,
                },
            ],
        };
    };
    var NbDatepickerModule_1;
    NbDatepickerModule = NbDatepickerModule_1 = __decorate([
        NgModule({
            imports: [NbOverlayModule, NbCalendarModule, NbCalendarRangeModule],
            exports: [NbDatepickerDirective, NbDatepickerComponent, NbRangepickerComponent],
            declarations: [NbDatepickerDirective, NbDatepickerContainerComponent, NbDatepickerComponent, NbRangepickerComponent],
            entryComponents: [NbCalendarComponent, NbCalendarRangeComponent, NbDatepickerContainerComponent],
        })
    ], NbDatepickerModule);
    return NbDatepickerModule;
}());
export { NbDatepickerModule };
//# sourceMappingURL=datepicker.module.js.map