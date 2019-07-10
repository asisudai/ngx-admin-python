/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Observable } from 'rxjs';
import { ChartSummary, ChartData } from '../common/chart';

export abstract class OrdersProfitChartData {
  abstract getOrderProfitChartSummary(): Observable<ChartSummary[]>;
  abstract getOrdersChartData(period: string): Observable<ChartData>;
  abstract getProfitChartData(period: string): Observable<ChartData>;
}
