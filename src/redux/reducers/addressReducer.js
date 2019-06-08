import { ADD_FROM_ADDRESS, ADD_TO_ADDRESS } from '../actionTypes'

const initialAddressState = { originAddress: '', destinationAddress: '' }

export const addressReducer = (state = initialAddressState, action) => {
  switch (action.type) {
    case ADD_FROM_ADDRESS:
      const originAddress = action.payload
      return { ...state, originAddress }

    case ADD_TO_ADDRESS:
      const destinationAddress = action.payload
      return { ...state, destinationAddress }

    default:
      return state
  }
}
