import { ADD_FROM_ADDRESS, ADD_TO_ADDRESS } from '../actionTypes'

const initialAddressState = { toAddress: '', fromAddress: '' }

export const addressReducer = (state = initialAddressState, action) => {
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
