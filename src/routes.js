import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import ConfirmAddress from './components/ConfirmAddress'
import AddressSearch from './components/AddressSearch'
import MapModal from './components/MapModal'
import TopNav from './components/TopNav'

export default props => (
  <BrowserRouter>
    <Route path='/' component={TopNav} />
    <Route exact path='/' component={AddressSearch} />
    <Route exact path='/map' component={MapModal} />
    <Route exact path='/confirm' component={ConfirmAddress} />
  </BrowserRouter>
)
