/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

export interface ChartData {
  chartLabel: string;
  axisXLabels: string[];
  linesData: number[][];
  legend: string[];
}

export interface AggregatedChartData extends ChartData {
  aggregatedData: ChartSummary[];
}

export interface ChartSummary {
  title: string;
  value: number;
}
