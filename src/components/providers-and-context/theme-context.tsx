import { createContext, useContext } from 'react'

type Theme = {
  foreground: string
  background: string
}

type Themes = {
  light: Theme,
  dark: Theme
}

export const themes: Themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}

export const ThemeContext = createContext(
  themes.dark
)

type DynamicThemeContextProps = {
  theme: 'light' | 'dark',
  children: any
}

export const useTheme = (): Theme => {
  return useContext(ThemeContext)
}

export const DynamicThemeContext = ({ theme, children }: DynamicThemeContextProps) => {
  return (
    <ThemeContext.Provider value={themes[theme]}>
      {children}
    </ThemeContext.Provider>

  )
}

