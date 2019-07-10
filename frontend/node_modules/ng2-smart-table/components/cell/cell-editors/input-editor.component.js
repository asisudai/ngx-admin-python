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
import { DefaultEditor } from './default-editor';
var InputEditorComponent = /** @class */ (function (_super) {
    __extends(InputEditorComponent, _super);
    function InputEditorComponent() {
        return _super.call(this) || this;
    }
    InputEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'input-editor',
                    styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em} /*# sourceMappingURL=editor.component.css.map */ "],
                    template: "\n    <input [ngClass]=\"inputClass\"\n           class=\"form-control\"\n           [(ngModel)]=\"cell.newValue\"\n           [name]=\"cell.getId()\"\n           [placeholder]=\"cell.getTitle()\"\n           [disabled]=\"!cell.isEditable()\"\n           (click)=\"onClick.emit($event)\"\n           (keydown.enter)=\"onEdited.emit($event)\"\n           (keydown.esc)=\"onStopEditing.emit()\">\n    ",
                },] },
    ];
    /** @nocollapse */
    InputEditorComponent.ctorParameters = function () { return []; };
    return InputEditorComponent;
}(DefaultEditor));
export { InputEditorComponent };
//# sourceMappingURL=input-editor.component.js.map