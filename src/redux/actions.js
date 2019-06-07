import { ADD_FROM_ADDRESS, ADD_TO_ADDRESS, VALIDATE_ADDRESS } from './actionTypes'

export const addFromAddress = address => ({
  type: ADD_FROM_ADDRESS,
  payload: address
})

export const addToAddress = address => ({
  type: ADD_TO_ADDRESS,
  payload: address,
  receivedAt: Date.now()
})

export const validateAddress = address => ({
  type: VALIDATE_ADDRESS,
  payload: address
})

export const checkAddress = address => {
  return dispatch => {
    const url = 'https://dev-api.shipwell.com/v2/locations/addresses/validate/'

    const options = {
      method: 'POST',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ formatted_address: '209 West 9th St. Austin, Texas 78701' })
    }

    return fetch(url, options)
      .then(response => response.json())
      .then(json => dispatch(validateAddress(json)))
      .catch(e => console.error(e))
  }
}
