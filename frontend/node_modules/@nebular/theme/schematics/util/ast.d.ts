import { Tree } from '@angular-devkit/schematics';
import { WorkspaceProject } from '@angular-devkit/core/src/workspace';
export declare function isImportedInMainModule(tree: Tree, project: WorkspaceProject, moduleName: string, importPath: string): boolean;
export declare function getAppModulePath(host: Tree, mainPath: string): string;
