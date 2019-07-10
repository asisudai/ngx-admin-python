/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { InjectionToken, ViewContainerRef } from '@angular/core';
export declare const NB_DIALOG_CONFIG: InjectionToken<NbDialogConfig<any>>;
/**
 * Describes all available options that may be passed to the NbDialogService.
 * */
export declare class NbDialogConfig<D = any> {
    /**
     * If true than overlay will render backdrop under a dialog.
     * */
    hasBackdrop: boolean;
    /**
     * Class that'll be assigned to the backdrop element.
     * */
    backdropClass: string;
    /**
     * If true then mouse clicks by backdrop will close a dialog.
     * */
    closeOnBackdropClick: boolean;
    /**
     * If true then escape press will close a dialog.
     * */
    closeOnEsc: boolean;
    /**
     * Disables scroll on content under dialog if true and does nothing otherwise.
     * */
    hasScroll: boolean;
    /**
     * Focuses dialog automatically after open if true.
     * */
    autoFocus: boolean;
    /**
     * Where the attached component should live in Angular's *logical* component tree.
     * This affects what is available for injection and the change detection order for the
     * component instantiated inside of the dialog. This does not affect where the dialog
     * content will be rendered.
     */
    viewContainerRef: ViewContainerRef;
    context: D;
    constructor(config: Partial<NbDialogConfig>);
}
