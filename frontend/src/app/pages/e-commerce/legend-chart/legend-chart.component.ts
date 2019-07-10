/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Component, Input } from '@angular/core';

import { NgxLegendItemColor } from './enum.legend-item-color';

@Component({
  selector: 'ngx-legend-chart',
  styleUrls: ['./legend-chart.component.scss'],
  templateUrl: './legend-chart.component.html',
})
export class ECommerceLegendChartComponent {

  /**
   * Take an array of legend items
   * Available iconColor: 'green', 'purple', 'light-purple', 'blue', 'yellow'
   * @type {{iconColor: string; title: string}[]}
   */
  @Input()
  legendItems: { iconColor: NgxLegendItemColor; title: string }[] = [];
}
