import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import ConfirmAddress from './components/ConfirmAddress'
import AddressSearch from './components/AddressSearch'
import MapModal from './components/MapModal'
import TopNav from './components/TopNav'

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <>
      <TopNav {...props} />
      <AddressSearch {...props} />
    </>
  )} />
)

export default props => (
  <BrowserRouter>
    <Route path='/' component={HomeRoute} />
    <Route exact path='/map' component={MapModal} />
    <Route exact path='/confirm' component={ConfirmAddress} />
  </BrowserRouter>
)
