import React, {useState, useEffect} from "react"

interface Colors{
    success: string;
    error: string;
    warning: string;
}

interface ReactBricksThemeExport{
    bricksConfig: ReactBricksThemeConfig
}

interface ColorsConfig{
    Success?: string;
    Error?: string;
    Warning?: string;
    Info?: string;
}

interface SizesConfig{
    Button: {
        Small: string;
        Medium: string;
        Large: string;
    }
}

interface ReactBricksThemeConfig{
    GeneralColors: ColorsConfig;
    GeneralSizes: SizesConfig;
}

const DefaultThemeConfig: ReactBricksThemeConfig = {
    GeneralColors: {
        Success: "green",
        Warning: "orange",
        Error: "red",
        Info: "lightblue"
    },
    GeneralSizes: {
        Button: {
            Small: "10px",
            Medium: "20px",
            Large: "30px"
        }
    }
}

const ReactBricksThemeContext = React.createContext({} as ReactBricksThemeExport)

const ReactBricksThemeProvider = (props: {config: ReactBricksThemeConfig}) => {
    const targetConfig = props['config'];
    const [innerConfig, setInnerConfig] = useState(DefaultThemeConfig)

    useEffect(() => {
        if(!targetConfig) return;
        setInnerConfig(prevState => ({...prevState, ...targetConfig}))
    }, [props])

    return <ReactBricksThemeContext.Provider value={{bricksConfig: innerConfig}} />
}

const useReactBricksTheme = () => {
    const context = React.useContext(ReactBricksThemeContext)
    if (context === undefined) {
        throw new Error(`useReactBricksThemeContext must be used within a ReactBricksThemeProvider`)
    }
    return context;
}

export type {ReactBricksThemeExport}
export {ReactBricksThemeContext, ReactBricksThemeProvider, useReactBricksTheme}