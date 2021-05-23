import { createMuiTheme } from '@material-ui/core'

const colors = {
  primary: '#0d1f22',
  secondary: '#264027',
  tertiary: '#3c5233',
  quaternary: '#6f732f',
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
      light: colors.secondary,
      dark: colors.primary
    },
    secondary: {
      main: colors.quaternary,
      light: colors.tertiary,
      dark: colors.quaternary
    }
  },
})

export default theme