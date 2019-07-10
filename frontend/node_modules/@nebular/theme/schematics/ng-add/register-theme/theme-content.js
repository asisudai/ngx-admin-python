"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createThemeContent(themeName) {
    return "@import '~@nebular/theme/styles/theming';\n@import '~@nebular/theme/styles/themes/" + themeName + "';\n\n$nb-themes: nb-register-theme((\n  // add your variables here like:\n  // color-bg: #4ca6ff,\n), " + themeName + ", " + themeName + ");\n";
}
exports.createThemeContent = createThemeContent;
exports.stylesContent = "@import 'themes';\n\n@import '~@nebular/theme/styles/globals';\n\n@include nb-install() {\n  @include nb-theme-global();\n};\n";
//# sourceMappingURL=theme-content.js.map