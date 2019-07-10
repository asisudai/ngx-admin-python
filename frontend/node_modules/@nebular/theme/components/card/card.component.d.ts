/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Component intended to be used within the `<nb-card>` component.
 * It adds styles for a preset header section.
 *
 * @styles
 *
 * card-header-font-family:
 * card-header-font-size:
 * card-header-font-weight:
 * card-header-fg:
 * card-header-fg-heading:
 * card-header-active-bg:
 * card-header-active-fg:
 * card-header-disabled-bg:
 * card-header-primary-bg:
 * card-header-info-bg:
 * card-header-success-bg:
 * card-header-warning-bg:
 * card-header-danger-bg:
 */
export declare class NbCardHeaderComponent {
}
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset body section.
 */
export declare class NbCardBodyComponent {
}
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset footer section.
 */
export declare class NbCardFooterComponent {
}
/**
 * Basic content container component.
 *
 * Basic card example:
 * @stacked-example(Showcase, card/card-showcase.component)
 *
 * Basic card configuration:
 *
 * ```html
 * <nb-card>
 *   <nb-card-body>
 *     Card
 *   </nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Card with header and footer:
 * @stacked-example(With Header & Footer, card/card-full.component)
 *
 * Most of the time main card content goes to `nb-card-body`,
 * so it is styled and aligned in accordance with the header and footer.
 * In case you need a higher level of control, you can pass contend directly to `nb-card`,
 * so `nb-card-body` styling will not be applied.
 *
 * Consider an example with `nb-list` component:
 * @stacked-example(Showcase, card/card-without-body.component)
 *
 * Colored cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, card/card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, card/card-accents.component)
 *
 * @additional-example(Multiple Sizes, card/card-sizes.component)
 *
 * @styles
 *
 * card-line-height:
 * card-font-weight:
 * card-fg-text:
 * card-bg:
 * card-height-xxsmall:
 * card-height-xsmall:
 * card-height-small:
 * card-height-medium:
 * card-height-large:
 * card-height-xlarge:
 * card-height-xxlarge:
 * card-shadow:
 * card-border-radius:
 * card-padding:
 * card-margin:
 * card-separator:
 *
 */
export declare class NbCardComponent {
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
    size: string;
    status: string;
    accent: string;
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
    readonly primaryAccent: boolean;
    readonly infoAccent: boolean;
    readonly successAccent: boolean;
    readonly warningAccent: boolean;
    readonly dangerAccent: boolean;
    readonly activeAccent: boolean;
    readonly disabledAccent: boolean;
    /**
     * Card size, available sizes:
     * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
     * @param {string} val
     */
    private setSize;
    /**
     * Card status (adds specific styles):
     * active, disabled, primary, info, success, warning, danger
     * @param {string} val
     */
    private setStatus;
    /**
     * Card accent (color of the top border):
     * active, disabled, primary, info, success, warning, danger
     * @param {string} val
     */
    private setAccent;
}
