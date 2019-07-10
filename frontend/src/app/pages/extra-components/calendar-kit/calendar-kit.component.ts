/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Component } from '@angular/core';
import { CalendarKitMonthCellComponent } from './month-cell/month-cell.component';

@Component({
  selector: 'ngx-calendar-kit',
  templateUrl: 'calendar-kit.component.html',
  styleUrls: ['calendar-kit.component.scss'],
  entryComponents: [CalendarKitMonthCellComponent],
})
export class CalendarKitFullCalendarShowcaseComponent {
  month = new Date();
  monthCellComponent = CalendarKitMonthCellComponent;
}
