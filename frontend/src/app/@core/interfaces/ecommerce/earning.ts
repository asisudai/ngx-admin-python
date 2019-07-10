/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Observable } from 'rxjs';

export interface LiveUpdateChart {
  liveChart: { value: [string, number] }[];
  delta: {
    up: boolean;
    value: number;
  };
  dailyIncome: number;
}

export interface PieChart {
  value: number;
  name: string;
}

export abstract class EarningData {
  abstract getEarningLiveUpdateCardData(currency: string): Observable<any[]>;
  abstract getEarningCardData(currency: string): Observable<LiveUpdateChart>;
  abstract getEarningPieChartData(): Observable<PieChart[]>;
}
