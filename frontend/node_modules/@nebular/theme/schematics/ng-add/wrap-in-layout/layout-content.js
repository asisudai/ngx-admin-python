"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var layoutStart = "<nb-layout>\n\n  <nb-layout-header fixed>\n  <!-- Insert header here -->\n  </nb-layout-header>\n\n  <nb-layout-column>\n";
var layoutEnd = "  </nb-layout-column>\n\n  <nb-layout-footer fixed>\n  <!-- Insert footer here -->\n  </nb-layout-footer>\n\n</nb-layout>";
function wrapInlineTemplateInLayout(template) {
    return " `\n" + padd(layoutStart, 4) + "\n" + padd(template, 4) + "\n" + padd(layoutEnd, 4) + "\n";
}
exports.wrapInlineTemplateInLayout = wrapInlineTemplateInLayout;
function wrapHtmlFileTemplateInLayout(template) {
    return layoutStart + "\n" + padd(template, 4) + "\n" + layoutEnd + "\n";
}
exports.wrapHtmlFileTemplateInLayout = wrapHtmlFileTemplateInLayout;
/**
 * Adds padding to the each line of the multyline string.
 * */
function padd(text, paddLen) {
    return text
        .split('\n')
        .map(function (line) { return "" + ' '.repeat(paddLen) + line; })
        .join('\n');
}
//# sourceMappingURL=layout-content.js.map