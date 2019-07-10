var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbAuthStrategyOptions } from '../auth-strategy-options';
import { NbAuthSimpleToken } from '../../services/';
var NbDummyAuthStrategyOptions = /** @class */ (function (_super) {
    __extends(NbDummyAuthStrategyOptions, _super);
    function NbDummyAuthStrategyOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.token = {
            class: NbAuthSimpleToken,
        };
        _this.delay = 1000;
        _this.alwaysFail = false;
        return _this;
    }
    return NbDummyAuthStrategyOptions;
}(NbAuthStrategyOptions));
export { NbDummyAuthStrategyOptions };
export var dummyStrategyOptions = new NbDummyAuthStrategyOptions();
//# sourceMappingURL=dummy-strategy-options.js.map