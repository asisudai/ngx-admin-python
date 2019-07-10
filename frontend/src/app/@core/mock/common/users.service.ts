/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User, UserData } from '../../interfaces/common/users';

@Injectable()
export class UsersService extends UserData {

  getCurrentUser(): Observable<User> {
    return observableOf(this.data[0]);
  }

  get(id: number): Observable<User> {
    return observableOf(this.data.find(x => x.id === id));
  }

  updateCurrent(user: User): Observable<User> {
    this.data[0] = user;
    return observableOf(this.data[0]);
  }

  update(user: User): Observable<User> {
    const i = this.data.indexOf(this.data.find(x => x.id === user.id));
    if (i >= 0) {
      this.data[i] = user;
    }
    return observableOf(user);
  }

  create(user: User): Observable<User> {
    user.id = Math.max(...this.data.map(x => x.id)) + 1;
    this.data.push(user);
    return observableOf(user);
  }

  delete(id: number): Observable<boolean> {
    this.data = [...this.data.filter(x => x.id !== id)];
    return observableOf();
  }

  private data: User[] = [
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Walmart',
      userName: '@mdo',
      email: 'mdo@gmail.com',
      age: 0,
      picture: '',
      address: {
        street: 'Wall St.',
        city: 'New York',
        zipCode: '10005',
      },
    },
    {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Cuba',
      userName: '@mdo',
      email: 'mdo@gmail.com',
      age: 0,
      picture: '',
      address: {
        street: 'Wall St.',
        city: 'New York',
        zipCode: '10005',
      },
    },
    {
      id: 3,
      firstName: 'Larry',
      lastName: 'Page',
      userName: '@twitter',
      email: 'twitter@outlook.com',
      age: 0,
      picture: '',
      address: {
        street: 'Wall St.',
        city: 'New York',
        zipCode: '10005',
      },
    },
    {
      id: 4,
      firstName: 'John',
      lastName: 'Snow',
      userName: '@snow',
      email: 'snow@gmail.com',
      age: 0,
      picture: '',
      address: {
        street: 'Wall St.',
        city: 'New York',
        zipCode: '10005',
      },
    }];
}
