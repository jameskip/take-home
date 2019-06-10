// @flow
import React, { useEffect } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Paper from '@material-ui/core/Paper' // eslint-disable-line no-unused-vars
import Button from '@material-ui/core/Button' // eslint-disable-line no-unused-vars
import TextField from '@material-ui/core/TextField' // eslint-disable-line no-unused-vars
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container' // eslint-disable-line no-unused-vars
import Grid from '@material-ui/core/Grid'

import ConfirmAddress from './ConfirmAddress' // eslint-disable-line no-unused-vars
import { addOrigin, addDestination, checkAddress } from '../redux/actions'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    position: 'absolute',
    top: '25%',
    flexGrow: 1
  },
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    bottom: -10
  }
}))

type Props = {
  dispatch: (any) => void,
  state: { originAddress: string, destinationAddress: string, addressReducer: () => void, userReducer: () => void }
}

const AddressSearch = (props: Props) => {
  const { dispatch, state } = props
  const classes = useStyles()
  const [disabled, setDisabled] = React.useState(true)

  const handleClick = event => dispatch(checkAddress(state.addressReducer.originAddress, state.addressReducer.destinationAddress))
  const handleChange = (name: string) => event => {
    name === 'origin' ? dispatch(addOrigin(event.target.value)) : dispatch(addDestination(event.target.value))
    disableButton()
  }
  const disableButton = () => state.addressReducer.originAddress.length < 1 || state.addressReducer.destinationAddress < 1 ? setDisabled(true) : setDisabled(false)

  return (
    <Grid container spacing={2}>
      <div className={classes.container}>
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
          <Grid item xs={12}>
            <Button
              onClick={handleClick} to='/confirm'
              component={Link} className={classes.button}
              disabled={disabled}
            >
            Search
            </Button>
          </Grid>
        </Paper>
      </div>
    </Grid>
  )
}

const mapStateToProps = (state, ownProps) => ({ state })

export default connect(mapStateToProps)(AddressSearch)
