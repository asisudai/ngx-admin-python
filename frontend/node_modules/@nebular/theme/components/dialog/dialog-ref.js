/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Subject } from 'rxjs';
/**
 * The `NbDialogRef` helps to manipulate dialog after it was created.
 * The dialog can be dismissed by using `close` method of the dialogRef.
 * You can access rendered component as `content` property of the dialogRef.
 * `onBackdropClick` streams click events on the backdrop of the dialog.
 * */
var NbDialogRef = /** @class */ (function () {
    function NbDialogRef(overlayRef) {
        this.overlayRef = overlayRef;
        this.onClose$ = new Subject();
        this.onClose = this.onClose$.asObservable();
        this.onBackdropClick = this.overlayRef.backdropClick();
    }
    /**
     * Hides dialog.
     * */
    NbDialogRef.prototype.close = function (res) {
        this.overlayRef.detach();
        this.overlayRef.dispose();
        this.onClose$.next(res);
        this.onClose$.complete();
    };
    return NbDialogRef;
}());
export { NbDialogRef };
//# sourceMappingURL=dialog-ref.js.map