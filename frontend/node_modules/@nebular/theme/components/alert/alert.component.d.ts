/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
/**
 * Alert component.
 *
 * Basic alert example:
 * @stacked-example(Showcase, alert/alert-showcase.component)
 *
 * Alert configuration:
 *
 * ```html
 * <nb-alert status="success">
 *   You have been successfully authenticated!
 * </nb-alert>
 * ```
 * ### Installation
 *
 * Import `NbButtonModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbAlertModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Alert could additionally have a `close` button when `closable` property is set:
 * ```html
 * <nb-alert status="success" closable (close)="onClose()">
 *   You have been successfully authenticated!
 * </nb-alert>
 * ```
 *
 * Colored alerts could be simply configured by providing a `status` property:
 * @stacked-example(Colored Alert, alert/alert-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight alert highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Alert, alert/alert-accents.component)
 *
 * And `outline` property:
 * @stacked-example(Outline Alert, alert/alert-outline.component)
 *
 * @additional-example(Multiple Sizes, alert/alert-sizes.component)
 *
 * @styles
 *
 * alert-font-size:
 * alert-line-height:
 * alert-font-weight:
 * alert-fg:
 * alert-outline-fg:
 * alert-bg:
 * alert-active-bg:
 * alert-disabled-bg:
 * alert-disabled-fg:
 * alert-primary-bg:
 * alert-info-bg:
 * alert-success-bg:
 * alert-warning-bg:
 * alert-danger-bg:
 * alert-height-xxsmall:
 * alert-height-xsmall:
 * alert-height-small:
 * alert-height-medium:
 * alert-height-large:
 * alert-height-xlarge:
 * alert-height-xxlarge:
 * alert-shadow:
 * alert-border-radius:
 * alert-padding:
 * alert-closable-padding:
 * alert-button-padding:
 * alert-margin:
 */
export declare class NbAlertComponent {
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
    static readonly ACCENT_ACTIVE = "active";
    static readonly ACCENT_DISABLED = "disabled";
    static readonly ACCENT_PRIMARY = "primary";
    static readonly ACCENT_INFO = "info";
    static readonly ACCENT_SUCCESS = "success";
    static readonly ACCENT_WARNING = "warning";
    static readonly ACCENT_DANGER = "danger";
    static readonly OUTLINE_ACTIVE = "active";
    static readonly OUTLINE_DISABLED = "disabled";
    static readonly OUTLINE_PRIMARY = "primary";
    static readonly OUTLINE_INFO = "info";
    static readonly OUTLINE_SUCCESS = "success";
    static readonly OUTLINE_WARNING = "warning";
    static readonly OUTLINE_DANGER = "danger";
    size: string;
    status: string;
    accent: string;
    outline: string;
    closableValue: boolean;
    /**
     * Shows `close` icon
     */
    closable: boolean;
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
    readonly hasAccent: string;
    readonly hasStatus: string;
    readonly primaryAccent: boolean;
    readonly infoAccent: boolean;
    readonly successAccent: boolean;
    readonly warningAccent: boolean;
    readonly dangerAccent: boolean;
    readonly activeAccent: boolean;
    readonly disabledAccent: boolean;
    readonly hasOutline: string;
    readonly primaryOutline: boolean;
    readonly infoOutline: boolean;
    readonly successOutline: boolean;
    readonly warningOutline: boolean;
    readonly dangerOutline: boolean;
    readonly activeOutline: boolean;
    readonly disabledOutline: boolean;
    /**
     * Alert size, available sizes:
     * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
     * @param {string} val
     */
    private setSize;
    /**
     * Alert status (adds specific styles):
     * active, disabled, primary, info, success, warning, danger
     * @param {string} val
     */
    private setStatus;
    /**
     * Alert accent (color of the top border):
     * active, disabled, primary, info, success, warning, danger
     * @param {string} val
     */
    private setAccent;
    /**
     * Alert outline (color of the border):
     * active, disabled, primary, info, success, warning, danger
     * @param {string} val
     */
    private setOutline;
    /**
     * Emits when chip is removed
     * @type EventEmitter<any>
     */
    close: EventEmitter<{}>;
    /**
     * Emits the removed chip event
     */
    onClose(): void;
}
