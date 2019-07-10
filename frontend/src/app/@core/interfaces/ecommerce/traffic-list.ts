/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Observable } from 'rxjs';

export interface TrafficListItem {
  date: string;
  value: number;
  delta: {
    up: boolean;
    value: number;
  };
  comparison: Comparison;
}

export interface Comparison {
  prevDate: string;
  prevValue: number;
  nextDate: string;
  nextValue: number;
}

export abstract class TrafficListData {
  abstract getTrafficListData(period: string): Observable<TrafficListItem[]>;
}
