import { ADD_FROM_ADDRESS, ADD_TO_ADDRESS, VALIDATE_ADDRESS } from '../actionTypes'
import { combineReducers } from 'redux'

const initialAddressState = { toAddress: '', fromAddress: '' }

const addressReducer = (state = initialAddressState, action) => {
  switch (action.type) {
    case ADD_FROM_ADDRESS:
      const fromAddress = action.payload
      return { ...state, fromAddress }

    case ADD_TO_ADDRESS:
      const toAddress = action.payload
      return { ...state, toAddress }

    default:
      return state
  }
}

const initialValidationState = { isFetching: false, didInvalidate: false, validatedAddress: {} }

const validationReducer = (state = initialValidationState, action) => {
  switch (action.type) {
    case VALIDATE_ADDRESS:
      const validatedAddress = action.payload
      state.isFetching = true
      console.log('action: ', action)
      return { ...state, validatedAddress }
    default:
      return state
  }
}

const rootReducer = combineReducers({ addressReducer, validationReducer })

export default rootReducer
