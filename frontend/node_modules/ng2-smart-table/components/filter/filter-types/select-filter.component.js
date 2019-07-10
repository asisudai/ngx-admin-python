var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, skip } from 'rxjs/operators';
import { DefaultFilter } from './default-filter';
var SelectFilterComponent = /** @class */ (function (_super) {
    __extends(SelectFilterComponent, _super);
    function SelectFilterComponent() {
        var _this = _super.call(this) || this;
        _this.inputControl = new FormControl();
        return _this;
    }
    SelectFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputControl.valueChanges
            .pipe(skip(1), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe(function (value) { return _this.setFilter(); });
    };
    SelectFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'select-filter',
                    template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            [(ngModel)]=\"query\"\n            [formControl]=\"inputControl\">\n\n        <option value=\"\">{{ column.getFilterConfig().selectText }}</option>\n        <option *ngFor=\"let option of column.getFilterConfig().list\" [value]=\"option.value\">\n          {{ option.title }}\n        </option>\n    </select>\n  ",
                },] },
    ];
    /** @nocollapse */
    SelectFilterComponent.ctorParameters = function () { return []; };
    return SelectFilterComponent;
}(DefaultFilter));
export { SelectFilterComponent };
//# sourceMappingURL=select-filter.component.js.map