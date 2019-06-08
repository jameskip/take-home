// @flow
import React, { useEffect } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Paper from '@material-ui/core/Paper' // eslint-disable-line no-unused-vars
import Button from '@material-ui/core/Button' // eslint-disable-line no-unused-vars
import TextField from '@material-ui/core/TextField' // eslint-disable-line no-unused-vars
import { makeStyles } from '@material-ui/core/styles'

import ConfirmAddress from './ConfirmAddress' // eslint-disable-line no-unused-vars
import { addOrigin, addDestination, checkAddress, getUser } from '../redux/actions'

// CSS Styles
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
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    bottom: -10
  }
}))

// Type Checking
type Props = {
  dispatch: (any) => void,
  state: { originAddress: string, destinationAddress: string, addressReducer: () => void }
}

const AddressSearch = (props: Props) => {
  const { dispatch, state } = props
  const classes = useStyles()

  // Event Handlers
  const handleChange = (name: string) => event => name === 'origin' ? dispatch(addOrigin(event.target.value)) : dispatch(addDestination(event.target.value))
  const handleClick = event => dispatch(checkAddress(state.addressReducer.originAddress, state.addressReducer.destinationAddress))

  // Lifecycle Hooks
  useEffect(() => dispatch(getUser()), [dispatch]) // optional second argument provided to useEffect() in order to only run on mount and unmount

  return (
    <div id="main-contain" className={classes.container}>
      <Paper className={classes.root}>

        <TextField
          required
          id="standard-required"
          label="From"
          value={state.originAddress}
          onChange={handleChange('origin')}
          className={classes.textField}
          margin="normal"
        />

        <TextField
          required
          id="standard-required"
          label="To"
          value={state.destinationAddress}
          onChange={handleChange('destination')}
          className={classes.textField}
          margin="normal"
        />

        <Button
          onClick={handleClick} to='/confirm'
          component={Link} className={classes.button}
        >
            Search
        </Button>

      </Paper>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({ state })

export default connect(mapStateToProps)(AddressSearch)
