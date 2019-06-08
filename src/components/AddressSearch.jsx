// @flow
import React from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper' // eslint-disable-line no-unused-vars
import Button from '@material-ui/core/Button' // eslint-disable-line no-unused-vars
import TextField from '@material-ui/core/TextField' // eslint-disable-line no-unused-vars
import { makeStyles } from '@material-ui/core/styles'
import MapModal from './MapModal' // eslint-disable-line no-unused-vars

import { addOrigin, addDestination, checkAddress } from '../redux/actions'

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

type Props = {
  dispatch: (any) => void,
  state: { originAddress: string, destinationAddress: string, addressReducer: () => void }
}

const AddressSearch = (props: Props) => {
  const { dispatch, state } = props

  const classes = useStyles()

  const handleChange = (name: string) => event => name === 'origin' ? dispatch(addOrigin(event.target.value)) : dispatch(addDestination(event.target.value))

  const handleClick = (name: string) => event => dispatch(checkAddress(state.addressReducer.originAddress, state.addressReducer.destinationAddress))

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

        <span onClick={handleClick('search')}>
          <MapModal
            location={`&origin=${state.addressReducer.originAddress}&destination=${state.addressReducer.destinationAddress}`}
            className={classes.button}
          />
        </span>
      </Paper>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({ state })

export default connect(mapStateToProps)(AddressSearch)
