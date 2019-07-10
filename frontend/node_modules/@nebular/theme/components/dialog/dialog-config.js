/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { InjectionToken } from '@angular/core';
export var NB_DIALOG_CONFIG = new InjectionToken('Default dialog options');
/**
 * Describes all available options that may be passed to the NbDialogService.
 * */
var NbDialogConfig = /** @class */ (function () {
    function NbDialogConfig(config) {
        /**
         * If true than overlay will render backdrop under a dialog.
         * */
        this.hasBackdrop = true;
        /**
         * Class that'll be assigned to the backdrop element.
         * */
        this.backdropClass = 'overlay-backdrop';
        /**
         * If true then mouse clicks by backdrop will close a dialog.
         * */
        this.closeOnBackdropClick = true;
        /**
         * If true then escape press will close a dialog.
         * */
        this.closeOnEsc = true;
        /**
         * Disables scroll on content under dialog if true and does nothing otherwise.
         * */
        this.hasScroll = false;
        /**
         * Focuses dialog automatically after open if true.
         * */
        this.autoFocus = true;
        Object.assign(this, config);
    }
    return NbDialogConfig;
}());
export { NbDialogConfig };
//# sourceMappingURL=dialog-config.js.map