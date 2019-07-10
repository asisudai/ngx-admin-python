import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagerComponent } from './pager.component';
var PagerModule = /** @class */ (function () {
    function PagerModule() {
    }
    PagerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                    ],
                    declarations: [
                        PagerComponent,
                    ],
                    exports: [
                        PagerComponent,
                    ],
                },] },
    ];
    return PagerModule;
}());
export { PagerModule };
//# sourceMappingURL=pager.module.js.map