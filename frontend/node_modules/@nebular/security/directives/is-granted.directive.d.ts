import { OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { NbAccessChecker } from '../services/access-checker.service';
export declare class NbIsGrantedDirective implements OnDestroy {
    private templateRef;
    private viewContainer;
    private accessChecker;
    private alive;
    private hasView;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, accessChecker: NbAccessChecker);
    nbIsGranted: [string, string];
    ngOnDestroy(): void;
}
