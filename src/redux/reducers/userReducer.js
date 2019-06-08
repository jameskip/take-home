import { GET_USER } from '../actionTypes'

const initialAddressState = { user: {} }

export const userReducer = (state = initialAddressState, action) => {
  switch (action.type) {
    case GET_USER:
      const user = action.payload
      return { ...state, user }

    default:
      return state
  }
}
