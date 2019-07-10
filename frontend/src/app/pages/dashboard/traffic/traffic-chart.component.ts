/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { delay, takeWhile } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';

@Component({
  selector: 'ngx-traffic-chart',
  styleUrls: ['./traffic.component.scss'],
  template: `
    <div echarts
         [options]="options"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
})
export class TrafficChartComponent implements AfterViewInit, OnDestroy, OnChanges {

  private alive = true;

  @Input() points: number[];

  options: any = {};
  echartsIntance: any;

  constructor(private theme: NbThemeService,
              private layoutService: LayoutService) {
    this.layoutService.onChangeLayoutSize()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe(() => this.resizeChart());
  }

  ngAfterViewInit() {
    this.theme.getJsTheme()
      .pipe(
        delay(1),
        takeWhile(() => this.alive),
      )
      .subscribe(config => {
        const trafficTheme: any = config.variables.traffic;

        this.options = Object.assign({}, {
          grid: {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.points,
          },
          yAxis: {
            boundaryGap: [0, '5%'],
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: trafficTheme.colorBlack,
                opacity: 0.06,
                width: '1',
              },
            },
          },
          tooltip: {
            axisPointer: {
              type: 'shadow',
            },
            textStyle: {
              color: trafficTheme.tooltipTextColor,
              fontWeight: trafficTheme.tooltipFontWeight,
              fontSize: 16,
            },
            position: 'top',
            backgroundColor: trafficTheme.tooltipBg,
            borderColor: trafficTheme.tooltipBorderColor,
            borderWidth: 3,
            formatter: '{c0} MB',
            extraCssText: trafficTheme.tooltipExtraCss,
          },
          series: [
            {
              type: 'line',
              symbol: 'circle',
              symbolSize: 6,
              sampling: 'average',
              itemStyle: {
                normal: {
                  color: trafficTheme.itemColor,
                  borderColor: trafficTheme.itemBorderColor,
                  borderWidth: 2,
                },
                emphasis: {
                  color: 'white',
                  borderColor: trafficTheme.itemEmphasisBorderColor,
                  borderWidth: 2,
                },
              },
              lineStyle: {
                normal: {
                  width: 2,
                  color: trafficTheme.lineBg,
                  shadowColor: trafficTheme.lineBg,
                  shadowBlur: trafficTheme.lineShadowBlur,
                },
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: trafficTheme.gradFrom,
                  }, {
                    offset: 1,
                    color: trafficTheme.gradTo,
                  }]),
                  opacity: 1,
                },
              },
              data: this.points,
            },
          ],
        });
    });
  }

  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }

  ngOnChanges(): void {
    if (this.echartsIntance) {
      this.updateChartOptions(this.points);
    }
  }

  updateChartOptions(points: number[]) {
    const options = this.options;
    const series = this.getNewSeries(options.series, [points]);

    this.echartsIntance.setOption({
      series: series,
      xAxis: {
        data: points,
      },
    });
  }

  getNewSeries(series, data: number[][]) {
    return series.map((line, index) => {
      return {
        ...line,
        data: data[index],
      };
    });
  }

  resizeChart() {
    if (this.echartsIntance) {
      // Fix recalculation chart size
      // TODO: investigate more deeply
      setTimeout(() => {
        this.echartsIntance.resize();
      }, 0);
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
