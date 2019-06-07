import { ADD_FROM_ADDRESS, ADD_TO_ADDRESS, VALIDATE_ADDRESS } from './actionTypes'
import { ADDRESS_VALIDATION_URL } from '../.env.dev.js'

export const addFromAddress = address => ({
  type: ADD_FROM_ADDRESS,
  payload: address
})

export const addToAddress = address => ({
  type: ADD_TO_ADDRESS,
  payload: address
})

export const validateAddress = json => ({
  type: VALIDATE_ADDRESS,
  payload: json
})

/// /////////////////////////////////////////////////////////////
/// /////////////////////////////////////////////////////////////
/// /////////////////////////////////////////////////////////////

export const checkAddress = (toAddress, fromAddress) => {
  console.log({ toAddress, fromAddress })
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
      fetch(url, options(address))
        .then(response => response.json())
    )

    let combinedData = { 'toValidationResponse': {}, 'fromValidationResponse': {} }

    Promise.all([requestValidation(toAddress), requestValidation(fromAddress)]).then(values => {
      combinedData['toValidationResponse'] = values[0]
      combinedData['fromValidationResponse'] = values[1]
      return dispatch(validateAddress(combinedData))
    }).catch(e => console.error(e))
  }
}
