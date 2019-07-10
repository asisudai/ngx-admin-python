/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  template: `
    <form class="form">
      <label for="subject">Subject:</label>
      <input nbInput id="subject" type="text">

      <label class="text-label" for="text">Text:</label>
      <textarea nbInput id="text"></textarea>
    </form>
  `,
  styleUrls: ['window-form.component.scss'],
})
export class WindowFormComponent {
  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}
