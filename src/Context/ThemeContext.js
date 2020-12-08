import React,{useState,createContext} from 'react'
export const ThemeContext=createContext()

const ThemeContextProvider=(props)=>{
    const [theme, settheme] = useState(true)
    const toggleTheme=()=>{
        settheme(!theme)
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;