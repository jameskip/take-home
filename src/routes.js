import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import VisableWelcome from './components/AddressSearch'

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <>
      <VisableWelcome {...props}/>
    </>
  )}/>
)

export default props => (
  <BrowserRouter>
    <Route path='/' component={HomeRoute} />
  </BrowserRouter>
)
