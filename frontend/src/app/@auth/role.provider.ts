/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { NbAuthService, NbAuthJWTToken, decodeJwtPayload } from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class RoleProvider extends NbRoleProvider {

  constructor(private authService: NbAuthService) {
    super();
  }

  private readonly ROLE_FIELD = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

  getRole(): Observable<string> {
    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthJWTToken) => {
          const payload = decodeJwtPayload(token.toString());
          return token.isValid() && payload ? payload[this.ROLE_FIELD] : 'guest';
        }),
      );
  }
}
