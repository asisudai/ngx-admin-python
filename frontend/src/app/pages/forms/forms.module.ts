/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';
import { ButtonsModule } from './buttons/buttons.module';

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
    ButtonsModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class FormsModule { }
