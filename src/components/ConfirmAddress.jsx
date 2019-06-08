// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper' // eslint-disable-line no-unused-vars
import Button from '@material-ui/core/Button' // eslint-disable-line no-unused-vars
import Modal from '@material-ui/core/Modal' // eslint-disable-line no-unused-vars

import MapModal from './MapModal' // eslint-disable-line no-unused-vars

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    position: 'absolute',
    top: '50%',
    marginRight: '-50%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none'
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  }
}))

const ConfirmAddress = (props) => {
  const classes = useStyles()

  // const handleClick = () => event => dispatch(checkAddress(state.addressReducer.originAddress, state.addressReducer.destinationAddress))

  return (
    <span className={classes.container}>
      <Paper className={classes.paper}>

        <Button component={Link} to={'/map'} className={classes.button}>
          Map
        </Button>

      </Paper>
    </span>
  )
}

const mapStateToProps = (state, ownProps) => ({ state })

export default connect(mapStateToProps)(ConfirmAddress)
