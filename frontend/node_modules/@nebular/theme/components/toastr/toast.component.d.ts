/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbToast } from './model';
/**
 * The `NbToastComponent` is responsible for rendering each toast with appropriate styles.
 *
 * @styles
 *
 * toastr-bg
 * toastr-padding
 * toastr-fg
 * toastr-border
 * toastr-border-radius
 * toastr-border-color
 * */
/**
 * TODO
 * Remove svg icons, include them in font.
 * */
export declare class NbToastComponent {
    toast: NbToast;
    destroy: EventEmitter<void>;
    readonly success: boolean;
    readonly info: boolean;
    readonly warning: boolean;
    readonly primary: boolean;
    readonly danger: boolean;
    readonly default: boolean;
    readonly destroyByClick: boolean;
    readonly hasIcon: boolean;
    readonly customIcon: boolean;
    readonly icon: string;
    onClick(): void;
}
