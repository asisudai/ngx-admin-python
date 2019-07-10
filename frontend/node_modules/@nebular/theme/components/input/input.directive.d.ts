/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Basic input directive.
 *
 * ```html
 * <input nbInput></input>
 * ```
 *
 * ### Installation
 *
 * Import `NbInputModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbInputModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Default input size is `medium`:
 * @stacked-example(Showcase, input/input-showcase.component)
 *
 * Inputs are available in multiple colors using `status` property:
 * @stacked-example(Input Colors, input/input-colors.component)
 *
 * There are three input sizes:
 *
 * @stacked-example(Input Sizes, input/input-sizes.component)
 *
 * Inputs available in different shapes, which could be combined with the other properties:
 * @stacked-example(Input Shapes, input/input-shapes.component)
 *
 * `nbInput` could be applied to the following selectors - `input`, `textarea`:
 * @stacked-example(Input Elements, input/input-types.component)
 *
 * You can add `fullWidth` attribute to make element fill container:
 * @stacked-example(Full width inputs, input/input-full-width.component)
 *
 * Or you can bind control with form controls or ngModel:
 * @stacked-example(Input form binding, input/input-form.component)
 *
 * @styles
 *
 * form-control-bg:
 * form-control-border-width:
 * form-control-border-type:
 * form-control-border-color:
 * form-control-text-primary-color:
 * form-control-focus-bg:
 * form-control-selected-border-color:
 * form-control-placeholder-font-size:
 * form-control-placeholder-color:
 * form-control-font-size:
 * form-control-padding:
 * form-control-font-size-sm:
 * form-control-padding-sm:
 * form-control-font-size-lg:
 * form-control-padding-lg:
 * form-control-border-radius:
 * form-control-semi-round-border-radius:
 * form-control-round-border-radius:
 * form-control-info-border-color:
 * form-control-success-border-color:
 * form-control-warning-border-color:
 * form-control-danger-border-color:
 */
export declare class NbInputDirective {
    static readonly SIZE_SMALL = "small";
    static readonly SIZE_MEDIUM = "medium";
    static readonly SIZE_LARGE = "large";
    static readonly STATUS_INFO = "info";
    static readonly STATUS_SUCCESS = "success";
    static readonly STATUS_WARNING = "warning";
    static readonly STATUS_DANGER = "danger";
    static readonly SHAPE_RECTANGLE = "rectangle";
    static readonly SHAPE_SEMI_ROUND = "semi-round";
    static readonly SHAPE_ROUND = "round";
    size: string;
    /**
     * Field size, available sizes:
     * `small`, `medium`, `large`
     * @param {string} val
     */
    setSize: string;
    /**
     * Field status (adds specific styles):
     * `info`, `success`, `warning`, `danger`
     * @param {string} val
     */
    status: string;
    /**
     * Field shapes: `rectangle`, `round`, `semi-round`
     * @param {string} val
     */
    shape: string;
    /**
     * If set element will fill container
     * @param {string}
     */
    setFullWidth: any;
    fullWidth: boolean;
    readonly small: boolean;
    readonly medium: boolean;
    readonly large: boolean;
    readonly info: boolean;
    readonly success: boolean;
    readonly warning: boolean;
    readonly danger: boolean;
    readonly rectangle: boolean;
    readonly semiRound: boolean;
    readonly round: boolean;
}
