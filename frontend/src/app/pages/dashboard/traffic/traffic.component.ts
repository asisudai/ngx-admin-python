/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { TrafficChartData } from '../../../@core/interfaces/iot/traffic-chart';
import { TrafficChartComponent } from './traffic-chart.component';

@Component({
  selector: 'ngx-traffic',
  styleUrls: ['./traffic.component.scss'],
  template: `
    <nb-card size="xsmall">
      <nb-card-header>
        <span>Traffic Consumption</span>
        <div class="dropdown ghost-dropdown" ngbDropdown>
          <button type="button" class="btn btn-sm" ngbDropdownToggle
                  [ngClass]="{ 'btn-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}">
            {{ type }}
          </button>
          <ul ngbDropdownMenu class="dropdown-menu">
            <li class="dropdown-item" *ngFor="let t of types" (click)="changeType(t)">{{ t }}</li>
          </ul>
        </div>
      </nb-card-header>
      <nb-card-body class="p-0" [nbSpinner]="!trafficChartPoints">
        <ngx-traffic-chart #chart *ngIf="trafficChartPoints" [points]="trafficChartPoints"></ngx-traffic-chart>
      </nb-card-body>
    </nb-card>
  `,
})
export class TrafficComponent implements OnDestroy {

  private alive = true;

  trafficChartPoints: number[];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;

  @ViewChild('chart') chart: TrafficChartComponent;

  constructor(private themeService: NbThemeService,
              private trafficChartService: TrafficChartData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
      this.currentTheme = theme.name;
    });
    this.fetchData();
  }

  fetchData() {
    this.trafficChartService.getTrafficChartData(this.type)
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.trafficChartPoints = data;
        this.chart && this.chart.resizeChart();
      });
  }

  changeType(newType: string) {
    this.type = newType;
    this.fetchData();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
