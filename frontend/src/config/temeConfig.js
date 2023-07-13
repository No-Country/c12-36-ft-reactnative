import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b2c4a'
    },
    secondary: {
      main: '#f1f0ea'
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    fontFamily: [
      'Poppins', 'sans-serif'

    ].join(',')
  }
})

export default theme
