import { ADD_FROM_ADDRESS, ADD_TO_ADDRESS, VALIDATE_ADDRESS } from './actionTypes'

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
    const url = 'https://dev-api.shipwell.com/v2/locations/addresses/validate/'

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

    const requestTo = fetch(url, options(toAddress))
      .then(response => response.json())

    const requestFrom = fetch(url, options(fromAddress))
      .then(response => response.json())

    let combinedData = { 'to': {}, 'from': {} }

    Promise.all([requestTo, requestFrom]).then(values => {
      combinedData['toValidationResponse'] = values[0]
      combinedData['fromValidationResponse'] = values[1]
      return dispatch(validateAddress(combinedData))
    }).catch(e => console.error(e))
  }
}
