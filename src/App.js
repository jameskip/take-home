import React from 'react' // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux' // eslint-disable-line no-unused-vars

import CssBaseline from '@material-ui/core/CssBaseline' // eslint-disable-line no-unused-vars
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles' // eslint-disable-line no-unused-vars

import Routes from './routes' // eslint-disable-line no-unused-vars
import store from './redux/store'
import './App.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#38a3dc'
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
