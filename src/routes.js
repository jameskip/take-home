import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Welcome from './components/AddressSearch'
import MapModal from './components/MapModal'

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <>
      <Welcome {...props}/>
    </>
  )} />
)

export default props => (
  <BrowserRouter>
    <Route path='/' component={HomeRoute} />
    <Route path='/map' component={MapModal} />
  </BrowserRouter>
)
