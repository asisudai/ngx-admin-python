import { TemplateRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NbStepperComponent } from './stepper.component';
/**
 * Component intended to be used within  the `<nb-stepper>` component.
 * Container for a step
 */
export declare class NbStepComponent {
    private stepper;
    /**
     * Step content
     *
     * @type {TemplateRef}
     */
    content: TemplateRef<any>;
    /**
     * Top level abstract control of the step
     *
     * @type {AbstractControl}
     */
    stepControl: AbstractControl;
    /**
     * Step label
     *
     * @type {string|TemplateRef<any>}
     */
    label: string | TemplateRef<any>;
    /**
     * Whether step will be displayed in wizard
     *
     * @type {boolean}
     */
    hidden: false;
    /**
     * Check that label is a TemplateRef.
     *
     * @return boolean
     * */
    readonly isLabelTemplate: boolean;
    /**
     * Whether step is marked as completed.
     *
     * @type {boolean}
     */
    completed: boolean;
    private completedValue;
    private readonly isCompleted;
    interacted: boolean;
    constructor(stepper: NbStepperComponent);
    /**
     * Mark step as selected
     * */
    select(): void;
    /**
     * Reset step and stepControl state
     * */
    reset(): void;
}
