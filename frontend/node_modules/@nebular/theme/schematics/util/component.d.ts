import { Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';
export declare class TemplateDescriptor {
    templateProp: ts.PropertyAssignment;
    templateUrlProp: ts.PropertyAssignment;
    componentPath: string;
    template: string;
    constructor(templateProp: ts.PropertyAssignment, templateUrlProp: ts.PropertyAssignment, componentPath: string, template: string);
    isInline(): boolean;
}
export declare function getComponentTemplateDescriptor(host: Tree, componentPath: string): TemplateDescriptor;
export declare function getAppComponentPath(tree: Tree, projectName: string): string;
