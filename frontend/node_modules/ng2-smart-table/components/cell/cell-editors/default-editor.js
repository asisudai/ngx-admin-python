import { Output, EventEmitter, Input } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
var DefaultEditor = /** @class */ (function () {
    function DefaultEditor() {
        this.onStopEditing = new EventEmitter();
        this.onEdited = new EventEmitter();
        this.onClick = new EventEmitter();
    }
    DefaultEditor.propDecorators = {
        "cell": [{ type: Input },],
        "inputClass": [{ type: Input },],
        "onStopEditing": [{ type: Output },],
        "onEdited": [{ type: Output },],
        "onClick": [{ type: Output },],
    };
    return DefaultEditor;
}());
export { DefaultEditor };
//# sourceMappingURL=default-editor.js.map