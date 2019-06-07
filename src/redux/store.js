import { createStore } from 'redux'
import address from './reducers/address'
// NOTE: will need to set up rootReducer later
// import rootReducer from './reducers'

export default createStore(address, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
