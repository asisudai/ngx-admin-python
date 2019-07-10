/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Observable } from 'rxjs';

export interface Contact {
  name: string;
  picture: string;
  type: string;
}

export interface RecentUser extends Contact {
  time: number;
}

export abstract class PhoneData {
  abstract getContacts(): Observable<Contact[]>;
  abstract getRecentUsers(): Observable<RecentUser[]>;
}
