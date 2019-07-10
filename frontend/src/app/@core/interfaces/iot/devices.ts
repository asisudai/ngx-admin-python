/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Observable } from 'rxjs';

export interface DeviceViewSettings {
  iconClass: string;
  type: string;
}

export interface DeviceParameter {
  id: number;
  name: string;
  value: number | string;
  min?: number;
  max?: number;
}

export interface Device {
  id: number;
  isOn: boolean;
  name: string;
  type: string;
  settings?: DeviceViewSettings;
  parameters?: DeviceParameter[];
}

export abstract class DevicesData {
  abstract list(): Observable<Device[]>;
  abstract edit(device: Device): Observable<Device>;
}
