/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Action item, display a link with an icon, or any other content provided instead.
 */
export declare class NbActionComponent {
    disabledValue: boolean;
    /**
     * Icon class to display
     * @type string
     */
    icon: string;
    /**
     * Disables the item (changes item opacity and mouse cursor)
     * @type boolean
     */
    disabled: boolean;
    /**
     * Badge text to display
     * @type string
     */
    badgeText: string;
    /**
     * Badge status (adds specific styles):
     * 'primary', 'info', 'success', 'warning', 'danger'
     * @param {string} val
     */
    badgeStatus: string;
    /**
     * Badge position.
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right',
     * 'top start', 'top end', 'bottom start', 'bottom end'
     * @type string
     */
    badgePosition: string;
}
/**
 * Shows a horizontal list of actions, available in multiple sizes.
 * Aligns items vertically.
 *
 * @stacked-example(Showcase, action/action-showcase.component)
 *
 * Basic actions setup:
 * ```html
 * <nb-actions size="small">
 *   <nb-action icon="nb-search"></nb-action>
 *   <nb-action icon="nb-power-circled"></nb-action>
 *   <nb-action icon="nb-person"></nb-action>
 * </nb-actions>
 * ```
 * ### Installation
 *
 * Import `NbActionsModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbActionsModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Multiple sizes example:
 * @stacked-example(Multiple Sizes, action/action-sizes.component)
 *
 * It is also possible to specify a `badge` value:
 *
 * @stacked-example(Action Badge, action/action-badge.component)
 *
 * and we can set it to full a width of a parent component
 * @stacked-example(Full Width, action/action-width.component)
 *
 * @styles
 *
 * actions-font-size:
 * actions-font-family:
 * actions-line-height:
 * actions-fg:
 * actions-bg:
 * actions-separator:
 * actions-padding:
 * actions-size-small:
 * actions-size-medium:
 * actions-size-large:
 */
export declare class NbActionsComponent {
    static readonly SIZE_SMALL = "small";
    static readonly SIZE_MEDIUM = "medium";
    static readonly SIZE_LARGE = "large";
    private sizeValue;
    inverseValue: boolean;
    readonly small: boolean;
    readonly medium: boolean;
    readonly large: boolean;
    fullWidthValue: boolean;
    /**
     * Size of the component, small|medium|large
     * @type string
     */
    size: string;
    /**
     * Makes colors inverse based on current theme
     * @type boolean
     */
    inverse: boolean;
    /**
     * Component will fill full width of the container
     * @type boolean
     */
    fullWidth: boolean;
}
