"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ast_utils_1 = require("@schematics/angular/utility/ast-utils");
var schematics_1 = require("@angular/cdk/schematics");
var core_1 = require("@angular-devkit/core");
var ts = require("typescript");
var project_1 = require("./project");
var TemplateDescriptor = /** @class */ (function () {
    function TemplateDescriptor(templateProp, templateUrlProp, componentPath, template) {
        this.templateProp = templateProp;
        this.templateUrlProp = templateUrlProp;
        this.componentPath = componentPath;
        this.template = template;
    }
    TemplateDescriptor.prototype.isInline = function () {
        return !!this.templateProp;
    };
    return TemplateDescriptor;
}());
exports.TemplateDescriptor = TemplateDescriptor;
function getComponentTemplateDescriptor(host, componentPath) {
    var compSource = schematics_1.getSourceFile(host, componentPath);
    var compMetadata = ast_utils_1.getDecoratorMetadata(compSource, 'Component', '@angular/core')[0];
    var templateProp = getMetadataProperty(compMetadata, 'template');
    var templateUrlProp = getMetadataProperty(compMetadata, 'templateUrl');
    var template = getComponentTemplate(host, componentPath, {
        templateProp: templateProp,
        templateUrlProp: templateUrlProp,
    });
    return new TemplateDescriptor(templateProp, templateUrlProp, componentPath, template);
}
exports.getComponentTemplateDescriptor = getComponentTemplateDescriptor;
function getAppComponentPath(tree, projectName) {
    var project = project_1.getProject(tree, projectName);
    return core_1.normalize(project.sourceRoot + "/app/app.component.ts");
}
exports.getAppComponentPath = getAppComponentPath;
function getComponentTemplate(host, compPath, tmplInfo) {
    var template = '';
    if (tmplInfo.templateProp) {
        template = tmplInfo.templateProp.initializer.text;
    }
    else if (tmplInfo.templateUrlProp) {
        var templateUrl = tmplInfo.templateUrlProp.initializer.text;
        var dir = core_1.dirname(core_1.normalize(compPath));
        var templatePath = core_1.join(dir, templateUrl);
        var buffer = host.read(templatePath);
        if (buffer) {
            template = buffer.toString();
        }
    }
    return template;
}
function getMetadataProperty(metadata, propertyName) {
    var properties = metadata.properties;
    var property = properties
        .filter(function (prop) { return prop.kind === ts.SyntaxKind.PropertyAssignment; })
        .filter(function (prop) {
        var name = prop.name;
        switch (name.kind) {
            case ts.SyntaxKind.Identifier:
                return name.getText() === propertyName;
            case ts.SyntaxKind.StringLiteral:
                return name.text === propertyName;
        }
        return false;
    })[0];
    return property;
}
//# sourceMappingURL=component.js.map