import { VALIDATE_ADDRESS } from '../actionTypes'

const initialValidationState = { isFetching: false, didInvalidate: false, validatedAddress: {} }

export const validationReducer = (state = initialValidationState, action) => {
  switch (action.type) {
    case VALIDATE_ADDRESS:
      const validatedAddress = action.payload
      const isFetching = true
      return { ...state, validatedAddress, isFetching }

    default:
      return state
  }
}
