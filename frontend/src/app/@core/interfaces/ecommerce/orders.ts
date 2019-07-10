/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Observable } from 'rxjs';
import { OrderType } from './order-type';
import { OrderStatus } from './order-status';
import { Country } from '../common/countries';
import { GridData } from '../common/gridData';
import { DataSource } from 'ng2-smart-table/lib/data-source/data-source';

export interface Order {
  id: number;
  name: string;
  date: Date;
  sum: Sum;
  type: OrderType;
  status: OrderStatus;
  country: Country;
}

export interface Sum {
  value: number;
  currency: string;
}

export abstract class OrderData {
  abstract get gridDataSource(): DataSource;
  abstract list(pageNumber: number, pageSize: number): Observable<GridData<Order>>;
  abstract get(id: number): Observable<Order>;
  abstract update(order: Order): Observable<Order>;
  abstract create(order: Order): Observable<Order>;
  abstract delete(id: number): Observable<boolean>;
}
