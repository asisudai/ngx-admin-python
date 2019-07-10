/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Renderer2, ElementRef } from '@angular/core';
/**
 * Basic button component.
 *
 * Default button size is `medium` and status color is `primary`:
 * @stacked-example(Button Showcase, button/button-showcase.component)
 *
 * ```html
 * <button nbButton></button>
 * ```
 * ### Installation
 *
 * Import `NbButtonModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbButtonModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Buttons are available in multiple colors using `status` property:
 * @stacked-example(Button Colors, button/button-colors.component.html)
 *
 * There are three button sizes:
 *
 * @stacked-example(Button Sizes, button/button-sizes.component.html)
 *
 * And two additional style types - `outline`:
 *
 * @stacked-example(Outline Buttons, button/button-outline.component.html)
 *
 * and `hero`:
 *
 * @stacked-example(Button Colors, button/button-hero.component.html)
 *
 * Buttons available in different shapes, which could be combined with the other properties:
 * @stacked-example(Button Shapes, button/button-shapes.component)
 *
 * `nbButton` could be applied to the following selectors - `button`, `input[type="button"]`, `input[type="submit"]`
 * and `a`:
 * @stacked-example(Button Elements, button/button-types.component.html)
 *
 * Button can be made `fullWidth`:
 * @stacked-example(Full Width Button, button/button-full-width.component.html)
 *
 * @styles
 *
 * btn-fg:
 * btn-font-family:
 * btn-line-height:
 * btn-disabled-opacity:
 * btn-cursor:
 * btn-primary-bg:
 * btn-secondary-bg:
 * btn-info-bg:
 * btn-success-bg:
 * btn-warning-bg:
 * btn-danger-bg:
 * btn-secondary-border:
 * btn-secondary-border-width:
 * btn-padding-y-lg:
 * btn-padding-x-lg:
 * btn-font-size-lg:
 * btn-padding-y-md:
 * btn-padding-x-md:
 * btn-font-size-md:
 * btn-padding-y-sm:
 * btn-padding-x-sm:
 * btn-font-size-sm:
 * btn-padding-y-xs:
 * btn-padding-x-xs:
 * btn-font-size-xs:
 * btn-border-radius:
 * btn-rectangle-border-radius:
 * btn-semi-round-border-radius:
 * btn-round-border-radius:
 * btn-hero-shadow:
 * btn-hero-text-shadow:
 * btn-hero-bevel-size:
 * btn-hero-glow-size:
 * btn-hero-primary-glow-size:
 * btn-hero-success-glow-size:
 * btn-hero-warning-glow-size:
 * btn-hero-info-glow-size:
 * btn-hero-danger-glow-size:
 * btn-hero-secondary-glow-size:
 * btn-hero-degree:
 * btn-hero-primary-degree:
 * btn-hero-success-degree:
 * btn-hero-warning-degree:
 * btn-hero-info-degree:
 * btn-hero-danger-degree:
 * btn-hero-secondary-degree:
 * btn-hero-border-radius:
 * btn-outline-fg:
 * btn-outline-hover-fg:
 * btn-outline-focus-fg:
 */
export declare class NbButtonComponent {
    protected renderer: Renderer2;
    protected hostElement: ElementRef<HTMLElement>;
    static readonly SIZE_XSMALL = "xsmall";
    static readonly SIZE_SMALL = "small";
    static readonly SIZE_MEDIUM = "medium";
    static readonly SIZE_LARGE = "large";
    static readonly STATUS_PRIMARY = "primary";
    static readonly STATUS_INFO = "info";
    static readonly STATUS_SUCCESS = "success";
    static readonly STATUS_WARNING = "warning";
    static readonly STATUS_DANGER = "danger";
    static readonly SHAPE_RECTANGLE = "rectangle";
    static readonly SHAPE_ROUND = "round";
    static readonly SHAPE_SEMI_ROUND = "semi-round";
    size: string;
    status: string;
    accent: string;
    shape: string;
    readonly xsmall: boolean;
    readonly small: boolean;
    readonly medium: boolean;
    readonly large: boolean;
    readonly primary: boolean;
    readonly info: boolean;
    readonly success: boolean;
    readonly warning: boolean;
    readonly danger: boolean;
    readonly rectangle: boolean;
    readonly round: boolean;
    readonly semiRound: boolean;
    hero: boolean;
    outline: boolean;
    disabled: boolean;
    readonly tabbable: string;
    fullWidth: boolean;
    /**
     * Button size, available sizes:
     * `xxsmall`, `xsmall`, `small`, `medium`, `large`
     * @param {string} val
     */
    private setSize;
    /**
     * Button status (adds specific styles):
     * `primary`, `info`, `success`, `warning`, `danger`
     * @param {string} val
     */
    private setStatus;
    /**
     * Button shapes: `rectangle`, `round`, `semi-round`
     * @param {string} val
     */
    private setShape;
    /**
     * Adds `hero` styles
     * @param {boolean} val
     */
    setHero: boolean;
    /**
     * Disables the button
     * @param {boolean} val
     */
    setDisabled: boolean;
    /**
     * If set element will fill its container
     * @param {boolean}
     */
    setFullWidth: any;
    /**
     * Adds `outline` styles
     * @param {boolean} val
     */
    setOutline: boolean;
    /**
     * @private
     * Keep this handler to partially support anchor disabling.
     * Unlike button, anchor doesn't have 'disabled' DOM property,
     * so handler will be called anyway. We preventing navigation and bubbling.
     * Disabling is partial due to click handlers precedence. Consider example:
     * <a nbButton [disabled]="true" (click)="clickHandler()">...</a>
     * 'clickHandler' will be called before our host listener below. We can't prevent
     * such handlers call.
     */
    onClick(event: Event): void;
    constructor(renderer: Renderer2, hostElement: ElementRef<HTMLElement>);
}
