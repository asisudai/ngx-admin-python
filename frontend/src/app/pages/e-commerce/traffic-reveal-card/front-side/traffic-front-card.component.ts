/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { TrafficListItem } from '../../../../@core/interfaces/ecommerce/traffic-list';

@Component({
  selector: 'ngx-traffic-front-card',
  styleUrls: ['./traffic-front-card.component.scss'],
  templateUrl: './traffic-front-card.component.html',
})
export class TrafficFrontCardComponent implements OnDestroy {

  private alive = true;

  @Input() frontCardData: TrafficListItem;

  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  trackByDate(_, item) {
    return item.date;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
