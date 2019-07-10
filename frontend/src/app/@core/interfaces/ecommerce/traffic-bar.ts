/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Observable } from 'rxjs';

export interface TrafficBar {
  data: number[];
  labels: string[];
  formatter: string;
}

export abstract class TrafficBarData {
  abstract getTrafficBarData(period: string): Observable<TrafficBar>;
}
