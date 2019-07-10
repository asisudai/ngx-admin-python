/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { UsersRoutingModule } from './users-routing.module';
import { AuthModule } from '../../@auth/auth.module';

import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';


@NgModule({
  imports: [
    ThemeModule,
    AuthModule,
    UsersRoutingModule,
  ],
  declarations: [
    UsersComponent,
    UserComponent,
  ],
  entryComponents: [
  ],
  providers: [],
})
export class UsersModule { }
