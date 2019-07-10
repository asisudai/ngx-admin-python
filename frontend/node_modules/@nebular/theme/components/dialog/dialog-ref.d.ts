/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ComponentRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NbOverlayRef } from '../cdk';
/**
 * The `NbDialogRef` helps to manipulate dialog after it was created.
 * The dialog can be dismissed by using `close` method of the dialogRef.
 * You can access rendered component as `content` property of the dialogRef.
 * `onBackdropClick` streams click events on the backdrop of the dialog.
 * */
export declare class NbDialogRef<T> {
    protected overlayRef: NbOverlayRef;
    componentRef: ComponentRef<T>;
    /**
     * Stream of backdrop click events.
     * */
    readonly onBackdropClick: Observable<MouseEvent>;
    protected onClose$: Subject<any>;
    readonly onClose: Observable<any>;
    constructor(overlayRef: NbOverlayRef);
    /**
     * Hides dialog.
     * */
    close(res?: any): void;
}
