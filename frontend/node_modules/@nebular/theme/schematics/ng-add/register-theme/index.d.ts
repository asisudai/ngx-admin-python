import { Schema } from '../schema';
/**
 * Registers customizable scss theme in the specified project.
 * It creates `theme.scss` file which manages theme content and it's customization.
 * Also as importing `theme.scss` in the styles.scss file and installing the theme globally.
 * If the project uses *.css files it'll throw the error. Because we can't use scss themes
 * in the css Angular project.
 * */
export declare function registerCustomizableTheme(options: Schema): (tree: import("@angular-devkit/schematics/src/tree/interface").Tree) => import("@angular-devkit/schematics/src/tree/interface").Tree;
/**
 * Registers prebuilt css themes by inserting them in the angular.json styles.
 * */
export declare function registerPrebuiltTheme(options: Schema): (tree: import("@angular-devkit/schematics/src/tree/interface").Tree) => import("@angular-devkit/schematics/src/tree/interface").Tree;
