import React from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper' // eslint-disable-line no-unused-vars
import Button from '@material-ui/core/Button' // eslint-disable-line no-unused-vars
import TextField from '@material-ui/core/TextField' // eslint-disable-line no-unused-vars
import { makeStyles } from '@material-ui/core/styles'

import { addFromAddress, addToAddress, checkAddress } from '../redux/actions'

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
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#38a3dc'
  }
}))

const AddressSearch = props => {
  console.log({ props })
  const { dispatch, state } = props

  const classes = useStyles()

  // const handleChange = name => event => {

  // }

  return (
    <div id="main-contain" className={classes.container}>

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
          onClick={e => {
            return dispatch(checkAddress(state.addressReducer.toAddress, state.addressReducer.fromAddress))
          }}
        >
          Search
        </Button>

      </Paper>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log({ state, ownProps })
  return { state }
}

export default connect(mapStateToProps)(AddressSearch)
