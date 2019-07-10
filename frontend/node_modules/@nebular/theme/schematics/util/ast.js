"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular-devkit/core");
var schematics_1 = require("@angular/cdk/schematics");
var ast_utils_1 = require("@schematics/angular/utility/ast-utils");
var ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
function isImportedInMainModule(tree, project, moduleName, importPath) {
    var appModulePath = getAppModulePath(tree, schematics_1.getProjectMainFile(project));
    var appModuleSource = schematics_1.getSourceFile(tree, appModulePath);
    return ast_utils_1.isImported(appModuleSource, moduleName, importPath);
}
exports.isImportedInMainModule = isImportedInMainModule;
function getAppModulePath(host, mainPath) {
    var moduleRelativePath = ng_ast_utils_1.findBootstrapModulePath(host, mainPath);
    var mainDir = core_1.dirname(mainPath);
    return core_1.normalize("/" + mainDir + "/" + moduleRelativePath + ".ts");
}
exports.getAppModulePath = getAppModulePath;
//# sourceMappingURL=ast.js.map