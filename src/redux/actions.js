import { ADD_FROM_ADDRESS, ADD_TO_ADDRESS, VALIDATE_ADDRESS, GET_DIRECTIONS, GET_USER } from './actionTypes'
import { GOOGLE_DIRECTIONS_URL, ADDRESS_VALIDATION_URL, USER_AUTH_URL, AUTH_TOKEN } from '../.env.dev.js'

export const addOrigin = address => ({
  type: ADD_FROM_ADDRESS,
  payload: address
})

export const addDestination = address => ({
  type: ADD_TO_ADDRESS,
  payload: address
})

export const validateAddress = json => ({
  type: VALIDATE_ADDRESS,
  payload: json
})

export const getDirections = address => ({
  type: GET_DIRECTIONS,
  payload: address
})

export const getUserObj = user => ({
  type: GET_USER,
  payload: user
})

export const checkAddress = (origin, destination) => {
  return dispatch => {
    const url = ADDRESS_VALIDATION_URL

    const options = address => {
      return {
        method: 'POST',
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formatted_address: address })
      }
    }

    const requestValidation = address => fetch(url, options(address)).then(response => response.json()) // eslint-disable-line no-undef

    let combinedData = { 'validOrigin': {}, 'validDestination': {} }
    Promise.all([requestValidation(origin), requestValidation(destination)])
      .then(values => {
        combinedData['validOrigin'] = values[0]
        combinedData['validDestination'] = values[1]
        dispatch(validateAddress(combinedData))
        if (values[0].error || values[1].error) alert('Please check your inputs and try again.')
      })
      .catch(e => console.error(e))
  }
}

export const getUser = () => {
  return dispatch => {
    const url = USER_AUTH_URL
    const token = AUTH_TOKEN

    const options = {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        Authorization: token
      }
    }

    fetch(url, options) // eslint-disable-line no-undef
      .then(response => response.json())
      .then(user => dispatch(getUserObj(user)))
      .catch(e => console.error(e))
  }
}

export const mapDirections = (origin, destination) => {
  return dispatch => {
    const url = GOOGLE_DIRECTIONS_URL

    fetch(url) // eslint-disable-line no-undef
      .then(response => response.json())
      .then(values => dispatch(getDirections(values)))
      .catch(e => console.error(e))
  }
}
