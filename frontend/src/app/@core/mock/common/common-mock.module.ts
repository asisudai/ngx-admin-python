/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserData } from '../../interfaces/common/users';
import { SmartTableData } from '../../interfaces/common/smart-table';

import { UsersService } from './users.service';
import { SmartTableService } from './smart-table.service';
import { PeriodsService } from './periods.service';

const SERVICES = [
  { provide: UserData, useClass: UsersService },
  { provide: SmartTableData, useClass: SmartTableService },
  { provide: PeriodsService, useClass: PeriodsService },
];

@NgModule({
  imports: [CommonModule],
})
export class CommonMockModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CommonMockModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
