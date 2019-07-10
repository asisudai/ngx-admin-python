/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Component, OnDestroy } from '@angular/core';
import { UserData, User } from '../../../@core/interfaces/common/users';
import { takeWhile } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';

export enum UserMode {
  VIEW = 'View',
  EDIT = 'Edit',
  EDIT_SELF = 'EditSelf',
  ADD = 'Add',
}

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnDestroy {

  private alive = true;

  mode: UserMode;
  user: User = this.getEmptyUser();

  constructor(private usersService: UserData,
              private router: Router,
              private route: ActivatedRoute,
              private toasterService: NbToastrService) {
    this.router.events
      .pipe(takeWhile(() => this.alive))
      .subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.init();
      }
    });
    this.init();
  }

  private init() {
    const id = this.route.snapshot.paramMap.get('id');
    const isProfile = this.route.snapshot.queryParamMap.get('profile');
    if (id) {
      if (isProfile) {
        this.setViewMode(UserMode.EDIT_SELF);
      } else {
        this.setViewMode(UserMode.EDIT);
      }
      this.loadUser(id);
    } else {
      this.setViewMode(UserMode.ADD);
    }
  }

  get canEdit(): boolean {
    return this.mode !== UserMode.VIEW;
  }

  loadUser(id) {
    const loadUser = this.mode === UserMode.EDIT_SELF ? this.usersService.getCurrentUser() : this.usersService.get(id);
    loadUser
      .pipe(takeWhile(() => this.alive))
      .subscribe(user => {
        this.user = user;
      });
  }

  private getEmptyUser(): User {
    return {
      id: undefined,
      firstName: '',
      lastName: '',
      email: '',
      age: 0,
      userName: '',
      picture: '',
      address: {
        street: '',
        city: '',
        zipCode: '',
      },
    };
  }

  save() {
    let observable = new Observable<User>();
    if (this.mode === UserMode.EDIT_SELF) {
      observable = this.usersService.updateCurrent(this.user);
    } else {
      observable = this.user.id
        ? this.usersService.update(this.user)
        : this.usersService.create(this.user);
    }

    observable
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        this.toasterService.success('', `Item ${this.user.id ? 'updated' : 'created'}!`);
        this.back();
      });
  }

  back() {
    this.router.navigate(['/pages']);
  }

  setViewMode(viewMode: UserMode) {
    this.mode = viewMode;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
