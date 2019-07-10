/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Component } from '@angular/core';
import { NbCalendarDayCellComponent } from '@nebular/theme';

@Component({
  selector: 'ngx-day-cell',
  templateUrl: 'day-cell.component.html',
  styleUrls: ['day-cell.component.scss'],
  host: { '(click)': 'onClick()', 'class': 'day-cell' },
})
export class DayCellComponent extends NbCalendarDayCellComponent<Date> {
}
