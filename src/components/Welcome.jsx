import React from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import { addFromAddress, addToAddress, validateAddress, checkAddress } from '../redux/actions'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    position: 'absolute',
    top: '50%'
  },
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#38a3dc'
  }
}))

const Welcome = props => {
  console.log({ props })
  const { dispatch, state } = props

  const classes = useStyles()

  // const handleChange = name => event => {

  // }

  return (
    <div className={classes.container}>
      <Paper className={classes.root}>

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
        <Button
          variant="contained"
          className={classes.button}
          onClick={e => dispatch(checkAddress(e.target.value))}
        >
          Search
        </Button>
      </Paper>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return { state }
}

export default connect(mapStateToProps)(Welcome)
