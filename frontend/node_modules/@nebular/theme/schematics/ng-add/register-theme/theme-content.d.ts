export declare function createThemeContent(themeName: string): string;
export declare const stylesContent = "@import 'themes';\n\n@import '~@nebular/theme/styles/globals';\n\n@include nb-install() {\n  @include nb-theme-global();\n};\n";
