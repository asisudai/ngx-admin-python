/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NbRoleProvider } from '@nebular/security';
import { ROLES } from './roles';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private roleProvider: NbRoleProvider) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.roleProvider.getRole()
      .pipe(map(role => {
        const roles = role instanceof Array ? role : [role];
        return roles.some(x => x.toLowerCase() === ROLES.ADMIN);
      }));
  }
}
