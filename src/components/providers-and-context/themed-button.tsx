import { useState } from 'react'
import { ThemeContext, DynamicThemeContext, useTheme } from './theme-context'

const MyButton = ({ handleClick, children, ...props }) => {
  // const theme = useContext(ThemeContext)
  const theme = useTheme()

  return (
    <button {...props} style={{ backgroundColor: theme.background, color: theme.foreground }} onClick={handleClick}>
      {children}
    </button>
  )
}

export const ThemedButton = (props) => {
  const [state, setState] = useState<{ theme: 'light' | 'dark' }>({ theme: 'light' })
  const handleClick = () => setState({ theme: state.theme === 'dark' ? 'light' : 'dark' })

  return (
    <DynamicThemeContext theme={state.theme}>
      <MyButton {...props} handleClick={handleClick}>
        Click me to change the colors
      </MyButton>
    </DynamicThemeContext>
  )
}

export default ThemedButton