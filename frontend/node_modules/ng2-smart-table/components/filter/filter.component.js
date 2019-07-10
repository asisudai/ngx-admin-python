import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '../../lib/data-source/data-source';
import { Column } from '../../lib/data-set/column';
var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        this.inputClass = '';
        this.filter = new EventEmitter();
        this.query = '';
    }
    FilterComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var filterConf = _this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    _this.query = '';
                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach(function (k, v) {
                        if (k.field == _this.column.id) {
                            _this.query = k.search;
                        }
                    });
                }
            });
        }
    };
    FilterComponent.prototype.onFilter = function (query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    };
    FilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-smart-table-filter',
                    styles: [":host .ng2-smart-filter /deep/ input,:host .ng2-smart-filter /deep/ select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter /deep/ input[type=search]{box-sizing:inherit}:host .ng2-smart-filter /deep/ .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter /deep/ a{font-weight:400} /*# sourceMappingURL=filter.component.css.map */ "],
                    template: "\n    <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\" [ngSwitch]=\"column.getFilterType()\">\n      <select-filter *ngSwitchCase=\"'list'\"\n                     [query]=\"query\"\n                     [ngClass]=\"inputClass\"\n                     [column]=\"column\"\n                     (filter)=\"onFilter($event)\">\n      </select-filter>\n      <checkbox-filter *ngSwitchCase=\"'checkbox'\"\n                       [query]=\"query\"\n                       [ngClass]=\"inputClass\"\n                       [column]=\"column\"\n                       (filter)=\"onFilter($event)\">\n      </checkbox-filter>\n      <completer-filter *ngSwitchCase=\"'completer'\"\n                        [query]=\"query\"\n                        [ngClass]=\"inputClass\"\n                        [column]=\"column\"\n                        (filter)=\"onFilter($event)\">\n      </completer-filter>\n      <input-filter *ngSwitchDefault\n                    [query]=\"query\"\n                    [ngClass]=\"inputClass\"\n                    [column]=\"column\"\n                    (filter)=\"onFilter($event)\">\n      </input-filter>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    FilterComponent.propDecorators = {
        "column": [{ type: Input },],
        "source": [{ type: Input },],
        "inputClass": [{ type: Input },],
        "filter": [{ type: Output },],
    };
    return FilterComponent;
}());
export { FilterComponent };
//# sourceMappingURL=filter.component.js.map