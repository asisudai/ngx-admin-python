/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbAuthStrategyOptions } from '../auth-strategy-options';
import { NbAuthSimpleToken } from '../../services/';
export declare class NbDummyAuthStrategyOptions extends NbAuthStrategyOptions {
    token?: {
        class: typeof NbAuthSimpleToken;
    };
    delay?: number;
    alwaysFail?: boolean;
}
export declare const dummyStrategyOptions: NbDummyAuthStrategyOptions;
