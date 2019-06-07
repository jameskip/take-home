import React from 'react'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Routes from './routes'
import store from './redux/store'
import './App.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#004d40'
    },
    secondary: {
      main: '#f44336'
    },
    background: {
      default: '#F6F8FA'
    }
  }
})

const App = () => {
  return (
    <>
      <Provider store={store}>

        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </MuiThemeProvider>

      </Provider>
    </>
  )
}

export default App
