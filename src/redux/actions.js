import { ADD_FROM_ADDRESS, ADD_TO_ADDRESS, VALIDATE_ADDRESS, GET_DIRECTIONS } from './actionTypes'
import { GOOGLE_DIRECTIONS_URL, ADDRESS_VALIDATION_URL } from '../.env.dev.js'

export const addDestination = address => ({
  type: ADD_FROM_ADDRESS,
  payload: address
})

export const addOrigin = address => ({
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

/// /////////////////////////////////////////////////////////////
/// /////////////////////////////////////////////////////////////
/// /////////////////////////////////////////////////////////////

export const checkAddress = (origin, destination) => {
  console.log({ origin, destination })
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

    const requestValidation = address => (
      fetch(url, options(address)) // eslint-disable-line no-undef
        .then(response => response.json())
    )

    let combinedData = { 'toValidationResponse': {}, 'fromValidationResponse': {} }
    Promise.all([requestValidation(origin), requestValidation(destination)])
      .then(values => {
        combinedData['toValidationResponse'] = values[0]
        combinedData['fromValidationResponse'] = values[1]
        return dispatch(validateAddress(combinedData))
      })
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
