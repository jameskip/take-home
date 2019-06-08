import { VALIDATE_ADDRESS } from '../actionTypes'

const initialValidationState = { isFetching: false, didInvalidate: false, validatedAddress: {} }

export const validationReducer = (state = initialValidationState, action) => {
  switch (action.type) {
    case VALIDATE_ADDRESS:
      const validatedAddress = action.payload
      return { ...state, validatedAddress }

    default:
      return state
  }
}
