import { ADD_FROM_ADDRESS, ADD_TO_ADDRESS } from './actionTypes'

export const addFromAddress = address => ({
  type: ADD_FROM_ADDRESS,
  payload: address
})

export const addToAddress = address => ({
  type: ADD_TO_ADDRESS,
  payload: address
})
