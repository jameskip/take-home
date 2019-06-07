import React from 'react'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Routes from './routes'
import store from './redux/store'

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

const App = () => {
  return (
    <>
      <CssBaseline />

      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </Provider>

    </>
  )
}

export default App
