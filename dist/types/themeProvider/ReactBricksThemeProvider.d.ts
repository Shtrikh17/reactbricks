import React from "react";
interface ReactBricksThemeExport {
    bricksConfig: ReactBricksThemeConfig;
}
interface ColorsConfig {
    Success?: string;
    Error?: string;
    Warning?: string;
    Info?: string;
}
interface SizesConfig {
    Button: {
        Small: string;
        Medium: string;
        Large: string;
    };
}
interface ReactBricksThemeConfig {
    GeneralColors: ColorsConfig;
    GeneralSizes: SizesConfig;
}
declare const ReactBricksThemeContext: React.Context<ReactBricksThemeExport>;
declare const ReactBricksThemeProvider: (props: {
    config: ReactBricksThemeConfig;
}) => import("react/jsx-runtime").JSX.Element;
declare const useReactBricksTheme: () => ReactBricksThemeExport;
export type { ReactBricksThemeExport };
export { ReactBricksThemeContext, ReactBricksThemeProvider, useReactBricksTheme };
//# sourceMappingURL=ReactBricksThemeProvider.d.ts.map