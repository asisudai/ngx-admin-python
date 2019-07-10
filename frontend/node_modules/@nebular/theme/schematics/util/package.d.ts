import { Tree } from '@angular-devkit/schematics';
export declare function getNebularVersion(): string;
/**
 * Gets the version of the specified Nebular peerDependency
 * */
export declare function getNebularPeerDependencyVersionFromPackageJson(packageName: string): string;
/**
 * Gets the version of the specified dependency by looking at the package.json in the specified tree
 * */
export declare function getDependencyVersionFromPackageJson(tree: Tree, packageName: string): string;
export declare function addDependencyToPackageJson(tree: Tree, packageName: string, packageVersion: string): void;
export declare function addDevDependencyToPackageJson(tree: Tree, packageName: string, packageVersion: string): void;
