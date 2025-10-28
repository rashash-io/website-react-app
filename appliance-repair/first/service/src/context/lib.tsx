import { useContext, createContext } from "react"
import type { ThemeProviderState } from "@/context"



export const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
    themeSystem: undefined,
    setThemeSystem: () => null,
};
export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}