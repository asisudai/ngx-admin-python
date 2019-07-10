/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Pipe, PipeTransform } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({ name: 'ngxAuthToken' })
export class AuthPipe implements PipeTransform {
  constructor(private authService: NbAuthService) {}

  transform(url: string): Observable<string> {
    if (!url) {
      return observableOf(url);
    }
    return this.authService.getToken()
      .pipe(map(token => {
        const separator = url.indexOf('?') > 0 ? '&' : '?';
        return `${url}${separator}token=${token}`;
      }));

  }
}
