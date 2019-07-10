/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {

  nodes = [{
    name: 'Programming languages by programming paradigm',
    children: [{
      name: 'Object-oriented programming',
      children: [{
        name: 'Java',
      }, {
        name: 'C++',
      }, {
        name: 'C#',
      }],
    }, {
      name: 'Prototype-based programming',
      children: [{
        name: 'JavaScript',
      }, {
        name: 'CoffeeScript',
      }, {
        name: 'Lua',
      }],
    }],
  }];

}
