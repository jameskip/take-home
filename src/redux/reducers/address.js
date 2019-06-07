import { ADD_FROM_ADDRESS, ADD_TO_ADDRESS } from '../actionTypes'

export default function (state = { toAddress: '123 To Street', fromAddress: '123 From Street' }, action) {
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
