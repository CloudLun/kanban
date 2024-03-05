import React, {
    createContext, 
    useState, 
    Dispatch,
    SetStateAction
} from "react";

interface darkThemeProviderProps {
    children: React.ReactNode
}

type DarkThemeContextType = {
    darkTheme: boolean;
    setDarkTheme: Dispatch<SetStateAction<boolean>>;
}

const DarkThemeContext = createContext({} as DarkThemeContextType)

const DarkThemeProvider = ({ children }: darkThemeProviderProps) => {
    const [darkTheme, setDarkTheme] = useState(true)

    return (
        <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
            {children}
        </DarkThemeContext.Provider>
    )

}

export { DarkThemeContext, DarkThemeProvider }

