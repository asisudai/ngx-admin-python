"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("@schematics/angular/utility/config");
var schematics_1 = require("@angular/cdk/schematics");
/**
 * Gets project workspace from the specified tree by given project name
 * */
function getProject(tree, projectName) {
    var workspace = config_1.getWorkspace(tree);
    return schematics_1.getProjectFromWorkspace(workspace, projectName);
}
exports.getProject = getProject;
//# sourceMappingURL=project.js.map