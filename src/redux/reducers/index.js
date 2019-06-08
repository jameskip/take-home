import { combineReducers } from 'redux'

import { validationReducer } from './validationReducer'
import { addressReducer } from './addressReducer'

const rootReducer = combineReducers({ addressReducer, validationReducer })

export default rootReducer
