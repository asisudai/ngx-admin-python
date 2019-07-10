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
import { DatePipe } from '@angular/common';
import { NbSharedModule } from '../shared/shared.module';
import { NbButtonModule } from '../button/button.module';
import { NbCalendarMonthModelService, NbDateService } from './services';
import { NbCalendarDayCellComponent, NbCalendarDayPickerComponent, NbCalendarDaysNamesComponent, NbCalendarHeaderComponent, NbCalendarMonthCellComponent, NbCalendarMonthPickerComponent, NbCalendarNavigationComponent, NbCalendarPageableNavigationComponent, NbCalendarPickerComponent, NbCalendarPickerRowComponent, NbCalendarYearCellComponent, NbCalendarYearPickerComponent, } from './components';
import { NbNativeDateService } from './services/native-date.service';
var SERVICES = [
    { provide: NbDateService, useClass: NbNativeDateService },
    DatePipe,
    NbCalendarMonthModelService,
];
var COMPONENTS = [
    NbCalendarHeaderComponent,
    NbCalendarNavigationComponent,
    NbCalendarPageableNavigationComponent,
    NbCalendarDaysNamesComponent,
    NbCalendarYearPickerComponent,
    NbCalendarMonthPickerComponent,
    NbCalendarDayPickerComponent,
    NbCalendarDayCellComponent,
    NbCalendarMonthCellComponent,
    NbCalendarYearCellComponent,
    NbCalendarPickerRowComponent,
    NbCalendarPickerComponent,
];
/**
 * `NbCalendarKitModule` is a module that contains multiple useful components for building custom calendars.
 * So if you think our calendars is not enough powerful for you just use calendar-kit and build your own calendar!
 *
 * Available components:
 * - `NbCalendarDayPicker`
 * - `NbCalendarDayCell`
 * - `NbCalendarMonthPicker`
 * - `NbCalendarMonthCell`
 * - `NbCalendarYearPicker`
 * - `NbCalendarYearCell`
 * - `NbCalendarHeader`
 * - `NbCalendarNavigation`
 * - `NbCalendarPageableNavigation`
 *
 * For example you can easily build full calendar:
 * @stacked-example(Full calendar, calendar-kit/calendar-kit-full-calendar.component)
 * */
var NbCalendarKitModule = /** @class */ (function () {
    function NbCalendarKitModule() {
    }
    NbCalendarKitModule = __decorate([
        NgModule({
            imports: [NbSharedModule, NbButtonModule],
            exports: COMPONENTS.slice(),
            declarations: COMPONENTS.slice(),
            providers: SERVICES.slice(),
            entryComponents: [
                NbCalendarDayCellComponent,
                NbCalendarMonthCellComponent,
                NbCalendarYearCellComponent,
            ],
        })
    ], NbCalendarKitModule);
    return NbCalendarKitModule;
}());
export { NbCalendarKitModule };
//# sourceMappingURL=calendar-kit.module.js.map