import { NbStepperComponent } from './stepper.component';
export declare class NbStepperNextDirective {
    private stepper;
    type: string;
    constructor(stepper: NbStepperComponent);
    onClick(): void;
}
export declare class NbStepperPreviousDirective {
    private stepper;
    type: string;
    constructor(stepper: NbStepperComponent);
    onClick(): void;
}
