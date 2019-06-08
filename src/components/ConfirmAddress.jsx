// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper' // eslint-disable-line no-unused-vars
import Button from '@material-ui/core/Button' // eslint-disable-line no-unused-vars
import Modal from '@material-ui/core/Modal' // eslint-disable-line no-unused-vars

import MapModal from './MapModal' // eslint-disable-line no-unused-vars
import { getModalStyle } from '../utils.js'

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    display: 'flex',
    width: 675,
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

  const [modalStyle] = React.useState(getModalStyle)

  // const handleClick = () => event => dispatch(checkAddress(state.addressReducer.originAddress, state.addressReducer.destinationAddress))

  return (
    <Paper>

      <div style={modalStyle} className={classes.paper}>
        <Button component={Link} to={'/map'} className={classes.button}>
          Map
        </Button>
      </div>

    </Paper>
  )
}

const mapStateToProps = (state, ownProps) => ({ state })

export default connect(mapStateToProps)(ConfirmAddress)
