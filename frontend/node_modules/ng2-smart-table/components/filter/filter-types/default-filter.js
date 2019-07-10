import { Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
var DefaultFilter = /** @class */ (function () {
    function DefaultFilter() {
        this.delay = 300;
        this.filter = new EventEmitter();
    }
    DefaultFilter.prototype.ngOnDestroy = function () {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    };
    DefaultFilter.prototype.setFilter = function () {
        this.filter.emit(this.query);
    };
    DefaultFilter.propDecorators = {
        "query": [{ type: Input },],
        "inputClass": [{ type: Input },],
        "column": [{ type: Input },],
        "filter": [{ type: Output },],
    };
    return DefaultFilter;
}());
export { DefaultFilter };
//# sourceMappingURL=default-filter.js.map