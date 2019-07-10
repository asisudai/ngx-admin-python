/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { QueryList } from '@angular/core';
import { NbStepComponent } from './step.component';
export declare enum NbStepperOrientation {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}
/**
 * Stepper component
 *
 * @stacked-example(Showcase, stepper/stepper-showcase.component)
 *
 * ### Installation
 *
 * Import `NbStepperModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbStepperModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If step label is string you can pass it as `label` attribute. Otherwise ng-template should be used:
 * ```html
 * // ...
 * <nb-stepper orientation="horizontal">
 *   <nb-step label="step number one">
 *       // ... step content here
 *   <nb-step>
 *   <nb-step label="stepLabel">
 *       <ng-template #stepLabel>
 *           <div>
 *               step number two
 *           </div>
 *       </ng-template>
 *       // ... step content here
 *   <nb-step>
 * </nb-stepper>
 * ```
 * Specify `[stepControl]="form"` and user can navigates only if submit previous step's form.
 * ```html
 * // ...
 * <nb-stepper  orientation="horizontal">
 *   <nb-step label="step number one" [stepControl]="form">
 *     <form [formGroup]="form">
 *       // ...
 *     </form>
 *   <nb-step>
 *    // ...
 * </nb-stepper>
 * ```
 *
 * @stacked-example(Validation, stepper/stepper-validation.component)
 *
 * Stepper component has two layout options - `vertical` & `horizontal`
 * @stacked-example(Vertical, stepper/stepper-vertical.component)
 *
 * @styles
 *
 * stepper-index-size:
 * stepper-label-font-size:
 * stepper-label-font-weight:
 * stepper-accent-color:
 * stepper-completed-fg:
 * stepper-fg:
 * stepper-completed-icon-size:
 * stepper-completed-icon-weight:
 */
export declare class NbStepperComponent {
    steps: QueryList<NbStepComponent>;
    readonly vertical: boolean;
    readonly horizontal: boolean;
    /**
     * Selected step index
     *
     * @type {boolean}
     */
    selectedIndex: number;
    /**
     * Selected step component
     *
     * @type {boolean}
     */
    selected: NbStepComponent | undefined;
    /**
     * Stepper orientation - `horizontal`|`vertical`
     * @type {string}
     */
    orientation: string;
    private index;
    /**
     * Navigate to next step
     * */
    next(): void;
    /**
     * Navigate to previous step
     * */
    previous(): void;
    /**
     * Reset stepper and stepControls to initial state
     * */
    reset(): void;
    isStepSelected(step: NbStepComponent): boolean;
    private isStepValid;
}
