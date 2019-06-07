import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import { addFromAddress, addToAddress } from '../redux/actions'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}))

const Welcome = props => {
  console.log({ props })
  const { dispatch, state } = props

  const classes = useStyles()

  // const handleChange = name => event => {

  // }

  return (
    <>

      <TextField
        required
        id="standard-required"
        label="To"
        value={state.toAddress}
        onChange={e => dispatch(addToAddress(e.target.value))}
        className={classes.textField}
        margin="normal"
      />

      <TextField
        required
        id="standard-required"
        label="From"
        value={state.fromAddress}
        onChange={e => dispatch(addFromAddress(e.target.value))}
        className={classes.textField}
        margin="normal"
      />

    </>
  )
}

function mapStateToProps (state) {
  console.log(state)
  return { state }
}

export default connect(mapStateToProps)(Welcome)
