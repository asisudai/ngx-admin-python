import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellModule } from '../cell/cell.module';
import { Ng2SmartTableTbodyComponent } from './tbody.component';
import { TbodyCreateCancelComponent } from './cells/create-cancel.component';
import { TbodyEditDeleteComponent } from './cells/edit-delete.component';
import { TbodyCustomComponent } from './cells/custom.component';
var TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    TbodyCustomComponent,
    Ng2SmartTableTbodyComponent
];
var TBodyModule = /** @class */ (function () {
    function TBodyModule() {
    }
    TBodyModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        CellModule,
                    ],
                    declarations: TBODY_COMPONENTS.slice(),
                    exports: TBODY_COMPONENTS.slice(),
                },] },
    ];
    return TBodyModule;
}());
export { TBodyModule };
//# sourceMappingURL=tbody.module.js.map