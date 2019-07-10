/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Chat message component.
 *
 * @styles
 *
 */
export declare class NbChatMessageFileComponent {
    private cd;
    private domSanitizer;
    readyFiles: any[];
    /**
     * Message sender
     * @type {string}
     */
    message: string;
    /**
     * Message sender
     * @type {string}
     */
    sender: string;
    /**
     * Message send date
     * @type {Date}
     */
    date: Date;
    /**
     * Message file path
     * @type {Date}
     */
    files: any[];
    constructor(cd: ChangeDetectorRef, domSanitizer: DomSanitizer);
    isImage(file: any): boolean;
}
