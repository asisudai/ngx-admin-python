/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalOverlaysComponent } from './modal-overlays.component';
import { DialogComponent } from './dialog/dialog.component';
import { WindowComponent } from './window/window.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ToastrComponent } from './toastr/toastr.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const routes: Routes = [{
  path: '',
  component: ModalOverlaysComponent,
  children: [
    {
      path: 'dialog',
      component: DialogComponent,
    },
    {
      path: 'window',
      component: WindowComponent,
    },
    {
      path: 'popover',
      component: PopoversComponent,
    },
    {
      path: 'tooltip',
      component: TooltipComponent,
    },
    {
      path: 'toastr',
      component: ToastrComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalOverlaysRoutingModule {
}


