/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Component, OnDestroy } from '@angular/core';
import { Camera, SecurityCamerasData } from '../../../@core/interfaces/iot/security-cameras';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-security-cameras',
  styleUrls: ['./security-cameras.component.scss'],
  templateUrl: './security-cameras.component.html',
})
export class SecurityCamerasComponent implements OnDestroy {

  private alive = true;

  cameras: Camera[];
  selectedCamera: Camera;
  isSingleView = false;

  constructor(private securityCamerasService: SecurityCamerasData) {
    this.securityCamerasService.getCamerasData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((cameras: Camera[]) => {
        this.cameras = cameras;
        this.selectedCamera = this.cameras[0];
      });
  }

  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
