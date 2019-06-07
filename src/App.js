import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Routes from './routes'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#004d40'
    },
    secondary: {
      main: '#f44336'
    }
  }
})

function App () {
  return (
    <React.Fragment>
      <CssBaseline />

      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>

    </React.Fragment>
  )
}

export default App
