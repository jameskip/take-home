import { combineReducers } from 'redux'

import { validationReducer } from './validationReducer'
import { addressReducer } from './addressReducer'
import { userReducer } from './userReducer'

const rootReducer = combineReducers({ addressReducer, validationReducer, userReducer })

export default rootReducer
