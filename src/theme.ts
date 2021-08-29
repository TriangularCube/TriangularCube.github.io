import { red } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

// A custom theme for this app
export const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})
