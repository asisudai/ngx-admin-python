/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Styled spinner component
 */
export declare class NbSpinnerComponent {
    static readonly SIZE_XXSMALL = "xxsmall";
    static readonly SIZE_XSMALL = "xsmall";
    static readonly SIZE_SMALL = "small";
    static readonly SIZE_MEDIUM = "medium";
    static readonly SIZE_LARGE = "large";
    static readonly SIZE_XLARGE = "xlarge";
    static readonly SIZE_XXLARGE = "xxlarge";
    static readonly STATUS_ACTIVE = "active";
    static readonly STATUS_DISABLED = "disabled";
    static readonly STATUS_PRIMARY = "primary";
    static readonly STATUS_INFO = "info";
    static readonly STATUS_SUCCESS = "success";
    static readonly STATUS_WARNING = "warning";
    static readonly STATUS_DANGER = "danger";
    size: string;
    status: string;
    /**
     * Loading text that is shown near the icon
     * @type string
     */
    message: string;
    /**
     * Spiiner size, available sizes:
     * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
     * @param {string} val
     */
    private setSize;
    /**
     * Spiiner status (adds specific styles):
     * active, disabled, primary, info, success, warning, danger
     * @param {string} val
     */
    private setStatus;
    readonly xxsmall: boolean;
    readonly xsmall: boolean;
    readonly small: boolean;
    readonly medium: boolean;
    readonly large: boolean;
    readonly xlarge: boolean;
    readonly xxlarge: boolean;
    readonly active: boolean;
    readonly disabled: boolean;
    readonly primary: boolean;
    readonly info: boolean;
    readonly success: boolean;
    readonly warning: boolean;
    readonly danger: boolean;
}
